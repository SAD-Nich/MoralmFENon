import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import PackageBox from './components/PackageBox';

function App() {
  const [packages, setPackages] = useState([
    {
      id: '000001298420938',
      sender: 'Centra1',
      senderAddress: '123 Sender St, City',
      recipient: 'XYZ',
      recipientAddress: '456 Recipient Ave, Town',
      status: 'Pending',
      orderTime: '12/02/2020',
      weight: '5kg',
      expedition: 'Indonesian Military'
    },
    {
      id: '000001298420939',
      sender: 'Centra2',
      senderAddress: '234 Sender St, City',
      recipient: 'ABC',
      recipientAddress: '567 Recipient Ave, Town',
      status: 'Arrived in Harbor',
      orderTime: '13/02/2020',
      weight: '10kg',
      expedition: 'Indonesian Navy'
    },
    {
      id: '000001298420940',
      sender: 'Centra3',
      senderAddress: '345 Sender St, City',
      recipient: 'DEF',
      recipientAddress: '678 Recipient Ave, Town',
      status: 'Received by XYZ',
      orderTime: '14/02/2020',
      weight: '15kg',
      expedition: 'Indonesian Air Force'
    },
    {
      id: '000001298420941',
      sender: 'Centra4',
      senderAddress: '456 Sender St, City',
      recipient: 'GHI',
      recipientAddress: '789 Recipient Ave, Town',
      status: 'Cancelled',
      orderTime: '15/02/2020',
      weight: '20kg',
      expedition: 'Indonesian Army'
    },
    // Add more packages here as needed
  ]);

  const [filter, setFilter] = useState('all');
  const [showDropdown, setShowDropdown] = useState(null);

  const filteredPackages = packages.filter(pkg => {
    if (filter === 'all') {
      return true;
    } else {
      return pkg.status.toLowerCase() === filter.toLowerCase();
    }
  });

  const updateStatus = (id, newStatus) => {
    const updatedPackages = packages.map(pkg =>
      pkg.id === id ? { ...pkg, status: newStatus } : pkg
    );
    setPackages(updatedPackages);
  };

  const deletePackage = (id) => {
    const updatedPackages = packages.filter(pkg => pkg.id !== id);
    setPackages(updatedPackages);
  };

  return (
    <div className="App">
      <Header />
      <div className='ShipmentTracking'>Shipment Tracking</div>
      <div className='filterbox'>
        <Filter packages={packages} setFilter={setFilter} />
      </div>
      <div className='Box'>
        <PackageBox
          filteredPackages={filteredPackages}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          updateStatus={updateStatus}
          deletePackage={deletePackage}
        />
      </div>
    </div>
  );
}

export default App;
