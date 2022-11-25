import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import TablesData from '../../components/tables';

const Home = () => {
  return (
    <div>
        <Sidebar>
            <TablesData />
        </Sidebar>
    </div>
  )
}

export default Home;