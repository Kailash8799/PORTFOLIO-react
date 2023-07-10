import { Button } from '@mui/material'
import React from 'react'


const Resume = () => {
    return (
        <>
            <div id='resume' className="sm:mx-16 md:mx-10 lg:mx-40 mt-10 sm:mt-0">
                <div className='sm:pt-10 text-center'>
                    <h1 className='font text-white border-b-4 rounded-lg border-yellow-500 inline-block '>Resume</h1>
                </div>
                <div>
                    <div className="bgback my-5 rounded-lg py-3">
                        <div className='lg:flex clasna text-white'>

                            <div className='lg:w-2/5 wclass lg:my-auto justify-center mx-auto'>

                                <div className='divimg p-3 rounded-lg inline-block lg:mx-10 mx-3'>
                                    <img src={`/resumep.svg`} alt="resume" className='imgw block rounded-lg' />
                                    <hr className='border-yellow-500 border-2' />

                                </div>
                            </div>
                            <div className='lg:w-3/5 wclass p-7 px-10'>
                                <div>
                                    <h1 className='text-center font'>You can find my updated resume by clicking on the link below.</h1>
                                </div>
                                    <hr />
                            
                                <div>
                                    <p className='text-2xl font lg:mx-4'>Please feel free to contact for hiring as well as freelance projects through phone / email.</p>
                                    <div className='rounded-xl lg:flex justify-around items-center'>
                                        <div className='lanicon p-3 my-2 rounded-xl'>Frontend Developer</div>
                                        <div className='lanicon p-3 md:mx-1 my-2 rounded-xl'>Frontend Developer</div>
                                        <div className='lanicon p-3 my-2 rounded-xl'>Frontend Developer</div>
                                    </div>
                                </div>
                                <div></div>
                                <hr />
                                <div className='mt-3 justify-center text-center'>
                                    <Button className='hoverbtn text-white font mb-2 fontw mx-3' variant="outlined">RESUME</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='text-white border-2' />
        </>
    )
}

export default Resume
