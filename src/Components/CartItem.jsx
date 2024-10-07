import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';
import './CartItem.css'

function CartItem(props) {
  const item = props.item;
  const dispatch = useDispatch();

  const removeFromCart = ()=> {
    dispatch(remove(item.id))
    toast.success('cart item removed.')
  }
  // console.log('item is here', item)

  return (
    <div>

      <div className='cartItem-container'
            style={{display:"flex",
                      borderBottom:'2px solid black',marginBottom:"50px",
                      marginTop:"70px"
                     }}>

        <div className='cartItem-image'>
          <img style={{marginRight:"20px",marginBottom:"20px"}} src={item.image} alt="" />
        </div>

      <div style={{width:"100%"}}>

        <div style={{}}>
          <h1 style={{fontSize:"15px",fontWeight:"bold"}}>{item.title}</h1>
          <h1 style={{fontSize:"10px",margin:"10px 0px",color:"#9d9fa1",}} >{item.description}</h1>
        </div>
      
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px",}}>
        <div>
          <p style={{color:"#0ef202",fontWeight:"bold"}}>${item.price}</p>
        </div>

        <div style={{borderRadius:"50%",padding:"3px",cursor:"pointer",           
        }}
            onClick={removeFromCart}>
          <FcDeleteDatabase style={{boxShadow:"0px 0px 15px red",width:"20px",fontSize:"20px",
                          mixBlendMode:"multiply",backgroundColor:"#d97c7c",borderRadius:"50%"
            }}/>
        </div>
      </div>

      </div>

      </div>

    </div>
  )
}

export default CartItem