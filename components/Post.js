import { ChatIcon, TrashIcon , HeartIcon , ShareIcon,ChartBarIcon ,DotsHorizontalIcon } from "@heroicons/react/outline";

export default function Post({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* image */}
      <img className= "h-11 w-11 rounded-full mr-4"src={post.userImg} alt="user-img"/>
      {/* right */}
      <div className="flex-1">

     
      {/* header */}
      <div className="flex items-center justify-between">

      {/* post user info */}
      <div className="flex items-center space-x-1 whitespace-nowrap">
        <h4 className="space-x font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
        <span>@{post.username} - </span>
        <span className="text-sm sm:text-[15px] hover:underline">{post.timespan} 2 hours ago</span>
      </div>
      {/* icon */}   
      <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>
      </div>
       {/* post text */}
       <p className="text-gray-800 text-[15px sm:text-[16px] mb-2">{post.text}</p>

      {/* Post Image */}
      <img className="rounded-2x1 mr-2" src={post.img} alt=""/>
      {/* icons */}
    <div className="flex justify-between text-gray">
      <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
      <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
      <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
      <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
      <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
      

    </div>
      

      


      </div>
    </div>
  )
}
