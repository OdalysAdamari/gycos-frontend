import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../../../src/index.css"

export const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.unsplash.com/photo-1611117775350-ac3950990985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        "https://images.unsplash.com/photo-1593106421907-821f022cf8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev +1)
    }

  return (
    <div className='slider h-screen w-screen overflow-hidden relative'>
        <div className='sliderContainer flex ' style={{transform:`translateX(-${currentSlide * 100}vw)` }}>
            <img src={data[0]} alt="" className='w-screen h-full'></img>
            <img src={data[1]} alt="" className='w-screen h-full'></img>
            <img src={data[0]} alt="" className='w-screen h-full'></img>
        </div>
        <div className='flex absolute bottom-2 right-9 w-7  text-white'>
            <div onClick={prevSlide} className='border-2 cursor-pointer'>
                <KeyboardArrowLeftIcon/>
            </div>
            <div onClick={nextSlide} className='border-2 cursor-pointer'>
                <KeyboardArrowRightIcon/>
            </div>
        </div>
    </div>
  )
}
