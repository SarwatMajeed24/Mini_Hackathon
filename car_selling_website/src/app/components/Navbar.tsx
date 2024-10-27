import Image from "next/image";

export default function Navbar() {
  return (
    <div>
   <nav className="flex flex-col items-center bg-black w-full h-32 px-6 justify-center text-sm">
         
         <div className="flex justify-between items-start text-white w-3/6 gap-96 mb-6 -mt-0">
           <div>DownloadAppviaSMS</div>
           <div className="flex gap-4 left-1/2 space-x-4 px-96 mx-6">
             <div>SignUp</div>
             <div>SignIn</div>
           </div>
         </div>
       
        <div className="flex items-center gap-8 text-center m-0 p-0">

          <div className="relative flex-shrink-0 mx-32 mb-6">
            <Image
            src ="/image/pw-logo.png"
              alt="Logo"
              width={900}
              height={900}
              className="h-12 w-[180px]" 
            />
          </div>

          <ul className="flex gap-8 text-white">
            <li>Usercards</li>
            <li>Newcars</li>
            <li>Bikes</li>
            <li>AutoStore</li> 
            <li>Video</li>
            <li>Forums</li>
            <li>Blog</li>
            <li>More</li>
          </ul>

          <div className="relative">
            <button className="bg-red-700 hover:bg-red-700 text-white font-bold text-base py-2 px-6 rounded flex mb-5">
              Post an Ad
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
