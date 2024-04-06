import React from "react";
import Sidebar from "../sidebar";

interface LayoutProps {
    children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-full md:h-fit sm:h-fit lg:h-screen box-border lg:flex">

            <div className="border border-solid border-[rgba(25,25,25,1)] w-1/5 box-border sm:hidden xs:hidden lg:block">
                <Sidebar />
            </div>
            <main className="flex justify-center w-full sm:h-[87.5vh] xs:h-[87vh] lg:h-full overflow-auto">
                {children}
            </main>
            <div className="border h-fit border-solid border-[rgba(25,25,25,1)] border-b-0 sm:py-2 w-full box-border sm:block xs:block lg:hidden">
                <Sidebar />
            </div>
        </div>

    )
}

export default Layout