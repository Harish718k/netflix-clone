import { LogOut, Menu, Search } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/AuthUser';
import { useContentStore } from '../store/content';

export const Navbar = () => {
    const [isMoblieMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {user, logout} = useAuthStore()

    const toggleMoblieView = ()=>{
        setIsMobileMenuOpen(!isMoblieMenuOpen)
    }

    const {setContentType} = useContentStore()
  return (
    <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 z-50'>
        <div className="flex items-center gap-10">
            <Link to="/">
                <img src="/netflix-logo.png" alt="netflix logo" className='w-32 sm:w-40'/>
            </Link>

            {/* desktop navbar items*/}

            <div className="hidden sm:flex gap-2 items-center">
                <Link to="/" className='hover:underline' onClick={()=>{setContentType("movie")}}>
                    Movies
                </Link>
                <Link to="/" className='hover:underline' onClick={()=>{setContentType("tv")}}>
                    Tv shows
                </Link>
                <Link to="/history" className='hover:underline'>
                    Search History
                </Link>
            </div>
        </div>

        <div className="flex gap-2 items-center">
            <Link to="/search">
                <Search className='size-6 cursor-pointer' />
            </Link>
            <img src={user.image} alt="Avatar" className='h-8 cursor-pointer rounded'/>
            <LogOut className='size-6 cursor-pointer' onClick={logout}/>
            <div className='sm:hidden'>
                <Menu className='size-6 cursor-pointer' onClick={toggleMoblieView}/>
            </div>
        </div>

        {/* mobile navbar items */}
        {isMoblieMenuOpen && (
            <div className="sm:hidden w-full mt-4 z-50 bg-black border rounded border-gray-800">
                <Link to="/" className='hover:underline p-2 block' onClick={toggleMoblieView}>
                    Movies
                </Link>
                <Link to="/" className='hover:underline p-2 block' onClick={toggleMoblieView}>
                    Tv shows
                </Link>
                <Link to="/history" className='hover:underline p-2 block' onClick={toggleMoblieView}>
                    Search History
                </Link>
            </div>
        )}
    </header>
  )
}
