'use client';
import React, { useRef, useState, useEffect } from "react";
import ActionButtons from "../app/src/components/actions/index";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { reelsMockData } from '../app/mock/ReelsData';

const VideoPlayer = dynamic(() => import('../app/src/components/videoplayer/index'), { ssr: false });

interface ReelsPageProps {

}

const ReelsPage: React.FC<ReelsPageProps> = (props) => {
    const videoRef = useRef<{ [key: string]: HTMLVideoElement | null }>({});
    const [isPlaying, setIsPlaying] = useState<any>({});

    useEffect(() => {
        reelsMockData && reelsMockData?.length > 0 && reelsMockData?.map((reel: any) => {
            setIsPlaying({ ...isPlaying, [reel?.id]: false })
        })
    }, [reelsMockData])

    const togglePlay = (reelId: string) => {
        if (videoRef.current[reelId]) {
            if (videoRef.current[reelId]!.paused) {
                videoRef.current[reelId]!.play();
                setIsPlaying({ ...isPlaying, [reelId]: true })
            } else {
                videoRef.current[reelId]!.pause();
                setIsPlaying({ ...isPlaying, [reelId]: false })
            }
        }
    };

    return (
        <div className="flex justify-center flex-wrap lg:w-[32%] ">
            {reelsMockData && reelsMockData.length > 0 && reelsMockData?.map((value: any, key: number | string) => {
                return (
                    <div className="flex relative w-fit sm:mb-6 lg:mb-4 border border-solid rounded border-[rgba(25,25,25,1)]" key={key}>
                        <VideoPlayer videoRef={(ref: any) => (videoRef.current[value.id] = ref)} isPlaying={isPlaying?.[value?.id]} setIsPlaying={setIsPlaying} togglePlay={() => togglePlay(value?.id)} src={value?.video} />
                        <div className="w-full absolute h-full box-border ">
                            <div className="flex w-full h-[100%] relative">
                                <div className="w-[100%] h-full cursor-pointer" onClick={() => togglePlay(value?.id)}>  </div>
                                <div className="flex items-end">
                                    <ActionButtons data={value} />
                                </div>
                            </div>
                            <div className="w-[80%] h-fit absolute bottom-0 px-3 ">
                                <div className="flex">
                                    <Image className="lg:w-7 lg:h-7 sm:w-[3rem]  sm:h-[3rem] xs:w-[2.5rem] xs:h-[2.5rem] rounded-full" src={value?.profile} alt="" />
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