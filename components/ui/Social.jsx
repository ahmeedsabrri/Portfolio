import Link from "next/link"
import { FaGithub, FaLinkedinIn} from "react-icons/fa"

const Socials = [
    {
        icon: <FaGithub/>,
        path: "https://github.com/ahmeedsabrri",
    },
    {
        icon: <FaLinkedinIn/>,
        path: "https://www.linkedin.com/in/ahmed-sabri-446364259/",
    },
]
const Social = () => {
return (
    <div className="flex gap-6">
        {Socials.map((item,index)=>{
            return (
                <Link href={item.path} key={index} className="w-9 h-9 border border-accent rounded-full flex
                justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                    {item.icon}
                </Link>
            )
        })}
    </div>
)
}

export default Social