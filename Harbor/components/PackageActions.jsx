// dropdown menu and action buttons

import React from 'react';

const PackageActions = ({ pkg, showDropdown, setShowDropdown, updateStatus, deletePackage }) => {
  return (
    <div className="PackageActions">
      <div className="ellipsis" onClick={() => setShowDropdown(showDropdown === pkg.id ? null : pkg.id)}>⋮</div>
      {showDropdown === pkg.id && (
        <div className="dropdown-menu">
          {pkg.status !== 'Cancelled' && <button onClick={() => updateStatus(pkg.id, 'Cancelled')}>Cancel</button>}
          <button onClick={() => deletePackage(pkg.id)}>Delete Package</button>
        </div>
      )}
    </div>
  );
};

export default PackageActions;
