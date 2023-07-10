import React,{useState} from "react";
import Button from '@mui/material/Button';
import Img from './images/img-1.jpg';

const Navbar = () => {
    const [Toggle, setToggle] = useState('hidden')
    const Toggle2  = () => {
        if(Toggle === 'flex'){
            setToggle('hidden');
        }else{
            setToggle('flex');
        }
    }
    return (
        <>
            <div className="flex bg-orange-300 justify-end">
                <ul className={`pl-2 absolute  top-1 left-2 ${Toggle === 'flex' ? 'hidden' : ''}`}>
                    <li><Button>Kailash</Button></li>
                </ul>
                <ul id="nav" className={`md:mr-10 md:flex transition-all duration-500 md:flex-row flex-col ${Toggle} ${Toggle==='flex'?'mx-auto':''}`}>
                    
                    <li><Button variant="text" color="secondary">Home</Button></li>
                    <li><Button variant="text" color="secondary">About</Button></li>
                    <li><Button variant="text" color="secondary">Eduction</Button></li>
                    <li><Button variant="text" color="secondary">Project</Button></li>
                    <li><Button variant="text" color="secondary">Contact</Button></li>
                </ul>
                <ul className="md:hidden">
                    <Button className="btn-1">
                    <img src={Img} alt="" onClick={Toggle2} className="img-1 w-7 h-7 rounded-full "/>
                    </Button>
                </ul>
            </div>
        </>
    )
}
export default Navbar;