
import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    
    const { data:images, loading } =  useFetchGifs( category );


    return (
    <>
        <h3 className="animate__pulse"> { category } </h3>
        {  loading && <p className="animate__fadeOutRight">Loading</p>  }

        <div className="card-grid ">
                {
                    images.map( img => (
                        <GifGridItem 
                        { ...img } 
                        key={img.id }
                        />
                    ))
                }
        </div>
        <footer> Created by @antuansabe</footer>
    </>    
    )
}
