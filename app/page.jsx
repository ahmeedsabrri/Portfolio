import { Button } from "@/components/ui/button"
import {FiDownload } from "react-icons/fi"
// components
import Social from "@/components/ui/Social"
import { Photo } from "@/components/Photo"


const Home= () => {
  return (
    <section className="h-full">
      <div className="container max-auto h-full">
        <divv className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">Hi, I'm <br/><span className="text-accent">Ahmed Sabri</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">a software developer passionate about creating innovative solutions. This portfolio is a showcase of the projects I've worked on, reflecting my skills and experience across the development landscape. Whether you're here to explore my work or learn more about my journey, I hope you find something that resonates with you. Thank you for visiting, and I look forward to sharing more as I continue to grow and develop in this field!
            </p>
            {/* button and social media icons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 ">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          <div>
            <Photo />
          </div>
        </divv>
      </div>
    </section>
  )
}

export default Home