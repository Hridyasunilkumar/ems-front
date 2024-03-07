import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../services/baseUrl';
function Hometable({displayData,removeuser}) {
  console.log(displayData);
  return (
    <>
     <Table striped bordered hover className='mt-3 shadow'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Profile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          displayData.length>0?
          displayData.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item.fname} {item.lname}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td><Button className={item.status==='Active'?'btn btn-success':'btn btn-danger'}>{item.status}</Button></td>
            <td><img style={{width:'70px',height:'70px',borderRadius:'50%'}} src={`${BASE_URL}/uploads/${item.profile}`} alt="no image" /></td>
            <td>
               <Link to={`/view/${item._id}`}>  < i class="fa-solid fa-eye fs-2"></i></Link>
               <Link to={`/edit/${item._id}`}>< i class="fa-solid fa-pen  fs-2 ms-2 text-primary" ></i></Link>
            <span onClick={()=>removeuser(item._id)}> < i class="fa-solid fa-trash fs-2 ms-2"></i></span>
            </td>
          </tr>

          )):<tr  className='w-100 mt-5 text-danger'>nothing to display</tr>
        
}
       
      </tbody>
    </Table>
    </>
  )
}

export default Hometable