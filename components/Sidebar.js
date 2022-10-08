import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import {HomeIcon} from "@heroicons/react/solid"
import {HashtagIcon ,BellIcon , InboxIcon , BookmarkIcon , ClipboardIcon , UserIcon , DotsHorizontalIcon , DotsCircleHorizontalIcon  } from "@heroicons/react/outline"

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image width = "50" height = "50" src = 'https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png'>
            </Image> 
        </div>
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon= {HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon= {HashtagIcon}/>
            <SidebarMenuItem text="Notifications" Icon= {BellIcon}/>
            <SidebarMenuItem text="Messages" Icon= {InboxIcon}/>
            <SidebarMenuItem text="Bookmarks" Icon= {BookmarkIcon}/>
            <SidebarMenuItem text="Lists" Icon= {ClipboardIcon}/>
            <SidebarMenuItem text="Profile" Icon= {UserIcon}/>
            <SidebarMenuItem text="More" Icon= {DotsCircleHorizontalIcon}/>
           
           

        </div>
        
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet </button>
        
        <div className="hoverEffect text-gray-700 flex items-center justify-start xl:justify-start mt-auto"> 
           
            <img width= "50" height= "50" className="h-10 w-10 rounded-full xl:mr-2" src= "https://media-exp1.licdn.com/dms/image/C4D03AQHHtZhcNvfJyQ/profile-displayphoto-shrink_800_800/0/1629191669010?e=1670457600&v=beta&t=uV7iAF6p3tpOaDxXsBzb4hwylD4EMRg9PbnIXTb5DDc"/>
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">Nikhil Reddy</h4>
                <p>@n1ghtk1ng</p>

            </div>
            <DotsHorizontalIcon className = "h-5 xl:mr-8"/>
        </div>



    </div>
  )
}

export default Sidebar 