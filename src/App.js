import './App.css';
import {Fragment, React, useState} from 'react'
import Navbar from './components/Navbar';
import Container from './components/Container';
import Form from './components/Form';


function App() {
  let[formState,setformState]=useState(false)
  let[formStateedit,setformStateedit]=useState(false)
  let[ecard,setecard]=useState()
  let[eindex,seteindex]=useState()
  const getformState=(data)=>{
    setformState(!data)
  }
  const getformStateedit=(data)=>{
    setformStateedit(!data)
  }
  const getCard=(item,index)=>{
    setecard(item)
    seteindex(index)
  }
  return (
    <Fragment>
      <Navbar/>
      <Container getCard={getCard} formState={formState}  getformState={ getformState} getformStateedit={getformStateedit}/>
      <Form  getformStateedit={getformStateedit} ecard={ecard} eindex={eindex} formStateedit={formStateedit} formState={formState} getformState={ getformState}/>
    </Fragment>
  );
}

export default App;
