import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';

import "./home.css"

import tmdb from '../../services/api/tmdb/tmdb'

import Header from '../../components/header/Header'
import Spotlight from '../../components/spotlight/Spotlight'
import MovieList from '../../components/movieList/MovieList'
import ItemFeatures from '../../components/itemFeatures/ItemFeatures';


const Home = () => {

    const[movieList, setMovieList] = useState([]);
    const[featuredData, setFeaturedData] = useState(null);
    const[black, setBlack] = useState(false);

    useEffect (() => {
        const loadAll = async () => {
            let list = await tmdb.getHomeList();
            setMovieList(list);

            let originals = list.filter(i=> i.slug === 'originais');
            let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randonChosen];
            let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);

        }
        loadAll();
    }, []);

    useEffect(()=>{
        const scrollListener = () =>{
            if(window.scrollY > 10){
              setBlack(true);
            }else{
              setBlack(false);
            }
        }
        window.addEventListener('scroll', scrollListener);
        return () =>{
          window.removeEventListener('scroll', scrollListener);
        }
      }, []);
    let {jvb} = useParams();
    return(
        <div className="homeBox">
            {jvb ? <ItemFeatures position={window.pageYOffset}></ItemFeatures> : ''}
            <Header black={black}/>
            {featuredData &&
                <Spotlight item={featuredData}/>
            }
            <div className="cardList">
                {movieList.map((item, key)=>(
                    <div>
                        <MovieList key={key} title={item.title} items={item.items}/>
                    </div>
                ))}
            </div>

        </div>
        
    )
}

export default Home;