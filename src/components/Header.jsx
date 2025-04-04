import headerImage from '../assets/header2.webp'
import headerImage2 from '../assets/header3.webp'

import './header.module.css'
import styles from './header.module.css'

export default function Header() {
  return (
    <div className='bg-[#01161B] flex object-left justify-between w-auto h-[600px]'>  
    <img src={headerImage} alt="Bag shop" className='w-auto mt-20 lg:ms-6 2xl:ms-40 xl:ms-20 hidden sm:block scale-75'/>
   
    <div className='flex justify-center items-center sm:-ms-96  lg:me-80 2xl:me-0 md:min-w-md'>
        <h1 className={`text-white text-4xl rounded px-2 py-3 sm:bg-[#01161B] animate__animated animate__jackInTheBox ${styles.title}  mx-4 xl:ms-18`}>My Store is looking for a name</h1>
      </div>
 
    <img src={headerImage2} alt="Bag shop" className='hidden 2xl:block w-auto rotate-120 scale-75 2xl:me-60 mt-40'/>
    </div>
  )
}