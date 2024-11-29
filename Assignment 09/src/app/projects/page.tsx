import Link from "next/link";
import Image from "next/image";

export default function Projects() {
	return (
    <div>	
        <section id = "project">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
        <div className="text-center mb-20">
        <h1 className="text-2xl font-serif font-bold mb-4">
                                Projects
        </h1>
        <h2 className="text-4xl font-bold font-serif text-black mb-4">
                                Whta I Have Made?
        </h2>
        </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-2xl rounded-xl">
        <div className="rounded-lg h-64 overflow-hidden border">
        <Image
            alt="project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_01.JPG")}
        />
        </div>
        <h2 className="text-2xl font-bold font-serif text-black mt-5">
                                 EarthBloom
        </h2>
        <p className="text-base leading-relaxed mt-2">
                 EarthBloom is a platform dedicated to promoting sustainable living and eco-friendly solutions, offering innovative products and ideas to nurture a greener future.
        </p>
        <Link href = "https://eathbloom-beauty-of-nature.vercel.app/" target = "blank" className="text-indigo-500 inline-flex items-center mt-3">
                                  Live View
        </Link>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-2xl rounded-xl">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_02.JPG")}
        />
        </div>
        <h2 className="text-2xl font-bold font-serif text-black mt-5">
                                  WashWave
        </h2>
        <p className="text-base leading-relaxed mt-2">
                  WashWave offers smart, efficient, and eco-friendly washing solutions, combining convenience with sustainability for a cleaner tomorrow.
        </p>
        <Link href = "https://wash-waves.vercel.app/" target = "blank" className="text-indigo-500 inline-flex items-center mt-3">
                                  Live View
        </Link>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-2xl rounded-xl">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_03.JPG")}
        />
        </div>
        <h2 className="text-2xl font-bold font-serif text-black mt-5">
                                   Berrylicious
        </h2>
        <p className="text-base leading-relaxed mt-2">
                Berrylicious brings you the freshest, juiciest, and most delightful berry-inspired treats, crafted for every occasion.
        </p>
        <Link href = "https://berrylicious-delta.vercel.app/" target = "blank" className="text-indigo-500 inline-flex items-center mt-3">
                 Live View
        </Link>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-2xl rounded-xl">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_04.JPG")}
        />
        </div>
        <h2 className="text-2xl font-bold font-serif text-black mt-5">
                                   Sizzels Serve
        </h2>
        <p className="text-base leading-relaxed mt-2">
                Sizzels Serve delivers mouthwatering dishes with exceptional service, offering a perfect blend of taste and quality for every craving.
        </p>
        <Link href = "https://sizzels-serve.vercel.app/" target = "blank" className="text-indigo-500 inline-flex items-center mt-3">
                                    Live View
        </Link>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-2xl rounded-xl">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_05.JPG")}
        />
        </div>
        <h2 className="text-2xl font-bold font-serif text-black mt-5">
                                      Clevora
        </h2>
        <p className="text-base leading-relaxed mt-2">
            Clevora crafts innovative and intelligent solutions, empowering businesses with cutting-edge technology and seamless efficiency.
        </p>
        <Link href = "https://clevora-shopping-store.vercel.app/" target = "blank" className="text-indigo-500 inline-flex items-center mt-3">
                                        Live View
        </Link>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6 shadow-2xl rounded-xl">
        <div className="rounded-lg h-64 overflow-hidden">
        <Image
            alt="project_img"
            className="object-cover object-center h-full w-full"
            src={require("../../../images/project_06.JPG")}
        />
        </div>
        <h2 className="text-2xl font-bold font-serif text-black mt-5">
                                         Vista Voy
        </h2>
        <p className="text-base leading-relaxed mt-2">
                 Vista Voy curates unforgettable travel experiences, blending adventure and comfort to create journeys you'll cherish forever.
        </p>
        <Link href = "https://vistavoy-travel-website.vercel.app/" target = "blank" className="text-indigo-500 inline-flex items-center mt-3">
                                          Live View
        </Link>
        </div>
        </div>
        </div> 
        </section>
    </div>
 );
}