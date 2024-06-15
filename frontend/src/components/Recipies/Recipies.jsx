import React from 'react'
import './Recipies.css'
import { menu_list } from '../../assets/assets'
const Recipies = ({category,setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our Recipies</h1>
            <p className='explore-menu-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum id assumenda suscipit consequatur non praesentium corrupti in fugit commodi illo!</p>
            <div className="explore-menu-list">
               {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )

               })} 
            </div>
            <hr/>

        </div>
    )
}

export default Recipies
