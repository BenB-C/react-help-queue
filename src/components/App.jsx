import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';
import './styles.css';

function App(){
  return (
    <div>
      <Header/>
      <TicketList/>
      <MyStyledComponent/>
    </div>
  );
}

export default App;
