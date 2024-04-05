import React,{useState} from "react";
import LikeButton from "./ts/LikeButton";
import CommentsButton from "./ts/comments";
import ShareButton from "./ts/share";
import SaveButton from "./ts/SaveButton";
import MoreButton from "./ts/MoreButton";
import BannerImg from "./ts/BannerImg";

interface ActionButtonsProps{
    data:any
}

const ActionButtons:React.FC<ActionButtonsProps>=(props)=>{
    const {data}=props

    const[actionData,setActionData]=useState<any>({...data})

    return(
        <div className="px-4 h-3/6 w-auto grid grid-cols-1 ">
                <LikeButton actionData={actionData} setActionData={setActionData}/>
                <CommentsButton actionData={actionData} setActionData={setActionData}/>
                <ShareButton />
                <SaveButton actionData={actionData} setActionData={setActionData}/>
                <MoreButton/>
                <BannerImg/>
        </div>
    )
}

export default React.memo(ActionButtons)