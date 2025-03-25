 

const HomeHero = () => {
  return (
    <div className="h-[700px] bg-[url('/images/BG-Image.jpg')]  bg-cover w-full  ">
        <div className="container mx-auto text-white md:px-8 px-4 py-16  h-full flex flex-col justify-between">
            <div className="max-w-2xl flex flex-col gap-12  mt-12">
                <h1 className="text-6xl font-bold">Inclusive care for children with special needs</h1>
                 
                <button className="h-12 w-36 bg-white text-black rounded-sm ">
                    What we do 
                </button>
                 
            </div>
            <div className="container mx-auto flex gap-5 items-center text-white">
                <p className="whitespace-nowrap">230 children under our care</p>
                <div className="border h-0 border-gray-50 w-9/12"></div>
                <p className="whitespace-nowrap">58 donations collected</p>
            </div>
        </div>
    </div>
  )
}

export default HomeHero