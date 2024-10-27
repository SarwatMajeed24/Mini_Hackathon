import Image from "next/image"
import Link from "next/link"
export default function Featured_New_Car(){
    return(
        <div className="bg-gray-200">
            <div>
            <div>
                <div className="flex flex-wrap mt-8 gap-96"> 
              <h1 className="mt-8 mx-96 text-2xl font-semibold">Featured New Cars </h1>
              <div className="mt-8">ViewAllNewCars</div>
              </div>
                </div>
            
              <div>
                <ul className="flex flex-wrap gap-6 mx-96 mt-6 text-xl">
                    <li>Popular</li>
                    <li>Upcoming</li>
                    <li>Newly Launched</li>
                </ul>
              </div>
        <div className="flex flex-wrap justify-center mt-8 gap-6">   
        <Link href="/toyota_corolla">
        <div className="bg-white w-60 h-72 mb-4 text-center">
        <Image
            src ="/image/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg"
              alt="Car Image"
              width={900}
              height={900}
              className="h-48 w-[500px]" 
            />
              Toyota Corolla
              <br />
              PKR 59.7 - 75.5 lacs
        </div>
        </Link>
        <Link href="/suzuki_alto">
        <div className="bg-white w-60 h-72 mb-4 text-center">
        <Image
            src ="/image/Suzuki_Alto_-_PNG.png"
              alt="Car Image"
              width={900}
              height={900}
              className="h-48 w-[500px]
              00px]" 
            />
            Suzuki Alto
            <br />
            PKR 23.3 - 30.5 lacs
            </div>
        </Link>
        
             <Link href="/honda_city">
             <div className="bg-white w-60 h-72 mb-4 text-center">
            <Image
            src ="/image/Honda_City_Front.jpg"
              alt="Car Image"
              width={900}
              height={900}
              className="h-48 w-[500px]" 
            />  
            Honda City
            <br />
            PKR 46.5 - 58.5 lacs           
            </div>
             </Link>
             <Link href="/honda_civics">
             <div className="bg-white w-60 h-72 mb-4 text-center">
            <Image
            src ="/image/Honda-Civics.jpg"
              alt="Car Image"
              width={900}
              height={900}
              className="h-48 w-[500px]" 
            />
            Honda Civic
            <br />
            PKR 86.6 - 99.0 lacs
            </div>
             </Link>
         
      
             </div>
              <div>

              </div>
            </div>
            
        </div>
    )
}

