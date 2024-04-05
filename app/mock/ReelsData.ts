import ProfileOne from '../assets/profile-1.jpg'
import CoverOne from '../assets/cover-1.jpg'
import ProfileTwo from '../assets/profile-2.jpg'
import ProfileThree from '../assets/profile-3.jpg'
export const reelsMockData = [
    {
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

]