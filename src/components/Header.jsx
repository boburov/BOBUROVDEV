import Aos from 'aos'
import "aos/dist/aos.css";
import { scrollPage } from '../functions/scrollUp';
import hambergermenu from '../assets/icons/menu.svg'
import { useState } from 'react';

const Header = () => {
    const [modal, setModal] = useState(true)

    Aos.init()

    const ScroollDown = (num) => {
        scrollPage(num)
        setModal(modal === true ? false : true


        )
    }


    return (
        <div className='border-b-2'>
            <div className="container py-5 flex items-center justify-between max-md:py-2">
                <p data-aos="fade-right"
                    data-aos-duration="1000" className='montbold text-2xl leading-0 tracking-tighter max-md:text-xl'>BOBUROV.DEV</p>
                <img src={hambergermenu} onClick={() => setModal(!modal)} className='w-16 p-3 bg-blend-color-burn ml-36 hidden max-md:block cursor-pointer' alt="" />
                <ul data-aos="fade-left"
                    data-aos-duration="700" className={`flex items-center gap-5 montmed max-md:absolute max-md:w-full max-md:flex-col max-md:right-0 max-md:top-20 max-md:bg-[#d4d4d4] max-md:px-5 max-md:h-full max-md:z-10 max-md:items-start max-md:text-sm overflow-hidden max-md:${modal ? "block" : "hidden"}`}>
                    <li onClick={() => { ScroollDown(0) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>home</li>
                    <li onClick={() => { ScroollDown(700) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>about me</li>
                    <li onClick={() => { ScroollDown(1500) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>projects</li>
                    <li onClick={() => { ScroollDown(2850) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>education&skill</li>
                    <li onClick={() => { ScroollDown(3800) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header