import React from "react";
import { Icons } from '../../../utils/Icons'

// Define props interface for SaveButton component
interface SaveButtonProps {
    actionData: {
        save: boolean
    };
    setActionData: any; // Prop to update action data
}

// Define the SaveButton component as a functional component
const SaveButton: React.FC<SaveButtonProps> = (props) => {
    const { SaveOutline, SaveFilled } = Icons // Destructure SaveOutline and SaveFilled from Icons

    const { actionData, setActionData } = props // Destructure props to extract actionData and setActionData

    // Function to handle save action
    const save=(status:boolean)=>{
            setActionData({...actionData,save:status}) // Update save status in actionData
    }

     // Render the SaveButton component
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