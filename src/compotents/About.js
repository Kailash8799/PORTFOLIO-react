import React from 'react'
import Im from '../compotents/images/img-1.jpg'


const About = () => {
    return (
        <>
            <div id='about' className="py-4 mt-10 sm:mx-16 bgback md:mx-10 lg:mx-28 rounded-xl sm:mt-0">
                <div className='text-center lg:pt-10'>
                    <h1 className='inline-block text-white border-b-4 border-yellow-500 rounded-lg font '>About Me</h1>
                </div>
                <div className='items-center pt-10 lg:mt-5 lg:flex'>
                    <div className='items-center pb-4 mx-5 lg:w-1/3 lg:m-0'>
                        <img src={Im} alt="" className='mx-auto rounded-full h96'/>
                    </div>
                    <div className='px-6 lg:w-2/3 lg:pl-28 lg:pr-4'>
                        <h1 className='namec'>A tech enthusiast with a passion for learning and building things.</h1>
                        <hr className='namec'/>
                        <p className='text-xl text-white font'>hey ,My name is Kailash and i'm web developer and competitive programmer. I know many language like php, c++,c , html, css, javascript etc. I join every contest in codechef , hackerrank, codeforces etc. I had created e-commerce website using php, mysql and javascript as project.I Pass out my 12th with 92% and I get 111.5 marks in GUJCET .now i am studying at Dharmsinh Desai University in Computer engineering.</p>
                    </div>
                </div>
                
            </div>
            <hr className='text-white border-2' />
        </>
    )
}

export default About
