import Image from "next/image";
import React from "react";

interface BannerImageProps{

}
const BannerImage:React.FC<BannerImageProps>=(props)=>{
    return(
        <div className="w-full flex items-center justify-center m-0">
            <img className="lg:w-8 lg:h-7 sm:max-md:w-9 sm:max-md:h-9 sm:w-[90px] sm:h-[90px] border-2 border-solid border-[#fff] rounded m-0" src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
        </div>
    )
}

export default React.memo(BannerImage)