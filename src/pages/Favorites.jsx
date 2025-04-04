import { useContext } from 'react'
import { Context } from '../Context/Context' 
import ButtonShop from '../components/ButtonShop'

export default function Favorites() {
const { favorites, setFavorites, buyProducts } = useContext(Context)

function deleteProduct(id) {
  const foundId = favorites.find(el => el.id === id)
  const newFavorites = favorites.filter(el => {
    return el !== foundId
  })
  setFavorites(newFavorites)
}
  
  return (
    <div className='m-20 min-h-70'>
    {
      favorites.length === 0 && (<h4 className='text-2xl font-bold'>Your favorites list is empty</h4>
    ) 
    }
    {favorites.map(product => {      
      return (
        <div key={product.id} className='my-2 sm:m-20'>
          <div className='rounded-xl p-6 shadow-xl bg-white'>
            <div className='sm:flex justify-between'>
              <div className='flex justify-between'>
                <div className='flex gap-14 my-auto'>
                  <h2 className='font-bold line-clamp-2'>{product.title}</h2>
                  {/* <p>{product.description}</p> */}
                </div>
              </div>
              <div>
                <div className='sm:flex gap-6 items-center mt-6 sm:my-0'>
                 <ButtonShop title="Add to cart" onClick={() => buyProducts(product)}/>
                 <div className='flex justify-between m-4'>
                  <div className='flex'>
                    <img src={product.image} alt={product.title} style={{ maxWidth: "50px", height: "50px", marginLeft: "15px" }} />
                  </div>
                  
                  <button className='font-bold text-red-400 sm:ms-4' onClick={() => deleteProduct(product.id)}>X</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>   
      )  
    })}
   
    </div>  
  )
}