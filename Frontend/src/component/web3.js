import React, { useEffect } from 'react';
import { ethers } from 'ethers';

const Voting = () => {
  useEffect(() => {
    displayMetamaskAddress();
  }, []);

  const handleConnect = async () => {
    try {
      if (window.ethereum) {
        // Request MetaMask to connect
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create an ethers.js provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Use the provider for further interactions with Ethereum
        // For example, contract deployment, calling functions, etc.

        // Update UI or perform any necessary actions after successful connection
        console.log('Connected to MetaMask:', provider);

        displayMetamaskAddress();
      } else {
        // MetaMask is not available or not detected
        // Handle error or display a message to install MetaMask
        console.error('MetaMask not available');
      }
    } catch (error) {
      // Handle error during connection or user rejection
      console.error(error);
    }
  };

  function getMetamaskAddress() {
    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
      return window.ethereum.selectedAddress;
    } else {
      return null;
    }
  }

  const displayMetamaskAddress = () => {
    const metamaskAddress = getMetamaskAddress();
    const addressDisplay = document.getElementById("address-display");

    if (addressDisplay) {
      if (metamaskAddress) {
        addressDisplay.innerHTML = "Metamask address: " + metamaskAddress;
      } else {
        addressDisplay.innerHTML = "Metamask is not available or not connected.";
      }
    }
  };

  return (
    <div>
      <h1 className='D'>Voting dApp</h1>
      <button onClick={handleConnect} className='Metamask-button'>Connect with MetaMask</button>
      <p id='address-display'></p>
    </div>
  );
};

export default Voting;
 