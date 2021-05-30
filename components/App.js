import React,{useState} from 'react';
import './app.css';
import Sign from './SignUp/Sign';
import Navigation from './nav/Navigation';
import Contacts from './contacts/contacts'
import About from './about/About';
import Roll from './roll/Roll';
import BasicStyles from './styleApiTest/BasicStyles';
// import {Grid} from '@material-ui/core'
export default function App() {
  let [page,setPage]=useState(<Sign  />)
  function changePage(index_of_menu){
      if(index_of_menu===0){
        setPage(<Sign  />)
      }else if(index_of_menu===1){
        setPage(<Contacts/>)
      }else if(index_of_menu===2){
        setPage(<About/>)
      }else if(index_of_menu===3){
        setPage(<Roll/>)
      }
  }
  function changePage2(index_of_menu){
    if(index_of_menu===0){
      setPage(<BasicStyles/>)
    }

  }
  return (
    <div className='container'>
      <Navigation changePage={changePage} changePage2={changePage2} />
      {page}
    </div>
  );
}
