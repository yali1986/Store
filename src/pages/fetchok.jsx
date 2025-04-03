
//Con use y suspense:
import { use, Suspense } from 'react'
import ButtonShop from '../components/ButtonShop'

//promesa
const fetchApi = fetch(`https://fakestoreapi.com/products`)
.then(res=>res.json())
.then(data=> {
    return data
})



function Info(){
    const {cart, setCart} = useContext(Context)
    const info = use(fetchApi) //`use` para leer la promesa

    return (        
        <div className='mt-20 justify-center flex flex-wrap gap-12 mx-20'>
        {info.map((product) => (
            <div key={product.id} className='flex flex-col justify-center rounded-xl p-6 shadow-xl bg-white'>
<div className='flex'>

            <div className='w-40 '>
                <h2 className='font-bold'>{product.title}</h2>
                <h3 className='font-semibold'>{product.price.toFixed(2).replace('.', ',')} €</h3>
                {/* <p>{product.description}</p> */}
            </div>
            <div className='flex justify-center items-center'>
                <img src={product.image}  style={{maxWidth: "150px", height:"auto", marginLeft: "25px"}}/>
                </div>
                </div>
                <div className='flex justify-end'>
                <ButtonShop title="Add to cart"/>
            <ButtonShop title="Add to favorites" />
            </div>
            </div>
        ))}
    </div>  
    )
}

export default function ListProducts() {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <Info />
        </Suspense>
    )
  
}

