import React from 'react';
import PackageList from './PackageList';

const PackageBox = ({ filteredPackages, showDropdown, setShowDropdown, updateStatus, deletePackage }) => {
  return (
    <div className='PackageBox'>
      {filteredPackages.map(pkg => (
        <PackageList
          key={pkg.id}
          pkg={pkg}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          updateStatus={updateStatus}
          deletePackage={deletePackage}
        />
      ))}
    </div>
  );
};

export default PackageBox;
