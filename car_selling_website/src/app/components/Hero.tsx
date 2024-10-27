export default function Hero() {
    return (
        <div className="flex flex-wrap justify-center mt-24">
            <div className="relative w-1/2 border border-gray-600">
    
                <div className="absolute top-0 left-52 right-54 flex items-center justify-center">
                    <div className="border-t border-gray-400 w-full relative">
                        <h1 className="text-xl font-semibold text-gray-800 inline-block bg-white px-4 relative -top-3">
                            Sell Your Car on PakWheels and Get the Best Price
                        </h1>
                    </div>
                </div>

            
                <div className="flex pt-16 pb-4 relative"> 
                    <div className="w-1/2 h-80 mb-4">
                        <h1 className="text-2xl text-blue-900 mt-10 mx-8">Post your Ad on PakWheels</h1>
                        <p className="text-sm mt-2 mx-12 text-gray-500">
                            Post your Ad for Free in 3 Easy Steps
                            <br />
                            Get Genuine offers from Verified Buyers
                            <br />
                            Sell your car Fast at the Best Price
                        </p>
                        <button className="bg-red-700 hover:bg-red-900 text-white text-base py-3 px-6 rounded flex mt-8 mx-12 my-12">
                            Post Your Ad
                        </button>
                    </div>

                    
                    <div className="flex items-center justify-center mx-0">
                        <div className="border-l border-gray-400 h-20" />
                        <span className="absolute text-gray-500 font-semibold inline text-xl bg-white px-2">OR</span>
                        <div className="border-l border-gray-400 h-20" />
                    </div>

                    <div className="w-1/2 h-80 mb-0">
                        <h1 className="text-2xl text-blue-900 mt-10 mx-8">Try PakWheels Sell It For Me</h1>
                        <p className="text-sm mt-2 mx-12 text-gray-500">
                            Dedicated Sales Expert to Sell your Car
                            <br />
                            We Bargain for you and share the Best Offer
                            <br />
                            We ensure Safe & Secure Transaction
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-900 text-white text-base py-3 px-6 rounded flex mt-8 mx-12 my-12">
                            Register Your Car
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
