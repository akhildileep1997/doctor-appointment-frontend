import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DoctorCard.css'
import {Link} from 'react-router-dom'
function DoctorCard({doctors}) {
    console.log(doctors);
  return (
    <div>
      <Card className='card' style={{ width: '18rem' ,height:'490px'}}>
      <Card.Img variant="top" src={doctors.image_url} className='image text-center' />
      <Card.Body>
        <Card.Title style={{fontWeight:'800'}}>{doctors.name}</Card.Title>
        <Card.Text>
        <p>Hospital : {doctors.hospital}</p>
        <p>Address : {doctors.address}</p>
        <p>Department : {doctors.specialty}</p>
        </Card.Text>
       <Link to={`/view-doctor/${doctors.id}`}><Button variant="primary">Book Appointment</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default DoctorCard