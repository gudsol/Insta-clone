import React,{ useState, useEffect, useRef, MouseEvent} from "react";
import { Icons } from '../../../../utils/Icons'
import Share from "./ts/Share";

interface ShareButtonProps {

}

const ShareButton: React.FC<ShareButtonProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const { SentOutLine } = Icons
    return (
        <div className="flex items-center justify-center w-full select-none relative">
           {isOpen&&<Share setIsOpen={setIsOpen}/>}
            <div className="w-fit">
                <SentOutLine className="m-0 cursor-pointer sm:max-md:text-[30px] sm:text-[70px] lg:text-[20px]"onClick={() => setIsOpen(!isOpen)} />
            </div>
        </div>
    )
}

export default React.memo(ShareButton)