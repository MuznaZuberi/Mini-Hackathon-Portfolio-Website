import Image from "next/image";
export default function MySkills() {
	return (
    
    <div>
    	<section id = "skills">
      <div className="skills-container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
      <h1 className="text-2xl font-serif font-bold mb-4">
                            Skills
      </h1>
      <h2 className="text-4xl font-bold font-serif text-black mb-4">
                            What I'm Capable Of?
      </h2>
      </div>
      <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 w-24 rounded overflow-hidden mx-auto">
      <Image
            src = {require("../../../images/skill_01.jpg")}
            alt = "html_logo"
            className = "rounded-xl"
      />
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 w-24 rounded overflow-hidden mx-auto">
      <Image
            src = {require("../../../images/skill_02.jpg")}
            alt = "html_logo"
            className = "rounded-xl"
      />
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 w-24 rounded overflow-hidden mx-auto">
      <Image
            src = {require("../../../images/skill_03.jpg")}
            alt = "html_logo"
            className = "rounded-xl"
      />
      </a>
      </div>
      <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 w-24 rounded overflow-hidden mx-auto">
           <Image
            src = {require("../../../images/skill_04.jpg")}
            alt = "html_logo"
            className = "rounded-xl"
       />
       </a>
       </div>
       <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
       <a className="block relative h-48 w-24 rounded overflow-hidden mx-auto">
       <Image
            src = {require("../../../images/skill_05.jpg")}
            alt = "html_logo"
            className = "rounded-xl"
       />
       </a>
       </div>
       <div className="lg:w-1/6 md:w-1/2 p-4 w-full">
       <a className="block relative h-48 w-24 rounded overflow-hidden mx-auto">
       <Image
            src = {require("../../../images/skill_06.jpg")}
            alt = "html_logo"
            className = "rounded-xl"
       />
       </a>
       </div>
       </div>
       </div>
       </section>
    </div>




	);
}