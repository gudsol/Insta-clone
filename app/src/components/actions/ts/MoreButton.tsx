import React from "react";
import {Icons} from '../../../utils/Icons'

interface MoreButtonProps{

}

const MoreButton:React.FC<MoreButtonProps>=(props)=>{
    const {MoreButton}=Icons
    return(
        <div className="flex items-center justify-center w-full select-none">
            <div className="w-fit">
                <MoreButton className="m-0 cursor-pointer sm:max-md:text-[30px] sm:text-[70px] lg:text-[20px]" />
            </div>
        </div>
    )
}
export default React.memo(MoreButton)