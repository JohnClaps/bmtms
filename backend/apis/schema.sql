
/*Date 05.11.24*/
CREATE TABLE users (
    id SERIAL PRIMARY KEY,  -- Unique identifier for each user
    userId VARCHAR(255) NOT NULL UNIQUE,  -- User ID (should be unique)
    username VARCHAR(255) NOT NULL,  -- Username of the user
    walletAddress VARCHAR(255) NOT NULL UNIQUE,  -- User's wallet address (should be unique)
    licenseNumber VARCHAR(255) NOT NULL,  -- License number of the user
    licenseType VARCHAR(255) NOT NULL,  -- Type of license (e.g., mining license
    role VARCHAR(50) DEFAULT 'guest',  -- User role (default to 'guest')
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Timestamp for when the user was created
);
/*Mineral extraction table*/
CREATE TABLE mineral_extraction (
  id SERIAL PRIMARY KEY,
  mineralType VARCHAR(50) NOT NULL,
  extractionAmount NUMERIC NOT NULL,
  productionDate DATE NOT NULL,
  location VARCHAR(50) NOT NULL,
  remarks TEXT
);

