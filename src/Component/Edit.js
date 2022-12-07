import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
function Edit(props) {
    let params=useParams();
    console.log(params.id);
      let [name,setname]=useState(props.user.user[params.id].name)
  let [email,setemail]=useState(props.user.user[params.id].email)
  let [mobile,setmobile]=useState(props.user.user[params.id].mobile)
let navigate=useNavigate();

  const handleSubmit=()=>{
let newdata={name,email,mobile}
let copy=[...props.user.user]
copy.splice(params.id,1,newdata)
 props.user.setuser(copy)
navigate('/dashboard')
  }

  return<div className='mx-auto col-7'>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  value={name} placeholder="Enter name" onChange={(e)=>setname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"value={email} placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" value={mobile} placeholder="Enter mobile-no"  onChange={(e)=>setmobile(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
}

export default Edit