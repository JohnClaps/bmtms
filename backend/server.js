const express = require('express');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
//Initialise IPFS client
// const ipfs = create('https://ipfs.infura.io:5001/api/v0');
// 6ad6f57c22464d7aad1d1894b82776d5
// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET;

// Helper function to determine role based on user_id prefix
const determineUserRole = (userId) => {
  if (!userId || typeof userId !== 'string') return "guest";  // Default role if user_id is undefined or not a string
  if (userId.toLowerCase().startsWith("adm")) return "admin";
  if (userId.toLowerCase().startsWith("usr")) return "user";
  if (userId.toLowerCase().startsWith("vfr")) return "verifier";
  return "guest";  // Default role if no match
};

// Register a user (with an OTP  secret)
app.post('/submit', async (req, res) => {
    const { userId, username, walletAddress, licenseNumber, licenseType } = req.body;

    const role = determineUserRole(userId); // Determine role from user_id format

    const client = await pool.connect();
    try {
        const result = await client.query(
            'INSERT INTO users (userId, username, walletAddress, licenseNumber, licenseType, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [userId, username, walletAddress, licenseNumber, licenseType, role]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).send('Error registering user');
    } finally {
        client.release();
    }
});

// User management routes

// Get all users
app.get('/manage_users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users'); // PostgreSQL query
    res.json(result.rows); // Respond with the users
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/manage_users', async (req, res) => {
  const { userId, username, walletAddress, licenseNumber, licenseType } = req.body;
  const role = determineUserRole(userId);
  
  try {
      const result = await pool.query(
          'INSERT INTO users (userId, username, walletAddress, licenseNumber, licenseType, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
          [userId, username, walletAddress, licenseNumber, licenseType, role]
      );
      res.status(201).json(result.rows[0]);
  } catch (error) {
      logger.error(`Error while adding user: ${error.message}`, { userId, username });
      res.status(400).json({ message: error.message });
  }
});

app.put('/manage_users/:id', async (req, res) => {
  const { id } = req.params;
  const { userId, username, walletAddress, licenseNumber, licenseType, role } = req.body;
  const determinedRole = role || determineUserRole(userId);

  try {
      const result = await pool.query(
          'UPDATE users SET userId = $1, username = $2, walletAddress = $3, licenseNumber = $4, licenseType = $5, role = $6 WHERE id = $7 RETURNING *',
          [userId, username, walletAddress, licenseNumber, licenseType, determinedRole, id]
      );

      if (result.rows.length === 0) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.json(result.rows[0]);
  } catch (error) {
      logger.error(`Error while updating user: ${error.message}`, { userId, username, userId });
      res.status(400).json({ message: error.message });
  }
});

// POST endpoint to handle mineral extraction data submission
app.post('/submit-extraction', async (req, res) => {
  const { type, amount, date, location, remarks } = req.body;

  // Validate required fields
  if (!type || !amount || !date || !location) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  const client = await pool.connect();
  try {
    // Insert data into the mineral_extraction table
    const result = await client.query(
      `INSERT INTO mineral_extraction (mineralType, extractionAmount, productionDate, location, remarks) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [type, amount, date, location, remarks]
    );

    console.log('New extraction data inserted:', result.rows[0]);

    // Respond with the new record
    res.status(201).json({ message: 'Extraction data submitted successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Failed to submit extraction data:', error);
    res.status(500).json({ message: 'An error occurred while submitting data.' });
  } finally {
    client.release();  // Ensure the client is released back to the pool
  }
});
// Endpoint to fetch extraction history
app.get('/extraction-history', async (req, res) => {
  try {
    // Query the database to get all mineral extraction records, ordered by production date
    const result = await pool.query('SELECT * FROM mineral_extraction ORDER BY productionDate DESC');
    
    // Send the rows as JSON response with a 200 status code
    res.status(200).json(result.rows);
  } catch (error) {
    // Log the error to the console for debugging
    console.error('Error fetching extraction history:', error);
    
    // Send a 500 status code with an error message
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Endpoint to check the user's role based on wallet address
app.post("/getUserRole", async (req, res) => {
  const { walletAddress } = req.body;

  if (!walletAddress) {
    return res.status(400).json({ error: "Wallet address is required" });
  }

  try {
    const query = "SELECT role FROM users WHERE walletAddress = $1";
    const result = await pool.query(query, [walletAddress]);

    if (result.rows.length > 0) {
      const role = result.rows[0].role;
      res.json({ role });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error querying database:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//Check and Log Wallet Address
app.post('/checkWalletAddress', async (req, res) => {
  const { walletAddress } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE walletaddress = $1',
      [walletAddress]
    );

    if (result.rows.length > 0) {
      // Wallet address exists in the database
      return res.json({ exists: true });
    } else {
      // Wallet address does not exist
      return res.json({ exists: false, walletAddress }); // Return wallet address in response
      return res.status(500).json({ error: 'Internal server error' });
    }
  } catch (error) {
    console.error('Database query error:', error);
  }
});

// Express example
// PUT endpoint to update IPFS hash
app.put('/update-ipfs', async (req, res) => {
  const { id, ipfshash } = req.body;

  if (!id || !ipfsHash) {
    return res.status(400).json({ message: 'Missing required fields: id or ipfsHash' });
  }

  try {
    // Query to update the IPFS hash for the given id
    const result = await pool.query(
      'UPDATE mineral_extraction SET ipfshash = $1 WHERE id = $2 RETURNING *', 
      [ipfshash, id]
    );

    // If no rows were updated, the ID was not found
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Extraction record not found' });
    }

    // Send success response
    res.status(200).json({ message: 'IPFS hash updated successfully', data: result.rows[0] });
  } catch (error) {
    console.error('Failed to update IPFS hash', error);
    res.status(500).json({ message: 'Failed to update IPFS hash' });
  }
});
app.put('/update-ipfs', async (req, res) => {
  const { id, ipfsHashes } = req.body;

  if (!id || !ipfsHashes || ipfsHashes.length === 0) {
    return res.status(400).json({ message: 'Missing required fields: id or IPFS hashes' });
  }

  try {
    // Update the record in the database with the IPFS hashes
    // Assuming you're storing the IPFS hashes as an array in the database
    await pool.query(
      'UPDATE mineral_extraction SET ipfshash = $1 WHERE id = $2',
      [ipfshash, id]
    );

    res.status(200).json({ message: 'IPFS hashes updated successfully' });
  } catch (error) {
    console.error('Failed to update IPFS hashes', error);
    res.status(500).json({ message: 'Failed to update IPFS hashes' });
  }
});

// Protected routes
app.get('/admin', authenticate(['admin']), (req, res) => {
  res.send('Welcome Admin');
});

app.get('/user', authenticate(['user', 'admin']), (req, res) => {
  res.send('Welcome User');
});

app.get('/verifier', authenticate(['verifier', 'admin']), (req, res) => {
  res.send('Welcome Verifier');
});
app.get('/guest',authenticate('guest')),(req,res)=>{
  res.send('Welcome guest')
}

// Start the server
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
