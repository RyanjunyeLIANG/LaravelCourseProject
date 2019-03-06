import React from 'react';

function DisplayField({ label, children }) {
  return (
    <div className="display-field">
      <div className="display-field__label">{label}</div>
      <div className="display-field__content">{children}</div>
    </div>
  );
}

export default DisplayField;
