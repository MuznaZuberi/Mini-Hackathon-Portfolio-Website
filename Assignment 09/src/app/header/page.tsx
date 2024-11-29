import Link from "next/link";

export default function Header() {
 return (
   
   <div>
   <header>
   <div className="nav-container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-xl border border-gray-400">
   <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   <span className="ml-3 text-3xl font-bold">Muzna</span>
   </a>
   <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href = "/" className="mr-5 text-black font-bold font-serif">Home</Link>
      <Link href = "#about" className="mr-5 font-serif">About</Link>
      <Link href = "#skills" className="mr-5 font-serif">Skills</Link>
      <Link href = "#project" className="mr-5 font-serif">Project</Link>
      <Link href = "#footer" className="mr-5 font-serif">Contact</Link>
   </nav>
   </div>
   </header>

   </div>










 );
}