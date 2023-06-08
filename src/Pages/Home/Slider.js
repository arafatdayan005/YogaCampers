import { Carousel } from 'flowbite-react'
import React from 'react'

function Slider() {
    return (
        <section className="h-56 sm:h-64 md:h-96 2xl:h-[100vh] bg-black bg-auto pt-20">
                <Carousel>
                    <div className="flex h-full items-center">
                        <img src="https://s1.1zoom.me/b6444/284/Stones_Crag_Moss_Brown_haired_Yoga_Sitting_530664_1366x768.jpg" className='h-[90vh] w-full' alt="" />
                        <div className="h-full w-full absolute bg-gradient-to-r from-[#000000c0] to-[#00000000]">
                            <div className='h-full w-full flex flex-col items-start justify-center pl-8 md:pl-20'>
                                <p className='mt-8 text-white text-2xl md:text-6xl  font-semibold'>This Summer <br /> Purify Your Soul With <br /> <span className='text-[#6fc826] font-extrabold text-7xl tracking-tight'>YogaCampers</span></p>
                                <button className='px-8 bg-[#6fc826] text-white py-4 mt-8 font-bold rounded-full hover:bg-[#60b31d]'>Join Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/3f227e5f5e9bc715c59bfdaee0296de7cc3c2fb0/big-1d6b48efe060dbcaa44f35bf5f776541.jpg" className='h-[90vh] w-full' alt="" />
                        <div className="h-full absolute flex justify-between left-0 right-0  bg-gradient-to-r from-[#000000c0] to-[#00000000]">
                        <div className='h-full w-full flex flex-col items-start justify-center pl-8 md:pl-20'>
                                <p className='mt-8 text-white text-2xl md:text-6xl  font-semibold'>Learn Yoga <br /> With our skilled <br /> <span className='text-[#6fc826] font-extrabold text-7xl tracking-tight'>50+</span> Instructors</p>
                                <button className='px-8 bg-[#6fc826] text-white py-4 mt-8 font-bold rounded-full hover:bg-[#60b31d]'>Join Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center">
                        <img src="https://s1.1zoom.me/big0/660/Yoga_Three_3_Workout_Legs_Sitting_529463_1280x824.jpg" className='h-[90vh] w-full' alt="" />
                        <div className="h-full absolute flex justify-between left-0 right-0  bg-gradient-to-r from-[#000000c0] to-[#00000061]">
                        <div className='h-full w-full flex flex-col items-start justify-center pl-8 md:pl-20'>
                                <p className='mt-8 text-white text-2xl md:text-6xl  font-semibold'>Enroll Our Customized <br /> Classes made only <br /> For <span className='text-[#6fc826] font-extrabold text-7xl tracking-tight'>Kids</span></p>
                                <button className='px-8 bg-[#6fc826] text-white py-4 mt-8 font-bold rounded-full hover:bg-[#60b31d]'>Join Us</button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </section>
    )
}

export default Slider