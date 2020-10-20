import React, { useState } from 'react'

import './movieCard.css'

import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MovieCard = ({item}) => {

    const [hover, setHover] = useState(false);

    function handleCard(){
        setHover(true);
    }

    function leaveCard(){
        setHover(false);
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
    console.log(title)    

    return(
        <div className="movieCard" onMouseOver={handleCard} onMouseLeave={leaveCard}>
            <h3>{item.title ? (item.title.length > 28 ? item.title.substring(0,28) + '...' : item.title) : (item.name.length > 28 ? item.name.substring(0,28) + '...' : item.name)}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}/>
            {hover?
            <div className="more">
                <div className="seeMore">
                    <div className="icons">
                        <PlayArrowIcon style={{ fontSize: 40, borderRadius:20, backgroundColor:'white', opacity:0.9,color: '#131313', boxShadow: '5px 5px 5px black', padding: 8}}/>
                        <AddIcon style={{ fontSize: 40, border: "2px solid white", borderRadius:20, color: 'white', opacity:0.9, boxShadow: '5px 5px 5px black', padding: 8}} />
                        <ThumbUpAltIcon style={{ fontSize: 40, border: "2px solid white", borderRadius:20, color: 'white', opacity:0.9, boxShadow: '5px 5px 5px black', padding: 8}} />
                        <ThumbDownIcon style={{ fontSize: 40, border: "2px solid white", borderRadius:20, color: 'white', opacity:0.9, boxShadow: '5px 5px 5px black', padding: 8}} />
                    </div>
                    <div className="icons">
                        <ExpandMoreIcon style={{ fontSize: 40, border: "2px solid white", borderRadius:20, color: 'white', opacity:0.9, boxShadow: '5px 5px 5px black', padding: 8 }} />
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