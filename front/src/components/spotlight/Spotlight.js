import React from 'react'

import './spotlight.css'

const Spotlight = (item) => {

    let date = new Date(item.item.first_air_date);

    return(
        
        <section className="spotlightBox" style={{backgroundSize: 'cover',backgroudPosition: 'center',backgroundImage: `url(https://image.tmdb.org/t/p/original${item.item.backdrop_path})`}}>

            <div className="spotBoxV">
                <div className="spotBoxH">
                    <div className='spotName'>{item.item.name}</div>
                    <div className='spotInfo'>
                        <div className="spotPoints">{item.item.vote_average} Pontos</div>
                        <div className="spotYear">{date.getFullYear()}</div>
                        <div className="spotSeasons">{item.item.number_of_seasons} temporada{item.item.number_of_season !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="spotDesc">{item.item.overview}</div>
                    <div className="spotButtons">
                        <a href={`/watch/${item.item.id}`} className="watch">► Assistir</a>
                        <a href={`/list/add/${item.item.id}`} className="mylist">+ Minha Lista</a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Spotlight;