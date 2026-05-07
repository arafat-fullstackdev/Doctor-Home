import { Mail, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // 'fa' folder
const TopNav:React.FC = () => {


  return (
    <div className='bg-[#106eea] md:px-12 text-white px-2 py-2  flex items-center justify-between'>
        <div className='flex items-center gap-6'>
          <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:underline">
          <Mail size={14} /> contact@example.com
        </a>
        <span className='hidden sm:flex items-center gap-2'>
          <Phone size={14}/> +34878765
        </span>

        </div>

        <div className='flex items-center gap-4'>
           <a href="#" className='hover:opacity-80'><FaFacebook size={16}/></a>
           <a href="#" className='hover:opacity-80'><FaInstagram size={16}/></a>
           <a href="#" className='hover:opacity-80'><FaLinkedin size={16}/></a>
        </div>

    </div>
    
  )
}

export default TopNav