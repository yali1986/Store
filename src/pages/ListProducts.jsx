import { useState, useEffect, useContext } from 'react'
import { Context } from '../Context/Context'
import ButtonShop from '../components/ButtonShop'
import whiteStart from "../assets/whiteStart.png"
import blackStart from "../assets/blackStart.png"

export default function ListProducts() {

const {favorites, setFavorites, buyProducts} = useContext(Context)
const [info, setInfo] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(()=> {
    async function fetchProducts() {
        try {
           const res = await fetch(`https://fakestoreapi.com/products`)
           if (!res.ok) throw new Error('Error al obtener productos')
           const data = await res.json()
           setInfo(data)
        } catch (error){
            console.error("error", error)
            setError(error.message)                 
            } finally {
               setLoading(false)
            }
    }
    fetchProducts()
}, [])

if (loading) return <span>Loading...</span>
if (!info) return <span>Error: {error}</span>
if (!info || info.length === 0) return <span>No products found</span> // Manejar el caso cuando no hay productos



//favorites, setFavorites
const addFavorites = (product) => {

 if (favorites.some(fav => fav.id === product.id)) {
    setFavorites(favorites.filter(fav => fav.id !== product.id))
 } else {
    setFavorites([...favorites, product])
 } 
    
}


return (        
    <div className='my-24 justify-center flex flex-wrap gap-8 mx-11'>
    {info.map((product) => (
        <div key={product.id} className='flex flex-col justify-center rounded-xl p-6 shadow-xl bg-white'>
<div className='flex'>
        <div className='w-40 '>
            <h2 className='font-bold h-24 mt-8 line-clamp-4'>{product.title}</h2>
            <h3 className='font-semibold mt-8 text-xl bg-gray-200 rounded'>{product.price.toFixed(2).replace('.', ',')} €</h3>
            {/* <p>{product.description}</p> */}
        </div>
        <div className='flex justify-center items-center'>
            <img src={product.image} alt={product.title} style={{width: "150px", maxHeight:"200px", marginLeft: "25px"}}/>
            </div>
            </div>
            <div className='flex items-center justify-center mt-6'>           
            <ButtonShop title="Add to cart" onClick={() => buyProducts(product)}/>
           
        <button onClick={() => addFavorites(product)}>     
        <img 
          src={favorites.some(favProduct => favProduct.id === product.id) ? blackStart :  whiteStart} className="w-9 h-9 me-12" />   
        </button>
        
        </div>
        </div>
    ))}
</div>  
)
}