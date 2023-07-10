import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Im from '../compotents/images/img-2.jpg'
import { Button } from '@material-ui/core';

const Home = () => {
  return (
    <>
      <div id='home' className="sm:flex pb-3 bgbackhome rounded-lg sm:mx-16 md:mx-10 lg:mx-28 divh items-center mt-10 sm:mt-0">
        <div className='sm:w-1/2  justify-center'>
          <img src={Im} alt="Myimage" width={300} className='rounded-xl mx-auto justify-center' />
        </div>
        <div className='sm:w-1/2 sm:mx-0 mx-5 mt-5 sm:mt-0'>
          <h1 className='text-4xl md:text-5xl font text-white'>Hy! I Am</h1>
          <h1 className='namec font text-3xl sm:text-5xl my-2'>Kailash Rajput</h1>
          <h2 className='text-yellow-100 font text-2xl mt-2'>Fronted Developer with high lavel of experience in web designing and development producting the Quality work</h2>
          <div className='mt-3'>
            <a href="#about" className='text-decoration-none'>
            <Button className='text-white font bgo' variant="outlined">About me</Button>
            </a>
            <a href="#contact" className='text-decoration-none'>
            <Button className='text-white font bgo mx-1' variant="outlined">Contact</Button>
            </a>
          </div>
          <div className="mt-10">
            <a target={"_blank"} rel="noreferrer" href="https://github.com/Kailash8799"><i className="fa-brands fa-github namec text-5xl"></i></a>
            <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/kailash-rajput-9b559422b"><i className="fa-brands fa-linkedin-in namec text-5xl mx-3"></i></a>
            <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/thekailash8799"><i className="fa-brands fa-instagram namec text-5xl"></i></a>
          </div>
        </div>
      </div>
      <hr className='text-white border-2'/>
    </>
  )
}

export default Home