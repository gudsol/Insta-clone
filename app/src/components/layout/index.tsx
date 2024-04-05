import React from "react";
import Sidebar from "../sidebar";
import ReelsPage from '../../pages/reels'

interface LayoutProps{

}

const Layout:React.FC<LayoutProps>=()=>{
    return(
        <div className="w-full md:h-fit sm:h-fit lg:h-screen box-border lg:flex">

        <div className="border border-solid border-[rgba(25,25,25,1)] w-1/5 box-border sm:hidden xs:hidden lg:block">
            <Sidebar/>
        </div>
        <div className="flex justify-center w-full">
       <ReelsPage/>
       </div>
       <div className="border h-fit border-solid border-[rgba(25,25,25,1)] border-b-0 sm:py-2 w-full box-border sm:block xs:block lg:hidden">
            <Sidebar/>
        </div>
        </div>

    )
}

export default Layout