import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css';
import MineralSalesAuditScreen from './MineralSalesAuditScreen';
import ProductionDataVerificationScreen from './ProductionDataVerificationScreen';
import RoyaltiesPaymentVerificationScreen from './RoyaltiesPaymentVerificationScreen';
import VerifierHomeScreen from './VerifierHomeScreen';
import Chat from './ChatScreen';
import SettingsScreen from './SettingsScreen';
import VerifierMainLayout from '../components/VerifierMainLayout';
import '../../admin/styles/Header.css';
import VerifierHeaderSection from '../components/VerifierHeaderSection';

export const VerifierSideBar = () => {
  const [content, setContent] = useState('HomeScreen');
  const [activeQuickLink, setActiveQuickLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuClick = (screen) => {
    if (screen === 'Logout') {
      const isConfirmed = window.confirm('Are you sure you want to log out?');
      if (isConfirmed) {
        localStorage.removeItem('user');
        console.log("User logged out.");
        window.location.href = '/'; // Redirect to login page
      }
    } else {
      setContent(screen);
      setActiveQuickLink(null); // Reset quick link selection
    }
  };

  const renderContent = () => {
    switch (content) {
      case 'VerifierHomeScreen':
        return <VerifierHomeScreen />;
      case 'RoyaltiesPaymentVerificationScreen':
        return <RoyaltiesPaymentVerificationScreen />;
      case 'MineralSalesAuditScreen':
        return <MineralSalesAuditScreen />;
      case 'ProductionDataVerificationScreen':
        return <ProductionDataVerificationScreen />;
      default:
        return <VerifierHomeScreen />;
    }
  };

  // Define the handleScroll function
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  const quickLinks = [
    { id: 1, title: 'Minerals overview', content: 'Get insight into the minerals distribution across the country.' },
    { id: 2, title: 'Production insights', content: 'Check the current status of all mining systems and operations.' },
    { id: 3, title: 'Users', content: 'Monitor user activities and manage permissions efficiently.' },
    { id: 4, title: 'Exports', content: 'Review all maintenance activities and logs for troubleshooting.' },
    { id: 5, title: 'Sales', content: 'View the latest sales transactions and get insight into market trends.' }
  ];

  return (
    <div className={`sidebar-container ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <VerifierHeaderSection />
      <VerifierMainLayout
      handleMenuClick={handleMenuClick}
      renderContent={renderContent}
      quickLinks={quickLinks.map((link) => ({
        ...link,
        className: 'quick-link-item',
      }))}
    />
  </div>
);
};
export default VerifierSideBar;
