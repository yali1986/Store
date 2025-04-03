import headerImage from '../assets/header2.webp'
import './header.module.css'
import styles from './header.module.css'

export default function Header() {
  return (
    <div className='bg-[#01161B] flex object-left justify-between'>  
    <img src={headerImage} alt="" className='w-auto h-[500px] mt-20 ms-20 md:ms-40 xl:ms-70'/>
   
    <div className='flex justify-center items-center -ms-96'>
        <h1 className={`text-black sm:text-white text-4xl me-8 bg-white rounded px-2 py-3 sm:bg-[#01161B] animate__animated animate__jackInTheBox ${styles.title}`}>My Store is looking for a name</h1>
      </div>
 
    <img src={headerImage} alt="Bag shop" className='hidden lg:block w-auto h-[500px] mt-20 -me-32'/>
    </div>
  )
}