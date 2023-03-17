import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='mt-5'>
     <div className='container'>
      <div className='add_btn mt-2'  style={{textAlign:'right'}}>
        <button className='btn btn-primary'>
          Add data
        </button>
      </div>


      {/* table */}
      <table className="table mt-3" >
  <thead>
    <tr className='table-dark'>
      <th scope="col">id</th>
      <th scope="col">username</th>
      <th scope="col">email</th>
      <th scope="col">job</th>
      <th scope="col">Number</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>meet@gmail.com</td>
      <td>webdeveloper</td>
      <td>9156778899</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
        <button className='btn btn-primary'><i class="fa-solid fa-pen"></i></button>
        <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>meet@gmail.com</td>
      <td>webdeveloper</td>
      <td>9156778899</td>
      <td className='d-flex justify-content-between'>
        <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
        <button className='btn btn-primary'><i class="fa-solid fa-pen"></i></button>
        <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
   
    
  </tbody>
</table>
     </div>
    </div>
  )
}

export default Home
