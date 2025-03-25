 import HomeHero from '../_components/utilityComponents/HomeHero'
 import Image from 'next/image'
 import SupprotMarquee from '../_components/utilityComponents/SupprotMarquee'

const page = () => {
  return (
    <div>
         
        <HomeHero />
        
        <div className="">
            <div className="container mx-auto flex flex-col gap-24 lg:px-8 px-4 lg:py-14">
                <div className="flex lg:gap-16 items-center">
                    <div className="flex flex-col gap-9 h-[460px]">
                        <div className="flex items-center justify-start gap-5 font-bold"><div className="border w-20 border-gray-700"></div> <h4>KNOW ABOUT US</h4></div>
                        <div className=" ml-24 lg:w-[607px] flex flex-col gap-8">
                            <h2 className="text-5xl"> We provide a place for children with special needs</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                            <p className=""> ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            <button className='h-12 w-36 bg-[#F2C94C] rounded-sm'> Learn more</button>
                        </div>
                    </div>
                    <div>
                        <Image 
                            src='/images/BG1.jpg'
                            alt='kids image'
                            width='100'
                            height='100'
                            className='w-[444px] h-[550px] rounded-3xl border border-red-200'
                        />
                    </div>
                </div>
                <div className="container mx-auto lg:px-8 px-4 flex flex-col gap-6">
                    <div className="flex gap-8 items-center"><h4 className='whitespace-nowrap'>OUR SUPPORTERS</h4> <div className="border border-gray-600 h-0 w-full"></div></div>
                    <SupprotMarquee />
                </div>
            </div>
        </div>

        <div className="">
            <div className="container mx-auto flex flex-col gap-24 lg:px-8 px-4 lg:py-14">
                <div className="flex lg:gap-16 items-center">
                    <div className="flex flex-col gap-9 h-[460px]">
                        <div className="flex items-center justify-start gap-5 font-bold"><div className="border w-20 border-gray-700"></div> <h4>WHAT WE DO</h4></div>
                        <div className=" ml-24 lg:w-[607px] flex flex-col gap-8">
                            <h2 className="text-5xl"> Some services we provide for our children</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p> 
 
                        </div>
                    </div>
                    <div>
                        <Image 
                            src='/images/BG2.jpg'
                            alt='kids image'
                            width='100'
                            height='100'
                            className='w-[444px] h-[550px] rounded-3xl border border-red-200'
                        />
                    </div>
                </div>
               
            </div>
        </div>

    </div>
  )
}

export default page