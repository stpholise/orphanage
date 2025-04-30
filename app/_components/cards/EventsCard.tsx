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
      <div className="lg:min-h-40 flex lg:gap-6">
          <Image
              src={image}
              alt={title}
              width='100'
              height='100'
              className="rounded-2xl lg:h-36 lg:w-36 object-cover"
          />
          <div className=" flex flex-col items-start justify-center gap-3">
              <h2 className=" "> <Link href='#' className="lg:text-lg font-bold"> {title}</Link></h2>
              <h5 className="text-[#1D2130] text-sm">{date}</h5>
              <p className="text-[#525560]">{information}</p>
          </div>
    </div>
  )
}

export default EventsCard