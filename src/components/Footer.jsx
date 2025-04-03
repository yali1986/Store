import styles from './header.module.css'

export default function Footer() {
  return (
    <div className="h-90 bg-black flex flex-col items-center justify-center">
   
        <div className="flex gap-6 my-4">
        <h5 className={`text-white text-3xl ${styles.title}`}>Yalina Gómez</h5>
        <h5 className="text-white text-3xl">||</h5>
        <h5 className={`text-white text-3xl ${styles.title}`}>Fronted web developer</h5>
        </div>
        <h6 className="text-white text-xl mt-4">Contacto: yalinita1985@gmail.com</h6>
     
    </div>
  )
}