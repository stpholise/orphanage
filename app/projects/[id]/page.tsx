"use client";
import Volunteer from "@/app/_components/helpers/Volunteer";
import ProjectsWrapper from "@/app/_components/helpers/ProjectsWrapper";
import SectionTitle from "@/app/_components/ui/SectionTitle";
const page = () => {
  return (
    <div className="lg:py-16"> 

      <section className="container mx-auto xl:px-32 lg:px-28 md:px-16 px-8  ">
        <SectionTitle title="Our project" />
        <div className="lg:ml-16 flex flex-col gap-4 md:gap-6  lg:py-12 ">
          <h1 className="lg:text-[52px] font-bold leading-16">Mission Smile 1k: Outdoor charity outreach</h1>
          <div className=" flex flex-col gap-4  md:gap-6">
            <p className="">
              Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam
              in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
              tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
              accumsan et id ut est. Posuere molestie in turpis quam.
              Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel
              nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere
              magna erat bibendum amet, nisi eu id.
            </p>
            <p className="">
              Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc,
              lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet,
              cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed
              dignissim a in nec aliquam fringilla et. Mattis elit dignissim
              nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique.
              Integer faucibus duis praesent tempor feugiat ornare in. Erat
              libero egestas porttitor nunc pellentesque mauris et pulvinar
              eget.
            </p>
            <p className="">
              Consectetur feugiat quis hac enim nullam in enim. Tellus nisi
              dapibus libero rutrum vitae nisl, cursus in sed. Egestas mi
              ultricies et consectetur vel non. Augue enim enim, eget ut sit
              purus, justo nisl pharetra. Tincidunt leo aenean dui, varius
              metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet
              venenatis faucibus. Enim, vel nunc purus feugiat purus tincidunt
              neque. Massa ultricies faucibus pellentesque risus duis est
            </p>
          </div>
          <div className="flex w-full lg:gap-16 items-center justify-center bg-[url('/Images/BG-Image.jpg')] bg-cover h-72 py-9 md:h-96 rounded-lg "></div>
          <h2 className="lg:text-4xl font-bold ">Some cool heading</h2>
          <p className="">
            Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi
            at sit convallis blandit blandit in. Maecenas odio orci lectus urna
            ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non
            semper sit tellus adipiscing. Est sapien rhoncus sit vestibulum
            sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam
            sem bibendum felis interdum pharetra. Diam fermentum in lectus morbi
            at eget sit et quisque. Semper commodo viverra donec magna egestas
            nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras
            eu. Velit dignissim penatibus faucibus tempus. Arcu pharetra morbi
            bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae
            odio. Mi eu lectus suscipit sagittis, ultrices ut dui.
          </p>

          <p className="">
            Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi
            at sit convallis blandit blandit in. Maecenas odio orci lectus urna
            ante consequat erat non morbi.
          </p>
        </div>
      </section>
      <section className="container mx-auto lg:px-8 md:px-6 px-4 flex flex-col lg:gap-12">
        <SectionTitle title="More projects" />
        <ProjectsWrapper />
        <Volunteer />
      </section>
    </div>
  );
};

export default page;
