import React from 'react';
import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0,0.4)',
  textColor: '#ff6a95',
};

//this set the type of your props and they the passed in element is not the set type, error will come up
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;

//States
//Component level is just data that is assoicated with that one specific component
//Global or app level state would be like our feedback items because we need to use those in mulitple components
