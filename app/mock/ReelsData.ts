import ProfileOne from '../assets/profile-1.jpg'
import CoverOne from '../assets/cover-1.jpg'
import CoverTwo from '../assets/cover-2.jpg'
import CoverThree from '../assets/cover-3.jpg'
import ProfileTwo from '../assets/profile-2.jpg'
import ProfileThree from '../assets/profile-3.jpg'
export const reelsMockData = [
    {
        id:1,
        profile: ProfileOne,
        name: 'Nature Lover',
        video:'/videos/reels-1.mp4',
        description:'Hello Love ❤️',
        songCover:CoverOne,
        like: {
            statue: false,
            count: 2000
        },
        comments: [
            {
                id:1,
                profile: ProfileTwo,
                name: "Rider_Girl",
                comment: 'Wow Nice Place 😍',
                like: {
                    status: false,
                    count: 30000
                },
                reply: [
                    {
                        id:12,
                        profile: ProfileThree,
                        name: 'Pinky_Rose',
                        comment: "Yes It's awsome ✨ ",
                        like: {
                            status: false,
                            count: 30000
                        },
                    }
                ]
            },
            {
                id:2,
                profile: ProfileTwo,
                name: "Rider_Girl",
                comment: 'Wow Nice Place 😍',
                like: {
                    status: false,
                    count: 30000
                },
                reply: [
                    {
                        id:13,
                        profile: ProfileThree,
                        name: 'Pinky_Rose',
                        comment: "Yes It's awsome ✨ ",
                        like: {
                            status: false,
                            count: 30000
                        },
                    }
                ]
            }
        ],
        save:false
    },
    {
        id:2,
        profile: ProfileTwo,
        name: 'Rider Girl',
        video:'/videos/reels-2.mp4',
        description:'Today Coffee with Book ✨',
        songCover:CoverTwo,
        like: {
            statue: true,
            count: 4100
        },
        comments: [
            {
                id:14,
                profile: ProfileTwo,
                name: "Rider_Girl",
                comment: 'Wow Nice Place 😍',
                like: {
                    status: false,
                    count: 30000
                },
                reply: [
                    {
                        id:100,
                        profile: ProfileThree,
                        name: 'Pinky_Rose',
                        comment: "Yes It's awsome ✨ ",
                        like: {
                            status: false,
                            count: 30000
                        },
                    }
                ]
            },
            {
                id:22,
                profile: ProfileTwo,
                name: "Rider_Girl",
                comment: 'Wow Nice Place 😍',
                like: {
                    status: false,
                    count: 30000
                },
                reply: [
                    {
                        id:123,
                        profile: ProfileThree,
                        name: 'Pinky_Rose',
                        comment: "Yes It's awsome ✨ ",
                        like: {
                            status: false,
                            count: 30000
                        },
                    }
                ]
            }
        ],
        save:false
    },
    {
        id:3,
        profile: CoverOne,
        name: 'Scarry',
        video:'/videos/reels-4.mp4',
        description:'Butterfly 🦋✨🦋',
        songCover:CoverOne,
        like: {
            statue: false,
            count: 8200
        },
        comments: [
            {
                id:19,
                profile: ProfileTwo,
                name: "Rider_Girl",
                comment: 'Wow Nice Place 😍',
                like: {
                    status: false,
                    count: 30000
                },
                reply: [
                    {
                        id:125,
                        profile: ProfileThree,
                        name: 'Pinky_Rose',
                        comment: "Yes It's awsome ✨ ",
                        like: {
                            status: false,
                            count: 30000
                        },
                    }
                ]
            },
            {
                id:29,
                profile: ProfileTwo,
                name: "Rider_Girl",
                comment: 'Wow Nice Place 😍',
                like: {
                    status: false,
                    count: 30000
                },
                reply: [
                    {
                        id:139,
                        profile: ProfileThree,
                        name: 'Pinky_Rose',
                        comment: "Yes It's awsome ✨ ",
                        like: {
                            status: false,
                            count: 30000
                        },
                    }
                ]
            }
        ],
        save:false
    },

]