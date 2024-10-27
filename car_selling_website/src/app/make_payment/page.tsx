import Link from "next/link"
export default function Forms(){
    return(
        <div>
            <h1 className="text-5xl font-semibold text-center uppercase mt-10">enter your details</h1>
            <div>
            <form className="mt-16 flex gap-5 justify-center items-center flex-col border">
                <input type="name" className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Enter Your Name" />
                <input type="cell_number" className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Enter Your Contact" />
                <input type="email" className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Enter Your Email" />
                <input type="password" className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Enter Your Password" />
                <input type="Address" className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Enter Your Address" />
                <input type="card" className="p-2 rounded-2xl w-2/5 border border-red-800" placeholder="Enter Your card number" />            
            </form>
            <div className="flex justify-center mt-16">
            <Link href="/thankyou">
                <button className="rounded-lg py-3 px-8 bg-blue-500 text-white">Place your order</button>
                </Link>
            </div>
               
           </div>
        </div>
    )
} 