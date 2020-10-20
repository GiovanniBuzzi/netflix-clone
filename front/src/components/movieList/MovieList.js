import React, { useState } from 'react'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './movieList.css'
import MovieCard from '../movieCard/MovieCard'

export default ({title, items}) => {

    const [scrollX, setScrollX]= useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 300;
        if(window.innerWidth - listW > x)
        {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return(
        <div className="movieListBox">
            <h2>{title}</h2>

            <div className="movieListLeft" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:50}}/>
            </div>

            <div className="movieListRight" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize:50}}/>  
            </div>
            
            <div className="listArea">
                <div className="list" style={{
                    marginLeft: scrollX,
                    width: items.results.length *300
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="item">
                            <MovieCard item={item}/>
                        </div>
                    ))}   
                </div>             
            </div>
        </div>
    );
}