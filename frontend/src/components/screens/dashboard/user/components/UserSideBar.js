import React, { useState, useEffect } from 'react';
import RoyaltiesScreen from './RoyaltiesScreen.js';
import SalesScreen from './SalesScreen.js';
import AnalyticsScreen from './AnalyticsScreen.js';
import LogMineralExtraction from './LogMineralExtraction.js';
import '../styles/Sidebar.css'; // Custom styling
import ExportProcessMonitoringScreen from './ExportProcessMonitoringScreen.js';
import UserHomeScreen from './UserHomeScreen.js';
import UserHeaderSection from './UserHeaderSection.js';
import UserMainLayout from './UserMainLayout.js';


export const UserSideBar = () => {
  const [content, setContent] = useState('HomeScreen');
  const [activeQuickLink, setActiveQuickLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuClick = (screen) => {
    if (screen === 'Logout') {
      const isConfirmed = window.confirm('Are you sure you want to log out?');
      if (isConfirmed) {
        // Clear user session data
        localStorage.removeItem('user'); // or wherever your user session data is stored
        console.log("User logged out.");
        
        // Redirect the user to the login page
        window.location.href = '/'; 
      }
    } else {
      setContent(screen);
      setActiveQuickLink(null); // Reset quick link selection when main menu changes
    }
  };

  const renderContent = () => {
    switch (content) {
      case 'UserHomeScreen':
        return <UserHomeScreen/>;
      case 'LogMineralExtraction':
        return <LogMineralExtraction />;
      case 'SalesScreen':
        return <SalesScreen/>;
      case 'ExportProcessMonitoringScreen':
        return <ExportProcessMonitoringScreen />;
      case 'RoyaltiesScreen':
        return <RoyaltiesScreen/>;
      case 'AnalyticsScreen':
        return <AnalyticsScreen />;
      default:
        return <UserHomeScreen />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const quickLinks = [
    { id: 1, title: 'Minerals overview', content: 'Get insight into the minerals distribution across the country.' },
    { id: 2, title: 'Productionv insights', content: 'Check the current status of all mining systems and operations.' },
    { id: 3, title: 'Users', content: 'Monitor user activities and manage permissions efficiently.' },
    { id: 4, title: 'Exports', content: 'Review all maintenance activities and logs for troubleshooting.' },
    { id: 5, title: 'Sales', content: 'View the latest sales transactions and get insight into market trends.View the latest sales transactions and get insight into market trendsView the latest sales transactions and get insight into market trends' }
  ];

  return (
    <div className="sidebar-container">
      {/* Top Bar */}
      <UserHeaderSection/>
      <UserMainLayout
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
export default UserSideBar;
