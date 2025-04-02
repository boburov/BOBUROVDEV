import Aos from 'aos'
import "aos/dist/aos.css";
import { scrollPage } from '../functions/scrollUp';

const Header = () => {

    Aos.init()

    


    return (
        <div className='border-b-2'>
            <div className="container py-6 flex items-center justify-between">
                <p data-aos="fade-right"
                    data-aos-duration="1000" className='montbold text-2xl leading-0 tracking-tighter'>BOBUROV.DEV</p>
                <ul data-aos="fade-left"
                    data-aos-duration="700" className='flex items-center gap-5 montmed'>
                    <li onClick={()=>{scrollPage(0)}} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>home</li>
                    <li onClick={()=>{scrollPage(700)}} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>about me</li>
                    <li onClick={()=>{scrollPage(1500)}} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>projects</li>
                    <li onClick={()=>{scrollPage(2850)}} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>education&skill</li>
                    <li onClick={()=>{scrollPage(3800)}} className='hover:cursor-pointer flexing-line relative py-1 hover:opacity-60'>contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header