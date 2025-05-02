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
      <div className="lg:min-h-40 flex xl:gap-6 lg:gap-4 xl:items-start lg:items-start">
          <Image
              src={image}
              alt={title}
              width='100'
              height='100'
              className="rounded-2xl xl:h-36 xl:w-36 lg:w-32 lg:h-32 object-cover"
          />
          <div className=" flex flex-col items-start justify-center xl:gap-3 lg:gap-1">
              <h2 className=" "> <Link href='#' className="lg:text-lg font-bold"> {title}</Link></h2>
              <h5 className="text-[#1D2130] text-sm">{date}</h5>
              <p className="text-[#525560]">{information}</p>
          </div>
    </div>
  )
}

export default EventsCard