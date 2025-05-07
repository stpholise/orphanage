import EventsCard from "../cards/EventsCard";
interface PlanedEvent {
  id: string;
  image: string;
  title: string;
  date: string;
  information: string;
}

const planedEvents: PlanedEvent[] = [
  {
    id: "a1",
    image: "/Images/BG.svg",
    title: "Autism care day",
    date: "15th Nov 2022",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
  {
    id: "a2",
    image: "/Images/BG.svg",
    title: "Down syndrome outreach",
    date: "15th Nov 2022",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
  {
    id: "a3",
    image: "/Images/BG.svg",
    title: "Caring for children with cerebral palsy",
    date: "15th Nov 2022",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
  },
];

const EventWrapper = () => {
  return (
    <div className="xl:w-[590px]  lg:w-[560px] h-fit md:w-96 bg-white rounded-3xl xl:p-8 lg:p-5 m flex sm:flex-row flex-col md:flex-col md:p-4 gap-4 p-4 md:gap-6">
      {planedEvents.slice(0, 3).map((event) => (
        <EventsCard
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          information={event.information}
        />
      ))}
    </div>
  );
};

export default EventWrapper;
