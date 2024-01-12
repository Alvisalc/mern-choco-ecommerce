import React from 'react';
import './NewCollections.css';
import Item from '../Item/Item';
import new_collections from '../new_collections';

export const NewCollections = () => {
  return (
    <div className="new-collections">
        <h2>New Collection</h2>
        <hr />
        <div className="collections">
            {new_collections.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.imageUrl} price={item.price}/>
            })}
        </div>
    </div>
  );
};

