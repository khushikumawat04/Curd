import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {

    const [inp,setInp] = useState({
        name:"",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
      })
      const setdata = (e)=>{
        console.log(e.target.value);
        
        const {name,value} = e.target;
        setInp((preval)=>{
          return {
            ...preval,
            [name]:value
          }
        })
    
    
      }
  return (

    <div className='container mt-5'>
    <form>
        <div className='row'>
<div className="form-group mb-3  col-lg-6 col-md-6 col-12">
<label for="exampleInputEmail1">Name</label>
<input name="name" type="text" className="form-control mt-3 mt-3" value={inp.name} onchange={setdata} onChange={setdata} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

</div>
<div className="form-group mb-3 col-lg-6 col-md-6 col-12">
<label for="exampleInputPassword1">Email</label>
<input name="email" type="email" className="form-control mt-3" value={inp.email} onchange={setdata} id="exampleInputPassword1" placeholder="Password"/>
</div>
<div className="form-group mb-3 col-lg-6 col-md-6 col-12">
<label for="exampleInputPassword1">Age</label>
<input name="age" type="number" className="form-control mt-3" value={inp.age} onchange={setdata} id="exampleInputPassword1" placeholder="Password"/>
</div>
<div className="form-group mb-3 col-lg-6 col-md-6 col-12">
<label for="exampleInputPassword1">Mobile</label>
<input name= "mobile"type="number" className="form-control mt-3" value={inp.mobile} onchange={setdata} id="exampleInputPassword1" placeholder="Password"/>
</div>
<div className="form-group mb-3 col-lg-6 col-md-6 col-12">
<label for="exampleInputPassword1">Work</label>
<input  name="work" type="text" className="form-control mt-3" value={inp.work} onchange={setdata} id="exampleInputPassword1" placeholder="Password"/>
</div>
<div className="form-group mb-3 col-lg-6 col-md-6 col-12">
<label for="exampleInputPassword1">Adress</label>
<input name="add" type="text" className="form-control mt-3" value={inp.add} onchange={setdata} id="exampleInputPassword1" placeholder="Password"/>
</div>
<div className="form-group mb-3 col-lg-12 col-md-12 col-12">
<label for="exampleInputPassword1">Discription</label>
<textarea name="disc" className='form-control mt-5" cols ="30' rows="5" value={inp.disc
} onchange={setdata}></textarea>
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</div>
</form>
  
</div>
   
  )
}

export default Edit
