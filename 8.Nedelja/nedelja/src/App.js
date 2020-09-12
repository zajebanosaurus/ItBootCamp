import React, { useEffect, useState } from 'react';

import CompanyName from './components/CompanyName';
import InputSelect from './components/InputSelect';
import LaunchList from './components/LaunchList';
import { getCompanyName, getAllLaunches } from './services'


function App() {
  const [name, setName] = useState('')
  const [allLaunches, setAllLaunches] = useState([])
  const [year, setYear] = useState('')
  
  useEffect ( () => {
    getCompanyName().then(res =>{
      setName(res.data.name)
    })
    getAllLaunches().then(res => {
      setAllLaunches(res.data)
    })
  },[])
  
  return (
    <div>
      <CompanyName name={name}/>
      <InputSelect allLaunches={allLaunches} setYear={setYear}/>
      <LaunchList allLaunches={allLaunches} year={year}/>
      
      
    </div>
  )
}

export default App;
