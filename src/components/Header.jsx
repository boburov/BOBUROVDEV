import Aos from 'aos'
import "aos/dist/aos.css";
import { scrollPage } from '../functions/scrollUp';
import hambergermenu from '../assets/icons/menu.svg'
import { useState } from 'react';

const Header = () => {
    const [modal, setModal] = useState(true)

    Aos.init()




    return (
        <div className='border-b-2'>
            <div className="container py-6 flex items-center justify-between">
                <p data-aos="fade-right"
                    data-aos-duration="1000" className='montbold text-2xl leading-0 tracking-tighter max-md:text-xl'>BOBUROV.DEV</p>
                <img src={hambergermenu} onClick={() => setModal(!modal)} className='w-16 p-3 bg-blend-color-burn ml-36 hidden max-md:block cursor-pointer' alt="" />
                <ul data-aos="fade-left"
                    data-aos-duration="700" className={`flex items-center gap-5 montmed max-md:fixed max-md:w-0 max-md:${modal ? "" : "w-0"} max-md:flex-col max-md:right-40 max-md:top-0 max-md:bg-white max-md:px-5 max-md:h-full max-md:z-10 max-md:items-start max-md:text-sm overflow-hidden`}>
                    <li onClick={() => { scrollPage(0) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>home</li>
                    <li onClick={() => { scrollPage(700) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>about me</li>
                    <li onClick={() => { scrollPage(1500) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>projects</li>
                    <li onClick={() => { scrollPage(2850) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>education&skill</li>
                    <li onClick={() => { scrollPage(3800) }} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header