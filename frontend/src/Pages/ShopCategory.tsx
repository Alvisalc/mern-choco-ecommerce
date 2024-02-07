import React, { useContext, useState, useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'


export const ShopCategory = (props) => {

    const {all_product} = useContext(ShopContext);
    const [categoryName, setCategoryName] = useState(props.name);

    useEffect(() => {
        // Update the category name when props.name changes
        setCategoryName(props.name);
    }, [props.name]);

    return (
        <div className="shop-category">
                <h1>{categoryName}</h1>
                <div className="shopcategory-indexSort">
                    <p>
                        <span>Showing 1-12</span> out of 36 products
                    </p>
                </div>
                <div className="shopcategory-products">
                    {all_product.map((item, i)=>{
                        if(props.category===item.category){
                            return <Item key={i} id={item.id} name={item.name} image={item.imageUrl} price={item.price}/>
                        }
                        else{
                            return null;
                        }
                    })}
                </div>
            </div>
    )
}
