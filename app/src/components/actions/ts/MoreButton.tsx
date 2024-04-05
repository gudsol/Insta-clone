import React from "react";
import {Icons} from '../../../utils/Icons'

interface MoreButtonProps{

}

const MoreButton:React.FC<MoreButtonProps>=(props)=>{
    const {MoreButton}=Icons
    return(
        <div className="flex items-center justify-center w-full select-none">
            <div className="w-fit">
                <MoreButton className="m-0 cursor-pointer sm:text-[30px] xs:text-[2rem] lg:text-[2rem]" />
            </div>
        </div>
    )
}
export default React.memo(MoreButton)