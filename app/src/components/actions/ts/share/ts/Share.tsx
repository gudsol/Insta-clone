import React, { useEffect, useRef } from 'react'
import { TwitterShareButton, LinkedinShareButton, EmailShareButton, WhatsappShareButton } from 'react-share';
import { Icons } from '../../../../../utils/Icons'

// Define props interface for Share component
interface SharePros {
    setIsOpen: (arg: boolean) => void; // Function to set isOpen state
}

// Define the Share component as a functional component
const Share: React.FC<SharePros> = (props) => {
    const { setIsOpen } = props // Destructure props to extract setIsOpen function

    const { WhatsApp, Twitter, LinkedIn, Mail } = Icons // Destructure icons from Icons

    // Share URL and details
    const shareUrl: string = 'https://main--insta-clone-2024.netlify.app';
    const title = "Check out this amazing website!";
    const emailSubject: string = 'Check out this website';
    const emailBody: string = 'I found this amazing website and thought you might be interested.';

    const shareDivRef = useRef<HTMLDivElement>(null);  // Reference to the share div

    // Effect to handle click outside the share div
    useEffect(() => {
        const handleClickOutside: any = (event: MouseEvent) => {
            if (shareDivRef.current && !shareDivRef.current.contains(event.target as Node)) {
                setIsOpen(false); // Close the share component if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside); // Add event listener for mouse click

        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Remove event listener on component unmount
        };
    }, []);

    // Render the Share component
    return (
        <div ref={shareDivRef} className='absolute border border-solid border-2 border-[rgba(231,231,232,0.2)]  right-10  h-fit bg-[rgba(25,25,25,0.7)] backdrop-filter backdrop-blur-lg rounded pr-12 pl-4 py-2 grid grid-cols-4 gap-x-14'>
            <WhatsappShareButton
                url="https://main--insta-clone-2024.netlify.app"
                title="Check out this amazing website!"
                separator=":: "
            >
                <WhatsApp className='hover:text-[#25D366] lg:text-[1.8rem] xs:text-[1.8rem] sm:text-[1.8rem]' />
            </WhatsappShareButton >
            <TwitterShareButton url={shareUrl} title={title}>
                <Twitter className='lg:text-[1.5rem] xs:text-[1.3rem] sm:text-[1.3rem]' />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedIn className='hover:text-[#0077b5] lg:text-[1.8rem] xs:text-[1.8rem] sm:text-[1.8rem]' />
            </LinkedinShareButton>
            <EmailShareButton url={shareUrl} subject={emailSubject} body={emailBody}>
                <Mail className='hover:text-[#DB4437] lg:text-[1.8rem] xs:text-[1.8rem] sm:text-[1.8rem]' />
            </EmailShareButton>
        </div>
    )
}

export default React.memo(Share)