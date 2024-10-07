import React, { useEffect, useState } from 'react'
import { SiWelcometothejungle } from 'react-icons/si';
import Spinner from '../Components/Spinner';
import Product from '../Components/Product'
import './Home.css'

const Home = () => {
    const API_URL = 'https://fakestoreapi.com/products';
    const [loading, setLoading]= useState(false);
    const [posts, setPosts] = useState([])

    async function fetchProductData(){
        setLoading(true)
        try{
            let res = await fetch(API_URL);
            let data = await res.json();

            setPosts(data);

        }
        catch(error){
            console.log("api error", api);
            setPosts([])
        }
        setLoading(false);
    }

    useEffect( ()=> {
        fetchProductData()
    },[])


  return (
    <div style={{display:'flex',justifyContent:"center",}}>
        {
            loading ? 
            (<Spinner/>) :
            posts.length > 0 ?
            (<div className='home-product-container'
                style={{display:"flex",justifyContent:"center", flexWrap:"wrap",gap:"10px",
                            marginTop:"60px",padding:"10px 0px"
                            }}>
                {
                    posts.map( (post) => (
                        <Product key={post.id} post={post}/>
                    ))
                }

            </div>) :
            (<div>
                No Data Found
            </div>)
        }
    </div>
  )
}

export default Home