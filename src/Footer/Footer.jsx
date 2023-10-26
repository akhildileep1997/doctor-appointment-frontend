import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div>
         <MDBFooter bgColor='info' className='text-center text-lg-start text-muted'>
     

      <div  className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)',color:'white' }}>
        © 2023 Copyright:
        <a style={{color:'white'}} className='  fw-bold' href='/'>
          FindYourDcotor.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer