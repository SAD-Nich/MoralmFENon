import React from 'react';

const StatusButton = ({ pkg, updateStatus }) => {
  if (pkg.status === 'Pending') {
    return <button className="statsbutton" onClick={() => updateStatus(pkg.id, 'Arrived in Harbor')}>Arrived in Harbor</button>;
  } else if (pkg.status === 'Arrived in Harbor') {
    return <p className="waiting-pickup">Waiting for pickup - {pkg.orderTime}</p>;
  } else if (pkg.status === 'Received by XYZ') {
    return <p className="received-date">Package received - {pkg.orderTime}</p>;
  }
  return null;
};

export default StatusButton;
