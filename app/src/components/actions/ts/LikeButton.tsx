import React from "react";
import { Icons } from '../../../utils/Icons'

interface LikeButtonProps {
    actionData: {
        like: {
            status: boolean,
            count: number
        }
    };
    setActionData: any;
}

const LikeButton: React.FC<LikeButtonProps> = (props) => {

    const { actionData, setActionData } = props

    const { HeartOutLine, HeartFilled } = Icons

    const like = (status: boolean) => {
        if (status) {
            setActionData({ ...actionData, like: { status: status, count: actionData?.like?.count + 1 } })
        } else {
            setActionData({ ...actionData, like: { status: status, count: actionData?.like?.count - 1 } })
        }
    }
    return (
        <div className="flex items-center justify-center w-full select-none m-0">
            <div className="w-fit">
                {!actionData?.like?.status && <HeartOutLine className="m-0 cursor-pointer sm:text-[30px] xs:text-[2rem] lg:text-[2rem]" onClick={() => like(true)} />}
                {actionData?.like?.status && <HeartFilled className="m-0 cursor-pointer text-[red] sm:text-[30px] xs:text-[2rem] lg:text-[1.5rem]" onClick={() => like(false)} />}
                <p className="w-full mt-2 lg:text-[0.7rem] text-center sm:text-[1rem] xs:text-[1rem]">{actionData?.like?.count}</p>
            </div>
        </div>
    )
}

export default React.memo(LikeButton)