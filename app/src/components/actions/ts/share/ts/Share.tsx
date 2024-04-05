import React, { useState, useEffect, useRef } from 'react'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton, WhatsappShareButton } from 'react-share';
import { Icons } from '../../../../../utils/Icons'

interface SharePros {
    setIsOpen: (arg: boolean) => void;
}

const Share: React.FC<SharePros> = (props) => {
    const { setIsOpen } = props

    const { WhatsApp, FaceBook, Twitter, LinkedIn, Mail } = Icons
    const shareUrl:string = 'https://example.com';
    const title:string = 'Example Website';
    const emailSubject:string = 'Check out this website';
    const emailBody:string = 'I found this amazing website and thought you might be interested.';

    const shareDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside: any = (event: MouseEvent) => {
            if (shareDivRef.current && !shareDivRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={shareDivRef} className='absolute border border-solid border-2 border-[rgba(231,231,232,0.2)] w-fit right-10 w-[50px] h-fit bg-[rgba(25,25,25,0.7)] backdrop-filter backdrop-blur-lg rounded pr-8 pl-4 py-2 grid grid-cols-5 gap-x-12'>
            <WhatsappShareButton
                url="https://example.com"
                title="Check out this amazing website!"
                separator=":: "
            >
                <WhatsApp size={20} className='hover:text-[#25D366]' />
            </WhatsappShareButton >
            {/* <FacebookShareButton url={shareUrl} quote={title}>
                <FaceBook size={20} className='hover:text-[#1877F2]' />
            </FacebookShareButton> */}
            <TwitterShareButton url={shareUrl} title={title}>
                <Twitter size={17} />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedIn size={20} className='hover:text-[#0077b5]' />
            </LinkedinShareButton>
            <EmailShareButton url={shareUrl} subject={emailSubject} body={emailBody}>
                <Mail size={20} className='hover:text-[#DB4437]' />
            </EmailShareButton>
        </div>
    )
}

export default React.memo(Share)