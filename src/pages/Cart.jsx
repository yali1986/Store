import { useContext } from 'react'
import { Context } from '../Context/Context'

export default function Cart() {
  const { cart, setCart } = useContext(Context)


  function incrementQuantity(id) {
    setCart(cart.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    ))
  }
  function decrementQuantity(id) {
    setCart(cart.map(product => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 }
      } else if (product.id === id && product.quantity === 1) {
        return null
      }
      return product
    }).filter(product => product !== null))
  }
  function deleteProduct(id) {
    const foundId = cart.find(el => el.id === id)
    const newCart = cart.filter(el => {
      return el !== foundId
    })
    setCart(newCart)
  }

  const totaltoPay = cart.reduce((acc, product) => acc + product.quantity * product.price, 0)

  return (    
    <div className='m-20 min-h-70'>
     {
      cart.length === 0 && (<h4 className='text-2xl font-bold'>Your cart is empty</h4>
    ) 
    }
    {cart.map(product => {
      const totalPriceProduct = product.quantity * product.price
      return (
        <div key={product.id} className='mt-14 mx-20'>
          <div className='rounded-xl p-6 shadow-xl bg-white'>
            <div className='flex justify-between'>
              <div className='flex justify-between'>
                <div className='flex gap-14'>
                  <h2 className='font-bold'>{product.title}</h2>
                  {/* <p>{product.description}</p> */}
                </div>
              </div>
              <div>
                <div className='flex gap-6'>
                  <div className='flex'>
                    <img src={product.image} alt={product.title} style={{ maxWidth: "50px", height: "50px", marginLeft: "15px" }} />
                  </div>
                  <h3 className='font-semibol me-10'>{product.price.toFixed(2).replace('.', ',')} €</h3>
                  <div><button onClick={() => decrementQuantity(product.id)}>-</button></div>

                  <p>{product.quantity}</p>
                  <div><button onClick={() => incrementQuantity(product.id)}>+</button></div>
                  <p>{totalPriceProduct.toFixed(2).replace('.', ',')}€</p>
                  <div>
                    <button onClick={() => deleteProduct(product.id)} className='font-bold text-red-400'>X</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>   
      )  
    })}


    {cart.length !== 0 && (
          <div className='flex justify-end me-28 mt-10'>
            <p className='text-lg'>
              Total to pay: <span className='font-bold'>{totaltoPay.toFixed(2).replace('.', ',')}€</span>
            </p>
          </div>
        )}
    </div>    
  )
}
