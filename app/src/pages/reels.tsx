'use client';
import React,{useRef,useState} from "react";
import ActionButtons from "../components/actions";
import dynamic from 'next/dynamic';
import Image from "next/image";
import {reelsMockData} from'../../mock/ReelsData';

const VideoPlayer = dynamic(() => import('../components/videoplayer/index'), { ssr: false });

interface ReelsPageProps {

}

const ReelsPage: React.FC<ReelsPageProps> = (props) => {
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
                    <div className="w-full absolute h-full box-border ">
                        <div className="flex w-full h-[100%] relative">
                            <div className="w-full h-full cursor-pointer" onClick={togglePlay}>  </div>
                            <div className="flex items-end">
                            <ActionButtons data={value}/>
                            </div>
                        </div>
                        <div className="w-[80%] h-[10%] absolute bottom-0 px-3">
                            <div className="flex">
                            <Image className="lg:w-7 lg:h-7 sm:w-[3rem]  sm:h-[3rem] xs:w-[2.5rem] xs:h-[2.5rem] rounded-full" src={value?.profile} alt=""/>
                            <p className="lg:ml-4 w-[70%] lg:text-[1.3rem] truncate sm:text-[1.2rem] xs:ml-4 sm:ml-4">{value?.name}</p>
                            </div>
                            <p className="w-[50%] truncate lg:text-[0.9rem] lg:mt-2 xs:text-[0.7rem] sm:text-[0.9rem] mt-2">{value?.description}</p>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>

    )
}

export default React.memo(ReelsPage)