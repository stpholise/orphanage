 import Marquee from 'react-fast-marquee'
 import Image from 'next/image'

 const marqueeContents: string[] = [
    '/Logos/logo1.svg',
    '/Logos/logo2.svg',
    '/Logos/logo3.svg',
    '/Logos/logo4.svg',
    '/Logos/logo5.svg',
    '/Logos/logo6.svg'
 ]
 
const SupprotMarquee = () => {
  return (
    <div>
        <Marquee>
            {
                marqueeContents.map((item, index) => (
                    <div key={index} className="">
                        <Image 
                            src={`${item}`}
                            alt='marquee item'
                            height='50'
                            width='200'
                            className='w-40 h-12 mr-9'
                        />
                    </div>
                ))
            }
        </Marquee>
    </div>
  )
}

export default SupprotMarquee