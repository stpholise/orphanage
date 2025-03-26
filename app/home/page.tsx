'use client'
import HomeHero from '../_components/utilityComponents/HomeHero'
 import Image from 'next/image'
 import SupprotMarquee from '../_components/utilityComponents/SupprotMarquee'
 import ProjectCard from '../_components/utilityComponents/ProjectCard'
 import Ellipse from '../_components/utilityComponents/Ellipse'
 import {fn} from '../lib/utility'
 
 interface Project {
    projectTitle: string;
    projectDescription: string; 
 }

 const ourProjects: Project[] =[
    {projectTitle:'Mission smile 1k: Outdoor charity', projectDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {projectTitle:'Weekly excursions', projectDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
    {projectTitle:'Monthly public awareness', projectDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'},
 ]
 interface Service {
    icon: string;
    title: string;
    details: string;
 }

 const services: Service[] =[
    {
        icon: '/Icons/family-support-icon.svg',
        title: 'Family Support',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
        icon: '/Icons/health-benefit-icon.svg',
        title: 'Health Benefit',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
        icon: '/Icons/scholarship-icon.svg',
        title: 'Scholarship',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
        icon: '/Icons/therapy-icon.svg',
        title: 'Therapy',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
 ]

 interface ChartData {
    title: string;
    value: number, 
    color: string;
 }

 const chartData: ChartData[]  =  [
        { title: 'child care home', value: 40, color: '#BEF3C0' },
        { title: 'cleanliness program', value: 35, color: '#AC94F1' },
        { title: ' helping people', value: 10, color: '#FFF0CA' },
        { title: ' helping people', value: 10, color: '#F9CF64' },
        { title: ' helping people', value: 5, color: '#F38FBF' },
    ]
 

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
                <div className="container mx-auto flex flex-col gap-6">
                    <div className="flex gap-8 items-center"><h4 className='whitespace-nowrap'>OUR SUPPORTERS</h4> <div className="border border-gray-600 h-0 w-full"></div></div>
                    <SupprotMarquee />
                </div>
            </div>
        </div>
        {/* Services */}
        {/* =================================================*/}
        <div className="bg-[#FCEDC6]">
            <div className="container mx-auto flex flex-col gap-24 lg:px-8 px-4 lg:py-14">
                <div className="flex lg:gap-16 items-center">
                    <div className="flex flex-col gap-9 min-h-[460px]">
                        <div className="flex items-center justify-start gap-5 font-bold"><div className="border w-20 border-gray-700"></div> <h4>WHAT WE DO</h4></div>
                        <div className=" ml-24 lg:w-[607px] flex flex-col gap-5">
                            <h2 className="text-5xl font-bold"> Some services we provide for our children</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p> 
                            <div className=" flex flex-col gap-5 px-8 border-l-2 border-gray-400">
                                    {
                                        services.map((item, index) => (
                                            <div key={index} className="flex gap-8 justify-start">
                                                <div className="w-9">
                                                    <Image 
                                                        src={`${item.icon}`}
                                                        alt={item.title}
                                                        width={50}
                                                        height={50}
                                                        className='w-8 h-8'
                                                    />
                                                </div>
                                                <div className=" flex flex-col gap-2">
                                                    <h2 className='font-bold text-2xl'>{item.title} </h2>
                                                    <p className="">{item.details}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                            </div>
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
        {/* What we do*/}
        {/* =================================================*/}
        <div className="">
            <div className="container mx-auto flex flex-col gap-12 lg:px-8 px-4 lg:py-14">
                <div className="flex lg:gap-16 items-center">
                    <div className="flex flex-col gap-9  ">
                        <div className="flex items-center justify-start gap-5 font-bold"><div className="border w-20 border-gray-700 uppercase"></div> <h4>Projects we have done</h4></div>
                        <div className=" ml-24 lg:w-[607px] flex flex-col gap-8">
                            <h2 className="text-5xl font-bold">We are creating a place where children with special needs can thrive</h2> 
                        </div>
                    </div> 
                </div>
                <div className="container mx-auto flex flex-row gap-6"> 
                    {
                        ourProjects.map((item, index) => (
                            <ProjectCard key={index}  projectTitle={item.projectTitle} projectDescription={item.projectDescription} />
                        ))
                    }
                </div>
            </div>
        </div>
        {/* Donation Using */}
        {/* =================================================*/}
        <div className="bg-black text-white">
            <div className="container mx-auto flex flex-col gap-12 lg:px-8 px-4 lg:py-14">
                <div className="flex w-full lg:gap-16 items-center justify-between">
                    <div className="flex flex-col gap-9  "> 
                        <div className="  lg:w-[607px] flex flex-col gap-8">
                            <h2 className="text-5xl font-bold">How we spend your donations and where it goes</h2> 
                            <p>We understand that when you make a  donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
                            <div className="flex items-center flex-wrap gap-x-9 gap-y-4 text-sm ">
                                {
                                    chartData.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4  ">
                                            <div className={fn("w-4 h-4 " , 
                                             `bg-[${item.color}]` )}  > </div> <p className='whitespace-nowrap '> {item.value}% {item.title}</p></div>
                                    ))
                                }
                            </div>
                        </div>
                    </div> 
                    <div className="">
                        <Ellipse data={chartData} />
                    </div>
                </div> 
            </div>
        </div>
        {/* Assist section */}
        {/* =================================================*/}
        <div className="">
            <div className="container mx-auto flex flex-col gap-24 lg:px-8 px-4 lg:py-14">
                <div className="flex w-full lg:gap-16 items-center justify-center bg-[url('/Images/BG-image.jpg')] h-96 ">
                    <div className={`flex flex-col items-center justify-center w-[807px]  gap-9 `}>
                       <h3 className="font-bold text-5xl text-white ">You can contribute to provide a place for children with special needs!</h3>
                       <div className=" flex items-center justify-center gap-4"> 
                            <button className='bg-[#F2C94C] w-52 h-12 rounded-sm'>Join as a volunteer</button>
                            <button className="bg-white  text-black w-36 h-12 rounded-sm">Donate</button>
                        </div>
                    </div>
                    
                </div>
                <div className="container mx-auto flex flex-col gap-6">
                    <div className="flex gap-8 items-center"><h4 className='whitespace-nowrap'>Our Events</h4> <div className="border border-gray-600 h-0 w-full"></div></div>
                    <div className="flex gap-7 justify-center">
                        <div className="flex bg-[#F2C94C] h-40 p-9 gap-4 rounded-xl w-full ">
                                <div className="">
                                    <p className="text-3xl"> 13</p>
                                    <p> APR </p>
                                </div>
                                <div className="">
                                    <div className="text-sm uppercase flex items-center gap-5"> Next Event <div className="border-b border-black w-12"></div></div>
                                    <div className="text-2xl font-semibold">A day with our wonderful children </div>
                                </div>
                        </div>
                        <div className="flex gap-4 bg-[#F2C94C] h-40 p-9 rounded-xl w-full ">
                                <div className="">
                                    <p className="text-3xl"> 25</p>
                                    <p> APR </p>
                                </div>
                                <div className="">
                                    <div className="text-sm uppercase flex items-center gap-5"> Next Event <div className="border-b w-12 border-black"></div></div>
                                    <div className="text-2xl font-semibold">Seminar: Caring for children with autism</div>
                                </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default page