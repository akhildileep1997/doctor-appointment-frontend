import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { base_url } from '../base_url'
import ListGroup from 'react-bootstrap/ListGroup';
import './ViewDoctor.css'
import AvailableDays from '../AvailableDays/AvailableDays'
import DoctorReview from '../DoctorReview/DoctorReview'



function ViewDoctor() {
  const [doctor,setDoctor] = useState([])
  const {id}= useParams()
  console.log(id);
  const fetchData = async () => {
    const {data} = await axios.get(`${base_url}/doctors/${id}`)
    // console.log(data);
    setDoctor(data)
  }
  console.log(doctor);
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    {
      doctor?
      <div className='body'>
      <div className="main">
      <div className="image">
        <img style={{width:'400px',marginTop:'35px'}} src={doctor.image_url} alt="" />
      </div>
      <div  className="details">
      <ListGroup as="ul">
      <ListGroup.Item as="li"  className='fs-2'>Name : {doctor.name}</ListGroup.Item>
      <ListGroup.Item as="li">Hospital : {doctor.hospital} </ListGroup.Item>
      <ListGroup.Item as="li" >Address : {doctor.address}</ListGroup.Item>
      <ListGroup.Item as="li" >Department : {doctor.specialty}</ListGroup.Item>
      <ListGroup.Item as="li" >Email : {doctor.email}</ListGroup.Item>
      <ListGroup.Item as="li">Phone No : {doctor.phone}</ListGroup.Item>
      <ListGroup.Item as="li"><i style={{color:'gold'}} className="fa-solid fa-star me-3"></i>  {doctor.rating}</ListGroup.Item>
      <ListGroup.Item as="li"> <AvailableDays days={doctor.available_days} time={doctor.available_hours}  /> </ListGroup.Item>
      <ListGroup.Item as="li"> <DoctorReview review = {doctor.reviews} /> </ListGroup.Item>
        </ListGroup>
      </div>
      </div>
      </div>:<p>Not found</p>
    }
     
    </>
  )
}

export default ViewDoctor