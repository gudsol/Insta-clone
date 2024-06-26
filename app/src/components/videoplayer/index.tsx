// components/VideoPlayer.tsx
'use client';
import { useEffect } from 'react';
import { Icons } from '../../utils/Icons'

interface VideoPlayerProps {
  src: string;
  videoRef: any;
  isPlaying: any;
  setIsPlaying: any;
  togglePlay: (arg: any) => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, videoRef, isPlaying, setIsPlaying, togglePlay, }) => {
  const { Play } = Icons

  return (
    <div className="relative " >
      <video ref={videoRef} className="lg:h-screen sm:h-[87vh] xs:h-[87vh]" loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white border border-solid p-10 rounded-full bg-[rgba(25,25,25,0.4)]">
          <Play size={38} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white" />
        </div>
      )}

    </div>
  );
};

export default VideoPlayer;
