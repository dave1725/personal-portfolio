import Link from 'next/link'
import React from 'react';

const navItems = [
    {name:"About Me",path:"/about"},
    {name:"Projects",path:"/projects"},
    {name:"Achievements",path:"/achievements"},
    {name:"Communities",path:"/communities"},
    {name:"Services",path:"/services"}
];

const Navbar = () => {
  return (
    <>
        <nav className="fixed top-0 flex flex-row bg-black items-center bg-opacity-80 border-b border-white/40 shadow-lg h-[60px] w-[100vw] ">
            <div className="flex w-full justify-between px-10">
                <div className="w-[20%]">
                    <p className='text-[25px] font-mono'>Dave Meshak J</p>
                </div>
                <div className="flex flex-1 w-full justify-between items-center">
                    {navItems.map((item,index)=>(
                            <Link key={index} href={item.path}>{item.name}</Link>
                    ))}
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
