import Link from "next/link";
export default function Footer() {
	return (
    <div>
       <section id = "footer">
    	 <footer className = "footer-container mt-10">
       <div className="px-5  mx-auto">
       </div>
       <div className="border-t border-gray-200">
       <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
       <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
       <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
       <h1 className="leading-7 text-xl font-serif mb-3 font-bold">
                                  Contacts
       </h1>
       <h1  className="leading-7  text-black text-3xl font-bold font-serif">
                                  Get In Touch 
       </h1>
       <p className = "pt-3 font-serif font-bold">muznazuberi123@gmail.com</p>
       <Link href= "https://www.linkedin.com/in/muzna-amir-zubairi-280135264/" target = "blank" className="ml-3 icons">
       <svg

            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
       >
      <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
      />
      <circle cx={4} cy={4} r={2} stroke="none" />
      </svg>
      </Link>
      </div>
      </div>
      </div>
      </div>
      <div>
      <div className="container mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-black text-sm text-center sm:text-left font-serif pb-3 font-bold">
                    Copyright © 2024 Develope & Designed By Muzna Amir Zubairi
      </p>
      </div>
      </div>
      </footer>
      </section>
    </div>
 );
}