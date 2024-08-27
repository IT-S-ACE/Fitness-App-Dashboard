
import React from 'react';
import Header from '../../components/Header/Header';
import CoachCard from '../../components/Cards/CoachCard';

function Employees() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl shadow-2xl'>
      <Header category="Page" title='Coachs' />
      <CoachCard />
    </div>
  );
}

export default Employees;
