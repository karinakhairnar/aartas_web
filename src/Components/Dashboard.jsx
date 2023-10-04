import React, { useState, useEffect } from 'react';
import {Loader} from '../Comman/Loader'

import { Home } from './Home';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> 
      ) : (
        <Home/>    
      )}
    </div>
  );
}

export default Dashboard;
