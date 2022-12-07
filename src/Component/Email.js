import React , { useState }from 'react'
import {
    MDBContainer,
    MDBTabs,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn
  }
  from 'mdb-react-ui-kit';
  import * as yup from "yup";
  import {useFormik} from "formik";
  import { TextField } from '@mui/material';
  import {useNavigate } from "react-router-dom";

function Email() {
    const formValidationschema=yup.object({
        email:yup.string().min(10,"err").required("this is")});

  const navigate=useNavigate();

    const {handleChange,values,handleSubmit}=useFormik({
        initialValues:{
          email:""
        },
        validationSchema:formValidationschema,
        onSubmit:(values)=>{
          verify(values);
        },
      });
      const [justifyActive, setJustifyActive] = useState('tab1');;
      const verify=async(values)=>{
        try{
       await fetch(`${process.env.REACT_APP_BASE_URL}/password-reset`,{
            method:'POST',
             body:JSON.stringify(values),
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
           })
           .then((res)=>{    
                    if(res.status===200){
                    window.alert("check yur email");
                        navigate("/api/password-reset/:id/:token");
                    }
                  else{
          console.log(res.status)
          window.alert("email  incorrect");
         }
         })
      }
          catch(err){
            console.log("error",err)
          }
      
      };



  return <>
  <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
  <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
 
  <form onSubmit={handleSubmit}>
  <MDBTabsContent>
  <MDBTabsPane  className='col-sm-6'show={justifyActive === 'tab1'}>
  <TextField className="t1"
       name='email'
   label='email' 
    onChange={handleChange} 
    value={values.email} 
    type="email"
     placeholder='email'
   />
  &nbsp;
  <MDBBtn type='submit' className="mb-4 w-100">Sign in</MDBBtn>
 </MDBTabsPane>
 </MDBTabsContent>
  </form>
  </MDBTabs>
   </MDBContainer>
   </>
}

export default Email

