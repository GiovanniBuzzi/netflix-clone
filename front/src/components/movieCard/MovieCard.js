import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './movieCard.css';

import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MousePosition from '../mousePosition/mousePosition';

const MovieCard = ({item}) => {

    const [hover, setHover] = useState(false);
    const [mouse, setMouse] = useState(false);

    const { x,y } = MousePosition();

    const hasMovedCursor = typeof x === "number" && typeof y === "number";

    function handleCard(){
        setHover(true);
    }

    function leaveCard(){
        setHover(false);
    }

    function mouseCard(){
        setMouse(true);
    }

    let date;
    function date1(){
        if(item.first_air_date != null){
            date = new Date(item.first_air_date);
        }else{
            date = new Date(item.release_date);
        }

        return date.getFullYear();
    }

    let title;
    if(item.title){
        if(item.title.length > 200){
            title = item.title.substring(0, 200)  + '...';
        }
    }else{
        if(item.name.length > 200){
            title = item.name.substring(0, 200)  + '...';
        }
    }

    return(
        <div className={x < window.innerWidth/4 ? 'movieCardL' : x > window.innerWidth*3/4? 'movieCardR' : 'movieCard'}
            onMouseOver={mouseCard} 
            onMouseEnter={handleCard} 
            onMouseLeave={leaveCard}
            style={mouse? {marginTop:'-180px'}: {}
            }>
            <h3>{item.title ? (item.title.length > 28 ? item.title.substring(0,28) + '...' : item.title) : (item.name.length > 28 ? item.name.substring(0,28) + '...' : item.name)}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}/>
            {hover?
            <div className="more">
                <div className="seeMore">
                    <div className="icons">
                        <div className='icon'><PlayArrowIcon/> </div>
                        <div className='icon'><AddIcon/></div>
                        <div className='icon'><ThumbUpAltIcon/></div>
                        <div className='icon'><ThumbDownIcon/></div>
                    </div>
                    <div className="icons">
                        <Link to={`/home/:jvb=${item.id}`}><ExpandMoreIcon/></Link>
                    </div>
                </div>
                <div className="features">
                    <div className="spotPoints"><strong>{item.vote_average}</strong> Pontos</div>
                    <div className="spotYear">{date1()}</div>
                </div>
            </div> : <div></div>
            }
        </div>
    )
}
export default MovieCard;