import Image from 'next/image'
import Link from 'next/link'
interface PlanedEvent {
    id: string;
    image: string;
    title: string;
    date: string;
    information: string;
  }

const EventsCard = ( { id, image, title, date, information }  : PlanedEvent) => {
  return (
      <div className="lg:min-h-40 flex md:flex-row xs:flex-row flex-col sm:flex-col gap-4 xl:gap-6 lg:gap-4 xl:items-start lg:items-start">
          <Image
              src={image}
              alt={title}
              width='100'
              height='100'
              className="rounded-2xl xl:h-36 xl:w-36 lg:w-32  lg:h-32 md:h-20 md:w-20 sm:h-20 sm:w-34  h-20 object-cover"
          />
          <div className=" flex flex-col items-start justify-center xl:gap-3 lg:gap-1 gap-1.5">
              <h2 className=" "> <Link href='#' className="lg:text-lg text-lg font-bold"> {title}</Link></h2>
              <h5 className="text-[#1D2130] text-sm">{date}</h5>
              <p className="text-[#525560]">{information}</p>
          </div>
    </div>
  )
}

export default EventsCard