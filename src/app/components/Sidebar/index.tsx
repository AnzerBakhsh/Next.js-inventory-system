"use client"
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import { Archive, CircleDollarSign, Clipboard, Icon, Layout, LucideIcon, Menu, SettingsIcon, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}
interface SidebarLinkProps{
href : string;
icon : LucideIcon;
label :string;
isCollapsed : boolean;
}
const SidebarLink =({

  href,
  icon : Icon,
  label,
  isCollapsed
}: SidebarLinkProps) =>{
  const pathname  = usePathname();
  const isActive = pathname === href ||(pathname === "/" && href === "/dashboard");
  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center gap-3 p-2 rounded-md ${isCollapsed ? 'justify-center py-4' : 'justify-start py-4 px-8'}
       hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? 'bg-blue-200 text-white' : ''}`}>
        <Icon className="w-5 h-5 text-gray-700" ></Icon>
        <span className={`${isCollapsed ? 'hidden' : 'block'} font-medium text-gray-700`}>{label}</span>
      </div>
    </Link>
  )

}

const Sidebar = (props: Props) => {

  const dispatch = useAppDispatch();
   const isSidebarCollapsed = useAppSelector(
      (state) => state.global.isSidebarCollapsed
    );
    const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md: w-16' :'w-72 md: w-64' } bg-white h-full transition-all duration-300 ease-in-out z-40 overflow-hidden shadow-md`;

    const toggleSidebar = () => {
      dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    }
  return (
    <div className={sidebarClassNames}>
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? 'px-6 md:px-8 ' : 'px-6'}`}>
            <div className="">Logo</div>
            <h1 className={`${isSidebarCollapsed ? 'hidden' : 'block'} font-extrabold text-2xl`}>Invento</h1>

        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleSidebar}>
            <Menu className="w-4 h-4"/>
        </button>
        </div>
        {/* Links */}
        <div className="grow mt-8">
          <SidebarLink href="/dashboard"
           icon={Layout} 
           label="Dashboard" 
           isCollapsed={isSidebarCollapsed}/>
           <SidebarLink href="/inventory"
           icon={Archive} 
           label="Inventory" 
           isCollapsed={isSidebarCollapsed}/>
           <SidebarLink href="/products"
           icon={Clipboard} 
           label="Products" 
           isCollapsed={isSidebarCollapsed}/>
           <SidebarLink href="/users"
           icon={User} 
           label="Users" 
           isCollapsed={isSidebarCollapsed}/>
            <SidebarLink href="/expenses"
           icon={CircleDollarSign} 
           label="Expenses" 
           isCollapsed={isSidebarCollapsed}/>
            <SidebarLink href="/settings"
           icon={SettingsIcon} 
           label="Settings" 
           isCollapsed={isSidebarCollapsed}/>
        </div>
        {/* Footer */}
        <div className={` ${isSidebarCollapsed ? 'hidden md:block' : 'block'}mb-10`}>
          <p className='text-center text-xs text-gray-500'> &copy; 2025 Invento. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Sidebar