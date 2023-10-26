import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='info' style={{height:'100px'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand style={{color:'white'}} href='/'>
            <img style={{marginLeft:'30px'}}
              src='https://th.bing.com/th/id/R.5a77387701d155faba0c99904ace2e95?rik=3cik7%2bp0VAz2hg&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1023703.png&ehk=8RrZ%2fW8G5du5jDLTjK1HQX4E135pTIRlTTyNLx4Bp7Y%3d&risl=&pid=ImgRaw&r=0'
              height='80'
              width='100'
              alt=''
              loading='lazy'
            />
            <h2 style={{color:'white',fontWeight:'800'}}>Find Your Doctor</h2>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header