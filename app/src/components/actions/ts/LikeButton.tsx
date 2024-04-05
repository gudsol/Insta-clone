import React from "react";
import { Icons } from '../../../utils/Icons'
import {formatNumber} from '../../../utils/commonLogics'

// Define props interface for LikeButton component
interface LikeButtonProps {
    actionData: {
        like: {
            status: boolean,
            count: number
        }
    };
    setActionData: any;
}

// Define the LikeButton component as a functional component
const LikeButton: React.FC<LikeButtonProps> = (props) => {

    const { actionData, setActionData } = props // Destructure props to extract actionData and setActionData

    const { HeartOutLine, HeartFilled } = Icons // Destructure Icons from props

    // Function to handle like action
    const like = (status: boolean) => {
        if (status) {
            // If status is true, increment like count
            setActionData({ ...actionData, like: { status: status, count: actionData?.like?.count + 1 } })
        } else {
             // If status is false, decrement like count
            setActionData({ ...actionData, like: { status: status, count: actionData?.like?.count - 1 } })
        }
    }

     // Render the LikeButton component
    return (
        <div className="flex items-center justify-center w-full select-none m-0">
            <div className="w-fit">
                {!actionData?.like?.status && <HeartOutLine className="m-0 cursor-pointer sm:text-[30px] xs:text-[2rem] lg:text-[1.5rem]" onClick={() => like(true)} />}
                {actionData?.like?.status && <HeartFilled className="m-0 cursor-pointer text-[red] sm:text-[30px] xs:text-[2rem] lg:text-[1.5rem]" onClick={() => like(false)} />}
                <p className="w-full mt-2 lg:text-[0.7rem] text-center sm:text-[1rem] xs:text-[1rem]">{formatNumber(actionData?.like?.count)}</p>
            </div>
        </div>
    )
}

export default React.memo(LikeButton) // Export LikeButton component with React.memo for performance optimization
