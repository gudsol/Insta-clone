'use client';
import React,{useRef,useState} from "react";
import ActionButtons from "../app/src/components/actions/index";
import dynamic from 'next/dynamic';
import Image from "next/image";
import {reelsMockData} from'../app/mock/ReelsData';
import {NextPage} from 'next'

const VideoPlayer = dynamic(() => import('../app/src/components/videoplayer/index'), { ssr: false });

interface ReelsPageProps {

}

const Reels:NextPage = (props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current?.paused) {
          videoRef.current?.play();
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      };
    return (
        <div className="flex justify-center">
            {reelsMockData&&reelsMockData.length>0&&reelsMockData?.map((value:any,key:number|string)=>{
                return(
                    <div className="flex relative w-full " key={key}>
                    <VideoPlayer videoRef={videoRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} togglePlay={togglePlay} src={value?.video} />
                    <div className="w-full absolute h-full box-border">
                        <div className="flex w-full h-[100%] relative">
                            <div className="w-full h-full cursor-pointer" onClick={togglePlay}>  </div>
                            <div className="flex items-end">
                            <ActionButtons data={value}/>
                            </div>
                        </div>
                        <div className="w-[80%] h-[10%] absolute bottom-0 px-3">
                            <div className="flex">
                            <Image className="w-7 h-7 rounded-full" src={value?.profile} alt=""/>
                            <p className="ml-4 w-[70%] truncate">{value?.name}</p>
                            </div>
                            <p className="w-[50%] truncate text-[10px] tracking-wider mt-2">{value?.description}</p>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>

    )
}

export default React.memo(Reels)