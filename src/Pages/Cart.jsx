import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import './Cart.css'

function Cart() {
  const {cart} = useSelector( (state)=> state);
    const [totalAmount, setTotalAmount] = useState(0)

// console.log('printing cart ', cart)


    useEffect( ()=>{
      setTotalAmount( cart.reduce( (acc, curr)=> acc + curr.price, 0));

    },[cart])

  return (
    <div style={{margingTop:'60px',width:"100vw",height:"auto",display:"flex",justifyContent:"center",}}>
    {
      cart.length > 0 ?
      (<div className='cart-cartItem'
          style={{display:"flex",justifyContent:"center"}}>

            <div>
              {
                cart.map( (item)=> {
                  return <CartItem item={item} key={item.id}/>

                }
                 )
              }
            </div>

            <div className='cart-summary' 
                style={{display:"flex",flexDirection:"column",height:"80vh",justifyContent:"space-between",
                        paddingTop:"50px",position:"sticky",top:"60px",
            }}>
              <div className='cart-length-summary'>
                <div style={{fontWeight:"bold",color:"green",textTransform:"uppercase"}}>Your Cart</div>
                <div style={{textTransform:"uppercase",color:"green",fontSize:"30px",fontWeight:"bold"}}
                >
                  Summary
                </div>
                <p style={{marginTop:"10px",fontWeight:"bold"}}>
                              Total Item:
                  <span style={{fontWeight:"bold",color:"green",fontSize:"20px"}}> {cart.length}</span>
                </p>
              </div>

                  <div>
                    <p className='cart-totalAmount' style={{fontWeight:"bold"}}>Total Amount: ${totalAmount}</p>
                    <button style={{width:"100%",padding:"10px 0px",marginTop:"10px",backgroundColor:"green",
                                    color:"white",fontWeight:"bold",border:"none",borderRadius:"5px",fontSize:"15px",
                                    cursor:"pointer"
                    }}>
                      CheckOut Now
                    </button>
                  </div>

            </div>

      </div>) :

      (<div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}}>
        <h1>Cart Empty</h1>
        <NavLink to="/">
          <button style={{border:"2px solid black",fontSize:"20px",borderRadius:"10px",padding:"5px 10px",
                          marginTop:"10px",cursor:"pointer",backgroundColor:"grey",color:"whitesmoke",fontWeight:"bold"
          }}>
            Shop Now
          </button>
        </NavLink>
      </div>)
    }    
    </div>
  )
}

export default Cart