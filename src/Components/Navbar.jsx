import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  const {cart} = useSelector( (state)=> state);
  return (
    <div>
         <div className='nav-container'
              style={{display:"flex",alignItems:"center",
                      border:"2px solid green",height:"50px",
                      position:"fixed",width:'100vw',zIndex:"100"
         }}>
          <div>
            <NavLink to="/">
            <img className='nav-image'
            style={{width:"40px", mixBlendMode:"multiply"}} 
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUQERMWFRUTEBcTFhYWExgSFRYTFhIWGhcXExcYHSggGBomGxUVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NGhANGjclHyItMDc3LzA3NzAtNy03NzUtNTc3LzgyMTcrLTcrLSstKy03LTg1LjgvNy0tLS01MS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUDBgcCAf/EAEoQAAICAQEEBgYFBgwFBQAAAAECAAMRBAUSITEGEyJBUXEyUmGBgpEUIzNCchVVoaKx0wckQ1NzkpOUpLLBwhZUYnSDY2SztNH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAJxEBAAIBAwMCBwEAAAAAAAAAAAECAwQRMQUTcRIhMkFhgZGx8SL/2gAMAwEAAhEDEQA/AO4xEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERATFqtQtaNY7BVUZYnkAJlmudP9HbborEpBZg1bFRzZFsUsAO84Gcd+MSNp2iZhZipF8la2naJnl90fTPS2NuhmXwLKVB/1Hvl/XYGGVII8QczgNV2OHgcH2HwI7jL3Yu1bldVpd8k4AXtZ8l7+GeEyU1UzO1oe9qei1rX1Yrfl2SJX7L2tVePq2yV4MpG64P8A1KeI5Swm186REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQKra/R3T6n7aoFvXGUceTLgzXdL0ANNhtp1JBAzXvVqxVs8Q/IMpGRwAPHnN3iQnHWZ3mPdfTVZqUmlbTtPyanVSdTvBx1OsoO7vrxwcAgE8OsrZcEZ9veDLjYW0zcpWwbttTblieDeI8QRxB9sg7eU06irVjgr4093vP1LHyclf/J7I259TZXr09HhXf7aycK5/CT8iZNQ2KJ8VsjI759gIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIEPbGh6+iygnHWIVyRvY8DjI/aJruyjqb63peyoFWeqytqWbiCQe0LORBVh7GE26a5tAfR9Ylw9DUjq38BcincPxJvL5osDDsjUapWs0qinOn3VG8z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J5AAcczhG1tn0vdY9DFamcsi7ijCnux3DOcezE6T0/1bHRWhPFCfwh1zOadH9fphp2F5PWKuByyDwznI4cd7vHpCZdVT1VjZ6/SM/ZyWn6cfdK2Noa6t/UOQ4RcBCFGSRzA92PinXuiupazSUu/pFMHu9FiAceQnEej1bam0nmigce4gY4j4t7HlOrbO1rKqoBhVAUAcgBJafF6K+/Mqup6vv5p24ht0Slr1xmZdUZoeatIlcNQZ8OoMCynyVTasyNdtBhygU3T3WgXU02KDW9bcwD22OBx92PinNdTsVVdlFmQGIBCqQR5zfOk9Z1C7rAErndJ7s93lwHynPtia2tL+q1Xoq3I8yOGRx5nIb5iY9Th9X+oe30nXdrfHbj3/AI3b+C+vT03OrHN1gxWSoA3BxZQR94n5hZ1GcATVq20KhpScLauMd3bTGfDkxx3Cdxq1mZdgrtjiGHqOTuam1vH6TomJLczLLmIiIgIiICIiAiIgIiICIiB4dZFu05MmxA1vX7KdgR3EYIIyCDND138GBd95d0DPIpvY8jmdgiBoew+ijUJuKPM44k+2X9OyyOYl7ECrXQTIujMsIgQRpTB0pk6IFa2iMxPs4mW8QNb1Gx2PKajt/wDg+a9t8boJ55XIPtI8fbOpRA5p0b6CNpjvdktyBC4xnngf6zc9LoWHOXEQMFdWJmE+xAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k=" 
            alt="nav-img" />
            <span className='nav-shopping-text'
            style={{position:"absolute",top:"15px",fontWeight:"bold",marginLeft:"5px",fontSize:"20px"}}>SHOPPING</span>
            </NavLink>
            </div>
            
            <div 
              style={{display:"flex", columnGap:"20px",listStyle:"none"}}>
                <NavLink to="/">
                <p className='nav-home-text'
                style={{fontSize:"20px",fontWeight:"bold"}}>Home</p>
                </NavLink>

                <NavLink to="/cart">
                <div style={{position:"relative",}}>
                    {
                      cart.length > 0 ? (
                        <div>
                          <FaShoppingCart style={{fontSize:"20px"}} className='nav-cart-icon'/>
                        <span className='nav-cart-count'
                        style={{position:"absolute",top:"-15px",color:"blue",
                          borderRadius:"50%",padding:"3px",fontWeight:"bold",
                          fontSize:"15px",left:"5px",zIndex:"-100",
                        }}>
                          {cart.length}
                          </span> 
                          </div>):

                          (
                            <div>
                              <FaShoppingCart style={{fontSize:"20px"}} className='nav-cart-empty-icon'/>
                            </div>
                          )
                    }
                    </div>
                </NavLink>
            </div>
            
         </div>
    </div>
  )
}

export default Navbar