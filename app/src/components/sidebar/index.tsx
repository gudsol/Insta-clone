import React from "react";
import InstagramLogo from '../../../assets/insagran-name-logo.png'
import Image from "next/image";
import { sideBarData, sideBarFooterData } from '../../../mock/SidebarData'
import ProfilePic from '../../../assets/profile.jpg'

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = (props) => {

    return (
        <div className="w-full h-full px-6 box-border md:py-4">
            <Image src={InstagramLogo} alt="" className="w-32 sm:hidden lg:block" />
            <div className="lg:py-1 lg:h-[70vh] lg:block sm:flex md:pt-0 sm:justify-evenly sm:items-center">
                {sideBarData && sideBarData?.length > 0 && sideBarData?.map((value: any, key: number | string) => {
                    let Icons = value?.icon
                    return (
                        <div className="w-fit flex items-center lg:mt-6 cursor-pointer select-none md:mt-0 sm:max-md:py-0 lg:py-0" key={key}>
                            {Icons !== "profile" && <Icons className="sm:max-md:text-[30px] sm:text-[65px] lg:text-[20px]"/>}
                            {Icons === "profile" && <Image src={ProfilePic} alt="" className="lg:w-7 lg:h-7 rounded-full sm:max-md:h-[30px] sm:max-md:w-[30px] sm:w-[65px] sm:h-[65px]" />}
                            <p className="ml-4 md:hidden lg:block sm:hidden">{value?.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="border border-solid border-[transparent] h-[13vh] sm:hidden md:hidden lg:block">
                {sideBarFooterData && sideBarFooterData?.length > 0 && sideBarFooterData?.map((value: any, key: number | string) => {
                    let Icons = value?.icon
                   return (
                        <div className="w-fit flex items-center mt-4 cursor-pointer select-none" key={key}>
                            <Icons size={22} />
                            <p className="ml-4">{value?.name}</p>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar