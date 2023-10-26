import React, { useEffect, useState } from 'react'
import { base_url } from '../base_url'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import DoctorCard from '../DoctorCard/DoctorCard'



function AllDoctors() {
 const [doctors,setDoctors]=useState([])
  const fetchData = async() =>{
    const {data}= await axios.get(`${base_url}/doctors`)
    setDoctors(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='p-5'>
      <Row className='ms-5 p-5'>
        {
         doctors.map((item)=>(
          <Col className='my-4' sm={12} md={6} lg={4} xl={3} >
          < DoctorCard doctors={item} />
          </Col>
         ))
        }
      </Row>
    </div>
  )
}

export default AllDoctors