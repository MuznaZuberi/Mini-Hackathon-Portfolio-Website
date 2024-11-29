import Image from "next/image";

export default function About() {
  return (

   <div>
     <section id = "about">
     <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
     <Image
        className="object-cover object-center rounded"
        alt="me_img"
        src={require("../../../images/about.png")}
     />
     </div>
     <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     <h1 className="font-serif text-3xl">
                                       About
     </h1>  
     <br className="hidden lg:inline-block" />
     <b className = "font-serif font-bold text-6xl text-black">About Me?</b>
     <p className="mb-8 leading-relaxed text-justify pt-3 font-serif">
                 I am a passionate AI and Web 3.0 enthusiast, currently pursuing advanced studies in Generative AI, Web 3.0, and the Metaverse. With a strong foundation in both frontend and backend development, I have honed my skills to create dynamic, responsive, and innovative web solutions. My experience spans across building robust, scalable applications that integrate cutting-edge technologies to deliver exceptional user experiences. As I continue to explore the realms of AI and Web 3.0, I am committed to leveraging these emerging technologies to shape the future of the web.
      </p>
      </div>
      </div>
      </section>
      </div>
   );
}