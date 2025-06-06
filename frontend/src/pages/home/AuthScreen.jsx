import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {ChevronRight, Plus} from 'lucide-react';
import question from '../../store/question.json';
import "./home.css"

export const AuthScreen = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleForm = (e)=>{
        e.preventDefault()
        navigate("/signup?email="+email)
    }
    
    const handleFqa = (event)=>{
        var svg = event.target.parentNode
        if(svg.tagName == "svg"){
            var answer = svg.parentNode.parentNode.lastChild
            answer.classList.toggle("active")
            console.log(answer);  
        } 
        else if(svg.tagName == "DIV"){
            var answer = svg.parentNode.lastChild
            answer.classList.toggle("active")
            console.log(answer);
        }
        
    }
    
    return (
    <div className="hero-bg relative">
            {/* Navbar */}
        <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
            <img src="/netflix-logo.png" alt="logo" className='w-32 md:w-48'/>
            <Link to={"/login"} className="text-white bg-red-600 py-1 px-2 rounded">
                Sign In
            </Link>
        </header>
            {/* hero section */}
        <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
            <h1 className='text-4xl md:text-6xl font-bold mb-6 max-w-180'>Unlimited movies, TV shows, and more</h1>
            <p className="text-lg mb-4">Starts at Rs.149. Cancel anytime.</p>
            <p className="mb-4">Ready to watch? Enter your email to create or restart your membership.</p>

            <form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleForm}>
                    <input type="email" 
                    className='p-2 border border-gray-700 rounded bg-black/80 flex-1' 
                    placeholder='you@example.com' 
                    id='email' 
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                    <button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center cursor-pointer'>
                    Get Started
                    <ChevronRight className='size-8 md:size-10'/>
                    </button>
            </form>
        </div>
        {/* Separator */}
        <div className='h-2 w-full bg-[#232323]'></div>

        {/* 1st section */}
        <div className='py-10 bg-black text-white'>
            <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
                <div className="flex-1 text-center md:text-left">
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h2>
                    <p className="text-lg md:text-xl">
                        Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </p>           
                </div>
                <div className="flex-1 relative">
                    <img src="/tv.png" alt="TV image" className='mt-4 z-20 relative'/>
                    <video 
                        className='absolute top-1/2 left-1/2     -translate-x-1/2 -translate-y-1/2 h-1/2 z-10'
                        type='video/mp4'
                        playinline="true"
                        autoPlay={true}
                        muted
                        loop
                    >
                        <source src='/hero-vid.m4v' 
                        
                        />
                    </video>
                </div>
            </div>
        </div>

        {/* Separator */}
        <div className='h-2 w-full bg-[#232323]'></div>
        {/* 2nd section */}
        <div className='py-10 bg-black text-white'>
            <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
                <div className="flex-1 relative">
                    <img src="/stranger-things-lg.png" alt="TV image" className='mt-4 z-20 relative'/>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h2>
                    <p className="text-lg md:text-xl">
                        Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </p>           
                </div>
            </div>
        </div>

        {/* Separator */}
        <div className='h-2 w-full bg-[#232323]'></div>
        {/* 3rd section */}
        <div className='py-10 bg-black text-white'>
            <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
                <div className="flex-1 text-center md:text-left">
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Watch Anywhere</h2>
                    <p className="text-lg md:text-xl">
                        Stream unlimites movies and TV showson your 
Phone, Laptop, Teblet, and TV..
                    </p>           
                </div>
                <div className="flex-1 relative">
                    <img src="/device-pile.png" alt="TV image" className='mt-4 z-20 relative'/>
                    {/* <img src='extraction.jpg'
                        className='absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10 w-[65%]'
                       />  */}
                    <video 
                        className='absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[46%] z-10'
                        type='video/mp4'
                        playinline="true"
                        autoPlay={true}
                        muted
                        loop
                    >
                        <source src='/video-devices.m4v' 
                        
                        />
                    </video>
                </div>
            </div>
        </div>

        {/* Separator */}
        <div className='h-2 w-full bg-[#232323]'></div>

        {/* 4nd section */}
        <div className='py-10 bg-black text-white'>
            <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
                <div className="flex-1 relative">
                    <img src="/kids.png" alt="TV image" className='mt-4 z-20 relative'/>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-4 w-full md:w-110'>Create profiles for kids</h2>
                    <p className="text-lg md:text-xl">
                        Send children on adventures with their 
                        favourite characters in a space made just for
                        them- free with your membership.
                    </p>           
                </div>
            </div>
        </div>

         {/* Separator */}
        <div className='h-2 w-full bg-[#232323]'></div>
        {/* FQA Section */}
        <div className="py-10 bg-black text-white ">
            <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
                <div className="flex-1 mb-8 text-4xl md:text-5xl font-bold">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="flex-1 w-full ">
                    <ul className="list-none w-11/12 px-4 my-0 mx-auto">
                        {
                            question.map((item, index)=>{
                                return <li className="w-full text-xl md:2xl mb-2" id={index} >
                                    <div className='py-3 px-4 bg-[#4D4848] flex justify-between items-center mb-2'>
                                        <p>{item.question}</p>
                                        <Plus className=" size-6 cursor-pointer" onClick={handleFqa}/>    
                                    </div>
                                    <div className='bg-[#4D4848] overflow-hidden h-0 answer'>
                                        <p>{item.answer}</p>   
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className='flex-1'>
                    <p className='text-xl md:text-2xl py-6'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <form className='flex flex-col md:flex-row gap-4 w-2/3 justify-center mx-auto' onSubmit={handleForm}>
                        <input type="email" 
                        className='px-2 md:px-4 py-2 md:w-2/3  border border-gray-700 rounded bg-[#4D4848] flex-1' 
                        placeholder='you@example.com' 
                        id='email' 
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}}/>
                        <button className='bg-red-600 text-xl px-2 py-1 rounded flex justify-center items-center'>
                        Get Started
                        <ChevronRight className='size-6 md:size-8'/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
