import React from 'react'
import { useState } from 'react';
import './DoctorReview.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
function DoctorReview({review,name, ...props }) {
    console.log(review);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <h5 variant="primary" onClick={handleShow} className="me-2">
        {name} Review  <i style={{color:'green'}} className="fa-solid fa-hand-point-left ms-3"></i>
      </h5>
      <Offcanvas style={{height:'700px',width:'500px'}} placement='end' show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>REVIEW</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            review?.map((item)=>(
            <div key={item} className='main'>
             <div  className="review">
             <h3 key={item.patient_name}>Name: {item.patient_name}</h3>
             <h6 key={item.date}>Date : {item.date} </h6>
             <h5 key={item.rating}><i style={{color:'gold'}} className="fa-solid fa-star me-3"></i> : {item.rating} </h5>
             <p key={item.comments}> {item.comments} </p>
             </div>
            </div>

            ))
          }
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default DoctorReview