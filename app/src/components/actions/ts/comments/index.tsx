import React,{useState} from "react";
import { Icons } from '../../../../utils/Icons'
import Comments from "./ts/Comments";

interface CommentsButtonProps {
    actionData:any;
     setActionData:any;
}

const CommentsButton: React.FC<CommentsButtonProps> = (props) => {
    const {actionData,setActionData}=props
    const { PlainChatOutline } = Icons

    const [openCommentBox,setOprnCommentsBox]=useState<boolean>(false)

    const openComment=()=>{
        setOprnCommentsBox(!openCommentBox)
    }

    return (
        <div className="flex items-center justify-center w-full select-none relative">
             {openCommentBox&&<Comments actionData={actionData} setActionData={setActionData} openComment={openComment}/>}
            <div className="w-fit">
                <PlainChatOutline className="m-0 cursor-pointer sm:max-md:text-[30px] sm:text-[70px] lg:text-[20px]" onClick={openComment} />
                <p className="w-full mt-2 lg:text-[12px] text-center sm:max-md:text-[1rem] sm:text-[2rem]">{actionData?.comments?.length}</p>
            </div>
        </div>
    )
}

export default React.memo(CommentsButton)