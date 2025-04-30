import SectionTitle from "../ui/SectionTitle"
import ReadMoreButton from "../ui/buttons/ReadMoreButton";
interface SectionHeadingProps{
    title: string;
    heading: string;
    text?: string;
    button?: string;
}
const SectionHeading = ({title, heading, text, button} : SectionHeadingProps) => {
  return (
    <div className="">
    <SectionTitle title={title} />
    <div className="ml-16 max-w-[510px]  flex flex-col lg:gap-6 gap-4 my-6">
      <h1 className="lg:text-[52px] max-w-[490px] font-bold leading-16 ">
       {heading}
      </h1>{ text &&
      <p className="">
        {text}
              </p>}
              {button &&
      <div className=""> 
        <ReadMoreButton
          href="#"
          label={button}
          target="_self"
          bg="bg-[#F2C94C]"
        />
      </div>}
    </div>
  </div>
  )
}

export default SectionHeading