import React from 'react';

function DetailsCard({ children }) {
  return (
    <div className="details-card">
      {children}
    </div>
  );
}

DetailsCard.Header = function DetailsCardHeader({ children }) {
  return (
    <div className="details-card__header">
      {children}
    </div>
  );
};

DetailsCard.ButtonGroup = function DetailsCardButtonGroup({ children }) {
  return (
    <div style={{ flex: 1 }}>
      <div className="details-card__button-group">
        {children}
      </div>
    </div>
  );
};

export default DetailsCard;

