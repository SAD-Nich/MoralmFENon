import React from 'react';
import PackageDetails from './PackageDetails';
import PackageActions from './PackageActions';
import StatusButton from './StatusButton';

const PackageList = ({ pkg, showDropdown, setShowDropdown, updateStatus, deletePackage }) => {
  return (
    <div className='PackageList' key={pkg.id}>
      <PackageActions
        pkg={pkg}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        updateStatus={updateStatus}
        deletePackage={deletePackage}
      />
      <PackageDetails pkg={pkg} />
      <StatusButton pkg={pkg} updateStatus={updateStatus} />
    </div>
  );
};

export default PackageList;
