// display of the package details

import React from 'react';

const PackageDetails = ({ pkg }) => {
  return (
    <>
      <div className='column'>
        <p><strong>Package ID -</strong> {pkg.id}</p>
        <hr className='separator-line'></hr>
        <p>&nbsp;</p>
        <p><strong className="underlined">Sender</strong></p>
        <p> {pkg.sender}</p>
        <p><strong className="small">{pkg.senderAddress}</strong></p>
        <p>&nbsp;</p>
        <p><strong className="underlined">Recipient</strong></p>
        <p>{pkg.recipient}</p>
        <p><strong className="small">{pkg.recipientAddress}</strong></p>
        <p>&nbsp;</p>
        <p><strong>Status - </strong> <span className={pkg.status.toLowerCase()}>{pkg.status}</span></p>
      </div>
      <div className='column'>
        <p><strong>Order Time -</strong> {pkg.orderTime}</p>
        <hr className='separator-line'></hr>
        <p>&nbsp;</p>
        <p><strong className="underlined">Weight</strong></p>
        <p> {pkg.weight}</p>
        <p>&nbsp;</p>
        <p><strong className="underlined">Expedition</strong></p>
        <p>{pkg.expedition}</p>
      </div>
    </>
  );
};

export default PackageDetails;
