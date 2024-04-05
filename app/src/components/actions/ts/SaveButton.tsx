import React from "react";
import { Icons } from '../../../utils/Icons'

interface SaveButtonProps {
    actionData: {
        save: boolean
    };
    setActionData: any;
}

const SaveButton: React.FC<SaveButtonProps> = (props) => {
    const { SaveOutline, SaveFilled } = Icons

    const { actionData, setActionData } = props

    const save=(status:boolean)=>{
            setActionData({...actionData,save:status})
    }

    return (
        <div className="flex items-center justify-center w-full select-none">
            <div className="w-fit">
                {!actionData?.save && <SaveOutline className="m-0 cursor-pointer sm:text-[30px] xs:text-[2rem] lg:text-[1.5rem]" onClick={()=>save(true)} />}
                {actionData?.save && <SaveFilled className="m-0 cursor-pointer sm:text-[30px] xs:text-[2rem] lg:text-[1.5rem]" onClick={()=>save(false)}/>}
            </div>
        </div>
    )
}

export default React.memo(SaveButton)