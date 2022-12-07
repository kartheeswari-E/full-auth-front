import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {

    let navigate=useNavigate();
 const handledelete=(i)=>{
  let copy=[...props.data.user]
  copy.splice(i,1)
   props.data.setuser(copy)
    }
  return<>
  
  
    <div id="content-wrapper" className="d-flex flex-column ">
<div id="content">
    <div className="container-fluid ">

       
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>

        
        <div className="row">

           
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    usercount</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.data.usercount}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

     
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    admincount</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.data.admincount}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">level
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.data.data.level}%</div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info" role="progressbar"
                                               style={{"width":`${props.data.data.level}%` ,"aria-valuenow":props.data.data.level,"aria-valuemin":"0",
                                                "aria-valuemax":"100"}} ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
 <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th> Name</th>
          <th>email</th>
          <th>phno</th>
          <th>modify</th>
        </tr>
      </thead> 
     
      <tbody>
        {
            props.data.user.map((user,i)=>{
                return<tr key={i}>
                <td>{i+1 }</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
            
                    <td><Button variant='warning' onClick={()=>navigate(`/edit/${i}`)}>Edit</Button> &nbsp;
                    <Button variant='danger' onClick={()=>handledelete()}>Delete</Button></td>
              
            </tr>
           
                })
        }
      </tbody>
    </Table>

 </div>
        </div>

        </>

}

export default Dashboard
