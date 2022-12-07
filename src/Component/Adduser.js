import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Adduser(props) {
  let [name,setname]=useState("")
  let [email,setemail]=useState("")
  let [mobile,setmobile]=useState("")
let navigate=useNavigate();

  const handleSubmit=()=>{
let newdata={name,email,mobile}
let copy=[...props.user.user]
copy.push(newdata)
 props.user.setuser(copy)
navigate('/dashboard')
  }
  return<div className='mx-auto col-7'>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile-no"  onChange={(e)=>setmobile(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
}
export default Adduser