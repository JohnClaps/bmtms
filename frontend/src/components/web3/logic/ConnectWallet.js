import React, { useState } from "react";
import { NetworkErrorMessage } from "./NetworkErrorMessage";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
import axios from "axios"; // Import axios

export function ConnectWallet({ networkError, dismiss }) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [localNetworkError, setLocalNetworkError] = useState(null);
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum) {
      // Clear any previous error before attempting a new connection
      setLocalNetworkError(null);

      try {
        // Force MetaMask to open the login prompt every time
        const accounts = await window.ethereum.request({ method: "wallet_requestPermissions", params: [{ eth_accounts: {} }] });
        
        if (accounts) {
          // Request account list again to retrieve the wallet address
          const accountList = await window.ethereum.request({ method: "eth_requestAccounts" });
          const address = accountList[0];
          setWalletAddress(address);

          // Call your backend API to authenticate the wallet address using axios
          const response = await axios.post(
            "http://localhost:4000/getUserRole",
            { walletAddress: address },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          // Check the response status and redirect based on the user's role
          if (response.data.role === "admin") {
            navigate("/admin");
          } else if (response.data.role === "verifier") {
            navigate("/verifier");
          } else if (response.data.role === "user") {
            navigate("/user");
          } else {
            throw new Error("Role not recognized");
          }
        }
      } catch (error) {
        // Check if the error is due to MetaMask window being closed
        if (error.message === 'User rejected the request.') {
          // Don't display an error message when MetaMask is closed without selection
          setLocalNetworkError(null);
        } else {
          console.error("Connection or authentication error:", error);
          setLocalNetworkError("Failed to connect or authenticate wallet. Please try again.");
        }
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to connect your wallet.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {networkError && (
            <NetworkErrorMessage
              message={networkError}
              dismiss={dismiss}
            />
          )}
          {localNetworkError && (
            <NetworkErrorMessage
              message={localNetworkError}
              dismiss={() => setLocalNetworkError(null)}
            />
          )}
        </div>
        <div className="col-6 p-4 text-center">
          <p>Please connect to your wallet.</p>
          <button
            className="btn btn-warning"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}


// import React, { useState, forwardRef, useImperativeHandle } from "react";
// import { NetworkErrorMessage } from "./NetworkErrorMessage";
// import { useNavigate } from "react-router-dom"; // Assuming you're using React Router for navigation
// import axios from "axios"; // Import axios

// export const ConnectWallet = forwardRef(({ networkError, dismiss }, ref) => {
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [localNetworkError, setLocalNetworkError] = useState(null);
//   const navigate = useNavigate();

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       // Clear any previous error before attempting a new connection
//       setLocalNetworkError(null);

//       try {
//         // Force MetaMask to open the login prompt every time
//         const accounts = await window.ethereum.request({
//           method: "wallet_requestPermissions",
//           params: [{ eth_accounts: {} }]
//         });
        
//         if (accounts) {
//           // Request account list again to retrieve the wallet address
//           const accountList = await window.ethereum.request({ method: "eth_requestAccounts" });
//           const address = accountList[0];
//           setWalletAddress(address);

//           // Call your backend API to authenticate the wallet address using axios
//           const response = await axios.post(
//             "http://localhost:4000/getUserRole",
//             { walletAddress: address },
//             {
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             }
//           );

//           // Check the response status and redirect based on the user's role
//           if (response.data.role === "admin") {
//             navigate("/admin");
//           } else if (response.data.role === "verifier") {
//             navigate("/verifier");
//           } else if (response.data.role === "user") {
//             navigate("/user");
//           } else {
//             throw new Error("Role not recognized");
//           }
//         }
//       } catch (error) {
//         // Check if the error is due to MetaMask window being closed
//         if (error.message === 'User rejected the request.') {
//           // Don't display an error message when MetaMask is closed without selection
//           setLocalNetworkError(null);
//         } else {
//           console.error("Connection or authentication error:", error);
//           setLocalNetworkError("Failed to connect or authenticate wallet. Please try again.");
//         }
//       }
//     } else {
//       alert("MetaMask is not installed. Please install MetaMask to connect your wallet.");
//     }
//   };

//   // Use `useImperativeHandle` to expose the `connectWallet` function
//   useImperativeHandle(ref, () => ({
//     connectWallet
//   }));

//   return (
//     <div className="container">
//       <div className="row justify-content-md-center">
//         <div className="col-12 text-center">
//           {networkError && (
//             <NetworkErrorMessage
//               message={networkError}
//               dismiss={dismiss}
//             />
//           )}
//           {localNetworkError && (
//             <NetworkErrorMessage
//               message={localNetworkError}
//               dismiss={() => setLocalNetworkError(null)}
//             />
//           )}
//         </div>
//         <div className="col-4 p-2 text-center">
//           <button
//             className="btn btn-warning mt-4 "
//             type="button"
//             onClick={connectWallet}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// });
// // import React, { useState } from "react";
// // import axios from "axios"; // Make sure you have axios installed
// // import { Button } from "react-bootstrap";

// // export function ConnectWallet({ connectWallet, networkError, dismiss }) {
// //   const [walletAddress, setWalletAddress] = useState(null);
// //   const [authError, setAuthError] = useState(null);

// //   const handleMetaMaskLogin = async () => {
// //     try {
// //       // Connect to MetaMask and get the wallet address
// //       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
// //       const walletAddress = accounts[0];

// //       // Set the wallet address in the state
// //       setWalletAddress(walletAddress);

// //       // Make an API call to authenticate the wallet address
// //       const response = await axios.post('http://localhost:5000/api/authenticate-wallet', {
// //         walletAddress,
// //       });

// //       if (response.data.success) {
// //         // User is authenticated, display the correct dashboard
// //         console.log('User authenticated', response.data.user);
// //         // You can now display the user’s dashboard or any other action
// //       } else {
// //         // User not authenticated (wallet address not registered)
// //         setAuthError('Wallet address not registered. Please sign up.');
// //       }
// //     } catch (error) {
// //       console.error('MetaMask login error', error);
// //       setAuthError('Error connecting to MetaMask.');
// //     }
// //   };

// //   return (
// //     <div>
// //       {/* Render any errors if they occur */}
// //       {authError && <p style={{ color: 'red' }}>{authError}</p>}
      
// //       <Button onClick={handleMetaMaskLogin}>Login with MetaMask</Button>
// //     </div>
// //   );
// // }
