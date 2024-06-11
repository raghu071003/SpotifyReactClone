import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songsData[0]);
    const [playerStatus, setplayerStatus] = useState(false);
    const [time,setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime :{
            second:0,
            minute:0
        }
    })
    const [seek, setSeek] = useState(0);

    const play =()=>{
        audioRef.current.play();
        setplayerStatus(true)
        console.log(playerStatus);
    }
    const pause =() =>{
        audioRef.current.pause();
        setplayerStatus(false);
        console.log(playerStatus);

    }

    const playWithId = async (id)=>{
        await setTrack(songsData[id])
        await audioRef.current.play();
        setplayerStatus(true)
    }

    const prev = async()=>{
        if(track.id > 0){
            await setTrack(songsData[track.id-1])
            await audioRef.current.play();
            setplayerStatus(true)
        }
    }
    const next = async()=>{
        if(track.id < songsData.length-1){
            await setTrack(songsData[track.id+1])
            await audioRef.current.play();
            setplayerStatus(true)


        }
    }
    const seekSong = async(e)=>{
        audioRef.current.currentTime = ((e.nativeEvent.offsetX/seekBg.current.offsetWidth)* audioRef.current.duration)


    }
    useEffect(()=>{
        setTimeout(()=>{
            audioRef.current.ontimeupdate = () =>{
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration *100))+"%"

                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime%60),
                        minute: Math.floor(audioRef.current.currentTime/60)
                    },
                    totalTime :{
                        second: Math.floor(audioRef.current.duration%60),
                        minute: Math.floor(audioRef.current.duration/60)
                    }
                })
            }
        },1000)
    },[audioRef])

    return(
        <PlayerContext.Provider value={{audioRef,seekSong,seekBar,seekBg,track,setTrack,playerStatus,setplayerStatus,time,setTime,play,pause,playWithId,prev,next}}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider