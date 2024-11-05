import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd";
const Insert=()=>{
  const [input, setInput] =useState({});
  const [selectedFile, setSelectedFile]= useState(null);
    
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}))
    console.log(input)
  }


  const handleFileChange=(e)=>{
    setSelectedFile(e.target.files[0]);
    
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'vcpivpuc');
    formData.append('cloud_name', 'dwv0pi7dl');
    const response = await axios.post('https://api.cloudinary.com/v1_1/dwv0pi7dl/image/upload', formData);
    console.log(response);
    console.log(response.data.url)
   
    let api="http://localhost:8000/students/datasave";

    axios.post(api, {...input, image:response.data.url}).then((res)=>{
        message.success("Record Succesfully Uploaded!!!");
    })
    
  }

    return(
        <>
          <h1 align="center"> Insert Students Data</h1>

          <Form style={{width:"400px", margin:"auto", padding:"10px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Rollno</Form.Label>
        <Form.Control type="text" name="rollno" value={input.rollno} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  name="name" value={input.name} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  name="city" value={input.city} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact</Form.Label>
        <Form.Control type="text"  name="contact" value={input.contact} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file"   onChange={handleFileChange} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;