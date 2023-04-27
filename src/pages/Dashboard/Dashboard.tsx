import React from 'react'
import './Dashboard.css';
import Nav from '../Components/Navbar/Nav'
import Nav2 from '../Components/Download/Download';
import Table from '../Components/Table/Table';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Nav />
      <Nav2 />
      <Table />
    </div>
  )
}

export default Dashboard