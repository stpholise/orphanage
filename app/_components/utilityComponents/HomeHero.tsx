 

const HomeHero = () => {
  return (
    <div className="h-96 md:h-[700px] bg-[url('/images/BG-Image.jpg')]  bg-cover w-full  ">
        <div className="container mx-auto text-white md:px-8 px-4 py-8 md:py-16  h-full flex flex-col justify-between">
            <div className="max-w-2xl flex flex-col gap-12 pt-4 md:mt-12">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Inclusive care for children with special needs</h1>
                 
                <button className=" h-10 w-32  md:h-12 md:w-36 bg-white text-black rounded-sm ">
                    What we do 
                </button>
                 
            </div>
            <div className="container mx-auto flex sm:flex-row flex-col gap-2 sm:gap-5 items-center text-white">
                <p className="whitespace-nowrap">230 children under our care</p>
                <div className="border h-0 border-gray-50 w-full sm:w-9/12"></div>
                <p className="whitespace-nowrap">58 donations collected</p>
            </div>
        </div>
    </div>
  )
}

export default HomeHero