import React, { useState } from 'react'
import { IMovieDetails, ImovieData } from '../types/movieData.types'
import imdb from "../public/photos/imdb.png";
import TrailerButton from '../elements/trailerButton';
import { IoPlay } from 'react-icons/io5';


const MovieCardElement = ({data, type} : {data : ImovieData, type : string}) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-full sm:w-5/6 md:1/3 lg:w-[46%] xl:w-[30%] h-[370px] rounded-sm overflow-hidden text-white flex flex-col gap-1 font-oswalid text-2xl'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
        <div className={`w-full h-[80%] overflow-hidden relative`}>
        {isHovered && <div className='w-full h-full bg-black bg-opacity-50 flex items-center justify-center duration-700 transition-all absolute left-0 top-0 z-20 pointer-events-auto'>
        {type !== '' && <TrailerButton type={type} data={data} size='sm'/>}
        </div>}
        <img className={`w-full h-full rounded-md cursor-pointer transition-all duration-1000 ${isHovered ? "scale-110" : ""}`} src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" />
        </div>
        <div className='w-full flex items-center pt-2 gap-3'>
        <h3 className='text-white font-oswalid text-2xl '
            style={{ textShadow: "1px 1px 1px black" }}
        >{data?.title}</h3>
        <img className='w-10 h-4' src={imdb} alt="" />
        <h3 className='text-xl'>{data?.vote_average.toFixed(1)}</h3>
        <h3 className='ml-5'>({data?.original_language})</h3>
        </div>
      
        
    </div>
  )
}

export default MovieCardElement