import React from 'react'
import Neurose from "../assets/Neurose.jpg"

import { FaYoutube } from "react-icons/fa";
import { ImSoundcloud2 } from "react-icons/im";
import { FaSpotify } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCompactDisc } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
function Dadin() {
  return (
    <section className='bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r  min-h-screen pt-20 p-2'>
      <main className='bg-black/40 mx-auto min-h-96 max-w-[350px] p-5 rounded-3xl'>

        <div className='mb-7 flex items-center justify-between p-4 shadow-xl bg-zinc-800 rounded-2xl'>
          
         <div className='flex items-center  gap-2 '>

          <div className='w-16 h-16 rounded-xl bg-orange-700 border-4 border-inherit items-center flex justify-center '>
           <FaRegUser size={40} /> 
          </div>

          <div>
          <h1 className='font-bold text-white text-2xl -tracking-tighter '>Dadin</h1>
          <p className=' font-semibold text-slate-400'>@Dadintrem</p>
          </div>

          

        </div>
        <div className='flex w-16 h-16 rounded-full bg-orange-700 border-4 border-inherit items-center flex justify-center  '>
          <FaCompactDisc size={40} />
        </div>

        </div>

        <div className='mb-4 flex items-center justify-between  py-6  shadow-xl bg-zinc-800 rounded-2xl'>
          
         <div className='flex items-center  gap-2 '>

          

          <div className='flex flex-col items-center justify-center p-2'>
          <h1 className='font-semibold text-white text-lg '>🔥Escutem <span className=' text-red-500 text-bold'>NEUROSE NA MENTE🔥</span></h1>
          <p className=' font-semibold text-slate-400'>na sua plataforma peferida</p>
          </div>

          

        </div>
        </div>


        <div className='flex gap-3 mb-7'>
        
          <div className='w-36  h-42 p-3  rounded-2xl shadow-xl  bg-zinc-800 '>
            <h1 className='text-white font-bold text-xl'>Último<br/>Lançamento</h1>
            <p className='text-slate-300 mb-2'>Neurose na mente</p>
            <img src={Neurose} className='rounded-xl shadow-xl  border-inherit border-4' />

          </div>
          
          <div className='w-40  h-42  rounded-2xl py-5 '>
            <div className=' hover:scale-105 mb-4 w-20 rounded-lg h-20 p-2 flex items-center justify-center bg-zinc-800 '><a href="https://www.youtube.com/channel/UCSaQu1GGW9AIiG9BbyethxA"><FaYoutube className='text-slate-300' size={70} /></a></div>
            <div className=' hover:scale-105 w-20 rounded-lg h-20 p-2 flex items-center justify-center bg-zinc-800 '><a href="https://www.instagram.com/dadintrem_/?hl=en"><FaInstagramSquare className='text-slate-300' size={70} /></a></div>
            
          </div>

          <div className=' w-40  h-42   rounded-2xl py-5 '>
            <div className=' hover:scale-105 mb-4 w-20 rounded-lg h-20 p-2 flex items-center justify-center bg-zinc-800 '><a href="https://open.spotify.com/intl-pt/artist/6HepGyqSn60I0yvcpLKgjl?si=uhTWURiCTtmyUP53H60XiQ"><FaSpotify className='text-slate-300' size={70} /></a></div>
            <div className='hover:scale-105 w-20 rounded-lg h-20 p-2 flex items-center justify-center bg-zinc-800 '><a href="https://soundcloud.com/beach-street-617479712"><ImSoundcloud2 className='text-slate-300' size={70} /></a></div>
            
          </div>
          

        </div>

        <div className='mb-4 flex items-center justify-between  py-6  shadow-xl bg-red-600 rounded-2xl'>
          
          <div className='flex items-center  gap-2 '>
 
           
 
           <div className='flex flex-col items-center justify-start p-2 mb-5'>
           <h1 className='font-semibold text-white text-lg flex gap-2 '><FaCalendarAlt className='text-zinc-900' size={30}/> <span className=' text-white text-2xl font-bold text-bold'>Pré-save Próximo</span></h1>
           
           </div>
           
         </div>
         </div>

           <h1 className='font-semibold text-white text-center mt-10 mb-7'>o que a galera ta curtindo...</h1>
          

           <div className='mb-4 flex gap-2 items-center   shadow-xl border-4 hover:bg-green-800 bg-zinc-800 rounded-2xl'>  
         <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/0m5VBB78UcQjIHuV4y25Lq?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Track"
      ></iframe>
           
         </div>

         <div className='mb-4 flex gap-2 items-center   shadow-xl border-4 hover:bg-green-800 bg-zinc-800 rounded-2xl'>  
         <iframe
        style={{ borderRadius: "12px" }}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1687139478&color=%23805b6e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Track"
      ></iframe>
           
         </div>


         <div className='mb-4 flex gap-2 items-center   shadow-xl border-4 hover:bg-green-800 bg-zinc-800 rounded-2xl'>  
         <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/0BxzELqdycRMVLJMr24wMY?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Track"
      ></iframe>
           
         </div>



         <div className='mb-4 flex gap-2 items-center   shadow-xl border-4 hover:bg-green-800 bg-zinc-800 rounded-2xl'>  
         <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/0UK1bAuUcPIdLAk90pUupE?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Track"
      ></iframe>
           
         </div>
          


         <div className='mb-4 flex gap-2 items-center   shadow-xl border-4 hover:bg-green-800 bg-zinc-800 rounded-2xl'>  
         <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/4lKxgSswEqKKHdMcjRNFE0?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Track"
      ></iframe>
           
         </div>
        

        
        
      </main>

    </section>
  )
}

export default Dadin