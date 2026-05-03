

interface NavItem{
   label : string;
   href: string;
   isButton: boolean;
}


export const Nav: React.FC = () => {
      const menuItem: NavItem[]=[
        {label: 'Home', href: '/'},
        {label: 'Service', href: '/service'},
        {label: 'Subscribe', href: '/subscribe'},
        {label: 'Sign', href: '/sign', isButton:true},
        {label: 'Contact', href: '/contact'},
      ];

  return (
    <nav className="flex items-center justify-between px-8 py-4  bg-amber-700 shadow-sm">
        <div className="text-2xl font-bold text-blue-500">Brand</div>
        {/* Navigation */}
        <div className="flex items-center gap-8">
           {menuItem.map((item) =>(
            <a 
            key={item.label}
            href={item.href}
            className={`text-sm font-medium transition-colors ${
              item.isButton
                ? "bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
                : "text-gray-600 hover:text-blue-600"
            }`}
            
            >
            {item.label}

            </a>
           ))}
        </div>
    </nav>
  )
}
