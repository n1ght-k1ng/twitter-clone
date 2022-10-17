import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input.js"
import Post from "./post.js"

export default function Feed() {
  const posts =[ {
    id: "1",
    name: "Nikhil Reddy",
    username: "n1ghtk1ng",
    userImg: "https://media-exp1.licdn.com/dms/image/C4D03AQHHtZhcNvfJyQ/profile-displayphoto-shrink_800_800/0/1629191669010?e=1670457600&v=beta&t=uV7iAF6p3tpOaDxXsBzb4hwylD4EMRg9PbnIXTb5DDc",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQHHtZhcNvfJyQ/profile-displayphoto-shrink_800_800/0/1629191669010?e=1670457600&v=beta&t=uV7iAF6p3tpOaDxXsBzb4hwylD4EMRg9PbnIXTb5DDc",
    text: " nice view 1",
    timestamp:" 2hours ago"
  },
  {
    id: "2",
    name: "Nikhil Reddy",
    username: "n1ghtk1ng",
    userImg: "https://media-exp1.licdn.com/dms/image/C4D03AQHHtZhcNvfJyQ/profile-displayphoto-shrink_800_800/0/1629191669010?e=1670457600&v=beta&t=uV7iAF6p3tpOaDxXsBzb4hwylD4EMRg9PbnIXTb5DDc",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQHHtZhcNvfJyQ/profile-displayphoto-shrink_800_800/0/1629191669010?e=1670457600&v=beta&t=uV7iAF6p3tpOaDxXsBzb4hwylD4EMRg9PbnIXTb5DDc",
    text: " nice view 1",
    timestamp:" 2hours ago"
  } ]


  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-go max-w-wl ">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-gray-200">
        <h2 className="text-lg sm:text:xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
            <SparklesIcon className="h-5"/>
            </div> 
        </div>
        <Input/>
        {posts.map((post) =>(
          <Post key={post.id} post ={post}/>
        ))}
        </div>
  )
}
