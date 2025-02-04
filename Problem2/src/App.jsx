import React, { useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [records,setRecords] = useState([]);
  const [loading,setLoading] = useState(false);
  const random = Math.floor(Math.random() * 82) + 1;
  const addRecord = async () =>{
    try{
      setLoading(true);
      const response = await axios({
        method: 'get',
        url: `https://swapi.dev/api/people/${random}/`
        }
      )
      console.log(response.data); 
      setRecords([...records,response.data]);
    }
    catch(error){
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  }
  const deleteRecord = (index) =>{
    setRecords((prevData) =>(prevData.filter((item,i) => (i !== index))));
  }
  return (
    <div className='container'>
    <button disabled={loading} onClick={addRecord}>Add Record</button>
    <div className='table'>
    <div className='item'>Name</div>
      {records.map((item,index)=>(
        <div className='item' key={index}>{item.name}
        <button onClick={()=>deleteRecord(index)}>Delete</button>
        </div>
      ))
      }
    </div>
    </div>
  )
}

export default App
