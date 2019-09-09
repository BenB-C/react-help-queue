import React from 'react';
import PropTypes from 'prop-types';
import './Ticket.css';
import reallyAdorablePuppy from '../assets/images/puppy.jpg';

function Ticket(props){
  return (
    <div className='Ticket'>
      <img className='puppyImg' src={reallyAdorablePuppy}/>
      <div className='ticketInfo'>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
      </div>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
