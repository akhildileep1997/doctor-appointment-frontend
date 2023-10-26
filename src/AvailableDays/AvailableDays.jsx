import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AvailableDays({days,time}) {
    console.log(days,time);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
          <h5 variant="primary" onClick={handleShow}>
       Available Days <i style={{color:'green'}} className="fa-solid fa-hand-point-left ms-3"></i>
      </h5>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Available Days</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {
            days?.map((item)=>(
                <div>
                    <h4 style={{color:'green'}}>{item}</h4>
                    <h5 style={{color:'orange'}}>{time}</h5>
                </div>
            ))
         }
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AvailableDays