import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import {add, remove} from '../redux/Slices/CartSlice'
import './Product.css'

function Product({post}) {
    const {cart} = useSelector( (state)=> state);
    const dispatch = useDispatch();

// console.log('printing product cart',cart)

    const addToCart = ()=>{
        dispatch(add(post));
        toast.success('Item added successfully...')
        
    }
    const removeFromCart = ()=> {
        dispatch(remove(post.id))
        toast.error('Item Removed from Cart')
    }
    
  return (
    <div className='product-container'
            style={{display:"flex",
                    flexDirection:"column",justifyContent:"space-between",
                    borderRadius:"8px",height:"300px"
                    }}>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

        <div>
            <p style={{fontWeight:"bold", fontSize:"20px",margin:'5px',padding:"5px",
                        width:'200px',display:"flex",justifyContent:"center"
                        }}>
                {post.title.split("").slice(0,13).join("")+"..."}
            </p>
        </div>

        <div style={{}}>
            <p style={{fontSize:"8px",color:"#9d9fa1",
                            width:"130px",padding:"10px 0px"
            }}>
                {
                post.description.split(' ').slice(0,10).join(' ')+"..."
                }
            </p>
        </div>

        <div>
            <img style={{width:"150px",mixBlendMode:"multiply",height:"150px"}} src={`${post.image}`} alt="" />
        </div>

    </div>

    <div style={{display:"flex",justifyContent:"space-between",margin:"10px",alignItems:"center"}}>
        <div>
            <p style={{color:"#0ef202",fontWeight:"bolder",}}>${post.price}</p>
        </div>

           {
            cart.some( (p) => p.id === post.id) ?
            (<button className='product-add-remove-btns'
                        style={{fontWeight:"bold",borderRadius:"20px",padding:"5px 10px",cursor:"pointer"}}
                    onClick={removeFromCart}>
                Remove Item 
            </button>):

            (<button className='product-add-remove-btns'
                        style={{fontWeight:"bold",borderRadius:"20px",padding:"5px 10px",cursor:"pointer"}}
                    onClick={addToCart}>
                Add to Cart 
            </button>)
           }
    </div>
      
    </div>
  )
}

export default Product