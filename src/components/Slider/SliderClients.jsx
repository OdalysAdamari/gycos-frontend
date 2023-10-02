import { useState } from "react"

export const SliderClients = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const clients = [
        {
            id: 1,
            img: "http://localhost:1337/uploads/teksid_1_01d774224a.png"
        },
        {
            id: 2,
            img: "http://localhost:1337/uploads/psw_98db542cb1.png"
        },
        {
            id: 3,
            img: "http://localhost:1337/uploads/cat_9a6b3b33d3.png"
        },
        {
            id: 4,
            img: "http://localhost:1337/uploads/reis_5fca84f051.png"
        },
        {
            id: 5,
            img:"http://localhost:1337/uploads/denso_57bfc748fb.png"
        }        
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev +1)
    }

  return (
    <div className='sliderClients w-full overflow-auto relative '>
        <div className='sliderClientsContainer flex px-4 space-x-24 ' style={{transform:`translateX(-${currentSlide * 50}vw)` }}>
            {clients.map(client => 
                <div key={client.id} className="flex items-center align-middle rounded-xl   w-full p-4">
                <img src={client.img} className=" p-4 "/>
                </div>
                )}
        </div>
        <div className='flex absolute bottom-2 right-9 w-36  text-black'>
            <div onClick={prevSlide} className='border-2 cursor-pointer'>
                
            </div>
            <div onClick={nextSlide} className='border-2 cursor-pointer'>
                
            </div>
        </div>
    </div>
  )
}
