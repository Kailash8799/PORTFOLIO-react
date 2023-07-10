import React from 'react'


const About = () => {
    const lang = {
        "C++" : ["c++.png","cpplan","hcpplan"], 
        "React JS":["react.png","rlan","hrlan"],
        "JavaScript":["javascript.png","jslan","hjslan"],
        "Next JS":["next.png","nlan","hnlan"],
        "HTML":["html.png","hlan","hhlan"],
        "CSS":["css.png","csslan","hcsslan"],
        "PHP":["php.png","phplan","hphplan"],
        "C":["c.png","clan","hclan"]
    }
    return (
        <>
            <div id='skills' className="sm:mx-16 md:mx-10 lg:mx-30 mb-20 mt-10 sm:mt-0">
                <div className='sm:pt-10 text-center'>
                    <h1 className='font text-white border-b-4 rounded-lg border-yellow-500 inline-block '>Skills</h1>
                </div>
                <div className='mt-3 flex mx-3 flex-wrap justify-around'>

                  {Object.keys(lang).map((itm)=>{return  <div key={itm} className={`border rounded-xl my-3 mx-2 cursor-pointer items-center ${lang[itm][2]}`} style={{ width: "300px", height:"160px" }}>
                        <div className='mt-2 h-2/3 items-center'>
                            <div className='mt-3'>
                            <img src={lang[itm][0]} alt="" className={`mx-auto ${lang[itm][1]}`} />
                            </div>
                        </div>
                        <div className='text-center h-1/3'>
                            <h1 className='text-white text-3xl font'>{itm}</h1>
                        </div>
                    </div>
                    })}
                  
                </div>
            </div>
            <hr className='text-white border-2' />
        </>
    )
}

export default About
