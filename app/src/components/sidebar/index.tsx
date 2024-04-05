import React from "react";
import InstagramLogo from '../../../assets/insagran-name-logo.png'
import Image from "next/image";
import { sideBarData, sideBarFooterData } from '../../../mock/SidebarData'
import ProfilePic from '../../../assets/profile.jpg'
import Link from "next/link";
import { useRouter } from 'next/router';

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = (props) => {

    const pathname = useRouter();
    const parts = pathname?.asPath?.split('/');
    const routePath = parts?.[parts?.length - 1]; // Get the last part of the pathname

    return (
        <div className="w-full h-full px-6 box-border md:py-4 xs:px-0 xs:py-2 ">
            <Image src={InstagramLogo} alt="" className="w-32 sm:hidden lg:block xs:hidden md:hidden" />
            <div className="lg:py-1 lg:h-[70vh] lg:block sm:flex xs:flex xs:justify-evenly xs:px-0 md:pt-0 sm:justify-evenly sm:items-center">
                {sideBarData && sideBarData?.length > 0 && sideBarData?.map((value: any, key: number | string) => {
                    let path: string = value?.path || "/";
                    let splitPath:any=path.split('/');
                    let getPath=splitPath?.[splitPath?.length - 1]
                    let Icons =routePath===getPath?value?.filled:value?.icon;
                    return (
                        <Link href={path} key={key} className={`${routePath===getPath?"font-[800]":""}`}>
                            <div className="w-fit flex items-center lg:mt-6 cursor-pointer select-none md:mt-0 lg:py-0" key={key}>
                                {Icons !== "profile" && <Icons className="sm:text-[30px] lg:text-[1.5rem] xs:text-[1.7rem]" />}
                                {Icons === "profile" && <Image src={ProfilePic} alt="" className="lg:w-7 lg:h-7 rounded-full sm:w-[30px] sm:h-[30px] xs:w-[1.7rem] xs:h-[1.7rem]" />}
                                <p className={`ml-4 md:hidden lg:block sm:hidden xs:hidden`}>{value?.name}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="border border-solid border-[transparent] h-[13vh] sm:hidden xs:hidden md:hidden lg:block">
                {sideBarFooterData && sideBarFooterData?.length > 0 && sideBarFooterData?.map((value: any, key: number | string) => {
                    let Icons = value?.icon
                    return (
                        <div className="w-fit flex items-center mt-4 cursor-pointer select-none" key={key}>
                            <Icons className="text-[1.5rem]" />
                            <p className="ml-4">{value?.name}</p>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar