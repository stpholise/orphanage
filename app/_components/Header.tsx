
import Nav from './utilityComponents/Nav'
import { Courgette } from "next/font/google";


const courgette = Courgette({  
    subsets: ['latin'],
    weight: '400'
  })
const Header = () => {
  return (
    <div >
        <div className="container mx-auto flex justify-between md:px-8 px-4  py-2 lg:py-4">
            <div className="logo">
                <p className='text-black font-bold'><span>largerthan</span> <span className={`${courgette.className}`}>i</span></p>
            </div>
            <div className="">
                <Nav />
            </div>
            <div className="">
                <button title='Donate button' className=' bg-[#1D2130] text-white px-8 py-2 max-h-11 font-medium rounded-sm'>
                    Donate
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header