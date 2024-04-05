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
                            <Image className="lg:w-7 lg:h-7 sm:max-md:w-10 sm:max-md:h-10 sm:w-[6rem] sm:h-[6rem] rounded-full" src={value?.profile} alt=""/>
                            <p className="lg:ml-4 w-[70%] lg:text-[1rem] truncate sm:max-md:text-[1rem] sm:text-[2.5rem] sm:max-md:ml-4 sm:ml-8">{value?.name}</p>
                            </div>
                            <p className="w-[50%] truncate lg:text-[10px] tracking-wider lg:mt-2 sm:max-md:text-[0.8rem] sm:max-md:mt-4 sm:text-[1.8rem] sm:mt-[1.5rem] ">{value?.description}</p>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>

    )
}

export default React.memo(ReelsPage)