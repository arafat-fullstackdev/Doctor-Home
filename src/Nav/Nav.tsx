import { useState } from "react";
import {Menu, X} from 'lucide-react'


interface NavItem{
   label : string;
   href: string;
   isButton?: boolean;
}


export const Nav: React.FC = () => {

  const [isOpen,setOpen]= useState(false);

      const menuItem: NavItem[]=[
        {label: 'Home', href: '/'},
        {label: 'Service', href: '/service'},
        {label: 'Subscribe', href: '/subscribe'},
        {label: 'Sign', href: '/sign', isButton:true},
        {label: 'Contact', href: '/contact'},
      ];

  return (
    <nav className="flex items-center justify-between px-8 py-4  bg-blue-500 shadow-sm">
        <div className="text-2xl font-bold text-white">Brand</div>
        {/* responsive */}
        <button 
        className="md:hidden text-white focus:outline-none"
        onClick={()=> setOpen(!isOpen)}
        >
        {isOpen ? <X size={28}/>: <Menu size={28}/>}
        </button>
        {/* Navigation */}
        <div className={`
          absolute md:static top-full left-0 w-full md:w-auto 
          bg-blue-700 md:bg-transparent transition-all duration-300 ease-in
          flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-0
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:visible md:opacity-100'}
        `}>
           {menuItem.map((item) =>(
            <a 
            key={item.label}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
              item.isButton
                ? "bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
                : "text-white hover:text-blue-200"
            }`}
            
            >
            {item.label}

            </a>
           ))}
        </div>
    </nav>
  )
}
