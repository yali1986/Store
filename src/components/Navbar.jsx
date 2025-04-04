import cartIcon from "../assets/cart.png"
import blackStart from "../assets/blackStart.png"
import { Link, useLocation } from "react-router-dom"
import { useContext } from 'react'
import { Context } from '../Context/Context'
import styles from './header.module.css'




export default function Navbar() {
    const {cart, favorites} = useContext(Context)
    const location = useLocation()
    const myStore = <h2 className={`text-2xl mb-6 font-semibold ms-2 sm:ms-18 mt-6 ${styles.title}`}>My Store</h2>
    const cartTotal = cart.reduce ((acc, el) => 
        acc + el.quantity, 0 
    )

    return (
        <div className="flex justify-between bg-white fixed top-0 left-0 w-full z-10 shadow-md">

            {location.pathname !== "/" ? <Link to="/">{myStore}</Link> :  myStore }

            <div>
                <div className="flex me-2 mt-6">
                    <div className="flex">
                        <Link to="/favorites">
                            <img src={blackStart} className="w-8" />
                        </Link>

                        <div className="bg-red-400 flex justify-center rounded-full w-5 h-5 text-center me-8">
                            <p className="text-center text-sm">{favorites.length}</p>
                        </div>
                    </div>

                    <div className="flex flex-row xl:me-20">
                        <Link to="/cart">
                            <img src={cartIcon} className="w-8 me-" />
                        </Link>

                        <div className="bg-red-400 flex justify-center rounded-full w-5 h-5 text-center">
                            <p className="text-center text-sm">{cartTotal}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}