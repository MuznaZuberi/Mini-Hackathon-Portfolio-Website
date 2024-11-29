import Link from "next/link";
import Image from "next/image";

export default function Myself() {
	return (

   <div>
   	 <section>
     <div className="myself-container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
     <h1 className="font-bold sm:text-4xl text-3xl mb-4 font-serif">
                                     Hi Everyone , I'm
     <br className="hidden lg:inline-block" />
     <b className = "font-serif text-gray-900 font-bold">Muzna Amir Zubairi</b>
     </h1>
     <p className="mb-8 leading-relaxed text-justify"> 
               Passionate about Generative AI, Web 3.0, and the Metaverse, with expertise in full-stack development. I specialize in creating innovative, scalable web solutions that integrate emerging technologies to deliver exceptional user experiences.      </p>
     <div className="flex justify-center">
     <Link href = "https://drive.google.com/file/d/1QyJrVqGLy92FCct6XbzeLNt3GcqePyWA/view" target = "blank" className="d-btn inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-lg text-lg">
                                     Download CV
     </Link>
     <Link href = "/about" className="ex-btn ml-4 inline-flex  border-0 py-2 px-6 focus:outline-none rounded-lg text-lg">
                                     Explore More
     </Link>
     </div>
     </div>
     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
     <Image
        className="object-cover object-center rounded-xl bg-indigo-600"
        alt="me_img"
        src={require("../../../images/about_me.jpg")}
     />
     </div>
     </div>
     </section>
  </div>
 );
}