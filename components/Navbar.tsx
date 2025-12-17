import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-blue-600">
          MyWebsite
        </h1>
        {/* MENU LINKS */}
        <div className="space-x-6">
            <Link href='/' className="text-gray-600 hover:text-blue-600">
            Home
            </Link>
       
       </div>    
 </div>
    </nav>
  );
}
