
import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';

const Display=()=>{
  const [mydata, setMydata]=useState([]);

  const loadData=()=>{
    let api="http://localhost:8000/students/datadisplay";

    axios.get(api).then((res)=>{
      console.log(res);
      setMydata(res.data);

    })
  }

  useEffect(()=>{
    loadData();
  }, []);
    
  
  const ans=mydata.map((key)=>{
      return(
         <>
           <tr>
             <td> {key.rollno} </td>
             <td> {key.name} </td>
             <td> {key.city} </td>
             <td> {key.contact} </td>
             <td>  <img src={key.stuimage} style={{width:"100px", height:"100px"}} /></td>
           </tr>
        </>
      )
  })
  
  return(
        <>
          <h1> Display Students Record</h1>
          <Table striped bordered hover align="center" width="80%">
      <thead>
        <tr>
          <th>#Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Contact No.</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
        </Table>
        </>
    )
}

export default Display;