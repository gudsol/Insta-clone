import React, { useState, useRef, useEffect } from "react";
import { Icons } from '../../../../../utils/Icons'
import Profile from '../../../../../../assets/profile.jpg'
import Image from "next/image";
import { debounce, generateRandomNumber } from '../../../../../utils/commonLogics'

interface CommentsProps {
    actionData: any;
    setActionData: any;
    openComment: () => void;
}

const Comments: React.FC<CommentsProps> = (props) => {
    const { actionData, setActionData, openComment } = props

    const { Close, HeartOutLine, HeartFilled, SentOutLine, EmojiOutLine } = Icons

    const commentBoxRef = useRef<HTMLTextAreaElement>(null);
    const commentDivRef = useRef<HTMLDivElement>(null);

    const [captureComments, setCaptureComments] = useState<string>('')
    const [commentVarient, setCommentVarient] = useState<string>('')
    const [ids, setCommentIds] = useState<number>(0)
    const [tempComment, setTempComment] = useState<string>('')
    const [openReplies, setOpenReplies] = useState<any>({})


    useEffect(() => {
        const handleClickOutside: any = (event: MouseEvent) => {
            if (commentDivRef.current && !commentDivRef.current.contains(event.target as Node)) {
                openComment();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const captureVarient = (varient: string, id: number, comment: string) => {
        if (varient?.toLowerCase() !== commentVarient?.toLowerCase()) {
            setCommentVarient(varient)
        }

        if (id !== ids && id !== 0) {
            setCommentIds(id)
        }

        if (varient?.toLowerCase() === 'reply') {
            setTimeout(() => {
                if (commentBoxRef.current) {
                    commentBoxRef.current.focus();
                }
            }, 200);
        }
        if (comment?.trim()?.length > 0 && varient?.toLowerCase() !== 'editcomments') {
            setTempComment(comment)
        }

        if (varient?.toLowerCase() === 'editcomments') {
            setCaptureComments(comment)
        }
    }

    const likeComments = (varient: string, status: boolean, id: number | string, replyId: number | string) => {
        if (varient === 'comment') {
            let addlike: [] = actionData?.comments?.map((cmt: any) => {
                if (cmt?.id === id) {
                    if (status) {
                        return { ...cmt, like: { count: cmt?.like?.count + 1, status: status } }
                    } else if (!status) {
                        return { ...cmt, like: { count: cmt?.like?.count - 1, status: status } }
                    }
                } else {
                    return { ...cmt }
                }
            })
            setActionData({ ...actionData, comments: [...addlike] })
        } else if (varient === 'reply') {
            let addLikeForReply = actionData?.comments?.map((cmt: any) => {
                if (cmt?.id === id) {
                    return {
                        ...cmt, reply: cmt?.reply?.map((reply: any) => {
                            if (reply?.id === replyId) {
                                if (status) {
                                    return { ...reply, like: { count: reply?.like?.count + 1, status: status } }
                                } else if (!status) {
                                    return { ...reply, like: { count: reply?.like?.count - 1, status: status } }
                                }
                            } else {
                                return { ...reply }
                            }
                        })
                    }
                } else {
                    return { ...cmt }
                }
            })
            setActionData({ ...actionData, comments: [...addLikeForReply] })
        }
    }

    const comment = (e: any) => {
        setCaptureComments(e?.target?.value)
    }

    const debouncedChangeHandler = debounce(comment, 500); // Debounce with 500ms delay

    const addComment = () => {
        if (commentVarient?.toLowerCase() === 'comment') {
            let addComment = [...actionData?.comments,
            {
                id: generateRandomNumber(4),
                profile: Profile,
                name: "Gud _Sol",
                user: true,
                comment: captureComments,
                like: {
                    status: false,
                    count: 0
                },
                reply: [
                ]
            }
            ]
            if(captureComments?.trim()?.length>0){
            setActionData({ ...actionData, comments: [...addComment] })
            }
            setCaptureComments('')
        }
    }

    const addReplies = () => {
        if (commentVarient?.toLowerCase() === 'reply') {
            let addReplies: [] = actionData?.comments?.map((cmt: any) => {
                if (cmt?.id === ids) {
                    return {
                        ...cmt, reply: [...cmt?.reply, {
                            id: generateRandomNumber(3),
                            profile: Profile,
                            name: 'Gud_Sol',
                            user: true,
                            comment: captureComments,
                            like: {
                                status: false,
                                count: 0
                            },
                        }]
                    }
                } else {
                    return { ...cmt }
                }
            })
            if(captureComments?.trim()?.length>0){
            setActionData({ ...actionData, comments: [...addReplies] })
            setTempComment('')
            setCaptureComments('')
            setCommentVarient('comment')
            }
        }
    }

    const editComment = () => {
        if (commentVarient?.toLowerCase() === 'editcomments') {
            let addEditComments: [] = actionData?.comments?.map((cmt: any) => {
                if (cmt?.id === ids) {
                    return { ...cmt, comment: captureComments }
                } else {
                    return { ...cmt }
                }
            })
            if(captureComments?.trim()?.length>0){
            setActionData({ ...actionData, comments: [...addEditComments] })
            setCaptureComments('')
            setCommentVarient('comment')
            setCommentIds(0)
            }
        }
    }

    const postComment = () => {
        switch (commentVarient?.toLowerCase()) {
            case 'reply':
                addReplies()
                break;

            case 'editcomments':
                editComment()
                break;

            default:
                addComment()
                break;
        }
    }

    const openRepliesFunc = (id: number | string, status: boolean) => {
        setOpenReplies({ [id]: openReplies?.[id] ? !openReplies?.[id] : status })
    }

    return (
        <div ref={commentDivRef} className="rounded border border-solid border-2 border-[rgba(231,231,232,0.2)] lg:w-64 sm:w-80 xs:w-72 lg:h-[26rem] sm:h-[30rem] xs:h-[30rem] sm:px-4 sm:pt-2 xs:px-2 xs:pt-2 absolute lg:-bottom-16 lg:right-11 sm:right-14 sm:-bottom-26 xs:right-14 xs:-bottom-32 bg-[rgba(25,25,25,0.8)] backdrop-filter backdrop-blur-lg">
            <div className="py-2 px-4 flex items-center ">
                <Close size={20} className="cursor-pointer" onClick={openComment} />
                <p className=" text-[14px] font-[700] w-full text-center">Comments</p>
            </div>
            <div className="mt-4 h-[70%] overflow-auto">
                {actionData && actionData?.comments && actionData?.comments?.length > 0 && actionData?.comments?.map((comments: any, key: number | string) => {
                    let like = comments?.like;
                    return (
                        <div className="box-border px-2 mt-3" key={key}>
                            <div className="flex">
                                <Image className="w-8 h-8 rounded-full" src={comments?.profile} alt="" />
                                <p className="text-[13px] ml-2 w-[50%] h-fit truncate">{comments?.name}</p>
                                <p className="text-[10px] text-[rgba(102,102,102,1)] h-fit">4d</p>
                            </div>
                            <div className="flex items-center justify-evenly">
                                <p className="text-[11px] font-[600] w-[80%] mt-1 whitespace-normal overflow-ellipsis break-words">{comments?.comment}</p>
                                {!comments?.like?.status && <HeartOutLine onClick={() => likeComments('comment', true, comments?.id, 0)} size={10} className="text-[rgba(102,102,102,1)] cursor-pointer" />}
                                {comments?.like?.status && <HeartFilled onClick={() => likeComments('comment', false, comments?.id, 0)} size={10} className="text-[red] cursor-pointer" />}
                            </div>
                            <div className="text-[10px] text-[rgba(102,102,102,1)] flex mt-1 px-3 ">
                                <p >{like?.count} likes</p>
                                <p className="ml-4 cursor-pointer hover:text-blue-500" onClick={() => { captureVarient('reply', comments?.id, comments?.comment) }}>Reply</p>
                                {comments?.user && <p className="ml-4 cursor-pointer hover:text-blue-500" onClick={() => { captureVarient('editcomments', comments?.id, comments?.comment) }} >Edit</p>}
                            </div>
                            {comments?.reply && comments?.reply?.length > 0 && <p className="text-[10px] text-[rgba(102,102,102,1)] px-3 mt-2 cursor-pointer hover:text-blue-500" onClick={() => openRepliesFunc(comments?.id, true)}>_______{openReplies?.[comments?.id] ? 'Close all' : 'View all'} {comments?.reply?.length} Replies</p>}
                            {(comments?.reply && comments?.reply?.length > 0 && openReplies?.[comments?.id]) && <div className="h-fit px-3 py-2 rounded bg-[#000] mt-2">
                                {comments?.reply && comments?.reply?.length > 0 && comments?.reply?.map((reply: any, index: number | string) => {
                                    let like = reply?.like
                                    return (
                                        <div className="mt-2" key={index}>
                                            <div className="flex">
                                                <Image src={reply?.profile} alt="" className="w-6 h-6 rounded-full" />
                                                <p className="text-[11px] ml-2 h-fit w-[55%] truncate">{reply?.name}</p>
                                                <p className="text-[10px] text-[rgba(102,102,102,1)]">3d</p>
                                            </div>
                                            <div className="flex items-center justify-evenly">
                                                <p className="text-[10px] font-[500] w-[80%] mt-1">{reply?.comment}</p>
                                                {!reply?.like?.status && <HeartOutLine onClick={() => likeComments('reply', true, comments?.id, reply?.id)} size={10} className="text-[rgba(102,102,102,1)] cursor-pointer" />}
                                                {reply?.like?.status && <HeartFilled onClick={() => likeComments('reply', false, comments?.id, reply?.id)} size={10} className="text-[red] cursor-pointer" />}
                                            </div>
                                            <div className="text-[8px] text-[rgba(102,102,102,1)] flex mt-1 px-3 ">
                                                <p className="cursor-pointer">{like?.count} likes</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                        </div>
                    )
                })}
            </div>
            <div className="px-2 h-[35px] mt-2 ">
                <div className="h-[20px] w-full mb-1 ">
                    {tempComment?.trim()?.length > 0 && <div className="h-full flex items-center justify-evenly bg-[#000] rounded ">
                        <p className="w-[85%] h-full truncate text-[10px] mt-1">{tempComment}</p>
                        <Close size={10} className="cursor-pointer" onClick={() => { setTempComment(''); setCommentVarient(''); setCaptureComments('') }} />
                    </div>}
                </div>
                <div className="h-full w-full flex items-center bg-[#000] px-1 rounded-full hover:border hover:border-solid hover:border-gray-500">
                    <Image src={Profile} alt="" className="w-12 h-7 rounded-full mr-2 ml-0" />
                    {(commentVarient === 'comment' || commentVarient === '') && <textarea ref={commentBoxRef} key={actionData?.comments} defaultValue={captureComments} onClick={() => captureVarient('comment', 0, '')} onChange={debouncedChangeHandler} placeholder="Add a comments" className="w-full h-full rounded-3xl bg-[#000] px-2 py-2 outline-0 placeholder:text-[12px] resize-none flex  overflow-hidden text-[10px] " />}
                    {commentVarient === 'reply' && <textarea ref={commentBoxRef} key={tempComment} defaultValue={captureComments} onChange={debouncedChangeHandler} placeholder="Reply the comment" className="w-full h-full rounded-3xl bg-[#000] px-2 py-2 outline-0 placeholder:text-[12px] resize-none flex  overflow-hidden text-[10px] " />}
                    {commentVarient === 'editcomments' && <textarea ref={commentBoxRef} key={ids} defaultValue={captureComments} onBlur={() => captureComments?.length === 0 ? captureVarient('comment', 0, '') : ''} onChange={debouncedChangeHandler} placeholder="Edit the comment" className="w-full h-full rounded-3xl bg-[#000] px-2 py-2 outline-0 placeholder:text-[12px] resize-none flex  overflow-hidden text-[10px] " />}
                    <EmojiOutLine size={26} className="mr-4 cursor-pointer hover:text-yellow-300" />
                    <SentOutLine onClick={postComment} size={20} className="mr-2 cursor-pointer hover:text-blue-600" />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Comments)