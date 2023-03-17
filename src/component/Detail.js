import React from 'react'
import "./Home.css"

const Detail = () => {
  return (
    <div className='container mt-5'> 
     <h1>Welcome Harsh pathak</h1>
     
     <div className="card mt-5" style={{width: "600px"}}>
  <div className="card-body">
  <div className='add_btn' style={{marginLeft:"450px"}}>
    <button className='btn btn-primary mx-2'><i class="fa-solid fa-pen"></i></button>
        <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
    </div>
  <div className='row'>
    <div className='left_view col-lg-6 col-md-6 col-12'>
   <img src='/profile.png' style={{width:"50px"}} alt="profile"></img>
   <h3 className='mt-3'>Name: <span>Harsh pathak</span></h3>
   <h3 className='mt-3'>Age: <span>21</span></h3>
   <p><i className="fa fa-envelope" aria-hidden="true"></i> Email: <span>harsh@gmail.com</span></p>
   <p><i className="fa fa-briefcase" aria-hidden="true"></i> Occupation: <span>web developer</span></p>
   </div>

   <div className='right_view col-lg-6 col-md-6 col-12'>
    
   
   <p className='mt-5'><i className="fa fa-mobile" aria-hidden="true"></i> Mobile: <span>+91568999000</span></p>
   <p className='mt-3'><i className="fa-solid fa-location-dot"></i> Location: <span>ahmdabad</span></p>
   <p className='mt-3'>Description: <span>lorem1 hiojk gyiio fugiugi gyu hhuhi gyiuu gigi lorem1 dpvp rokovr orkorv ovro

   </span>
   </p>
   </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Detail
