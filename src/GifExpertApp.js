import React, { useState } from 'react'; 
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()  => {

   // const categories = [ 'One Punch', 'Smurai X', 'Dragon Ball'];
   // En lugar de usar una constante normal, usaremos un Hook ( useState)
    const [categories, setCategories] = useState([ 'One Punch'])
    

    return (
        <>  
            
            <h2>GifExpertApp</h2>
            <h5>La forma mas rapida de encontrar Gifs!</h5>
            <AddCategory setCategories = { setCategories }  />
            <hr />

        
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key= { category }
                        category= { category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;

