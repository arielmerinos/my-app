import { SidebarLink } from "@/types";
export const themes = [
    {value: 'light', label: 'Light', icon: '/assets/icons/sun.svg'},
    {value: 'dark', label: 'Dark', icon: '/assets/icons/moon.svg'},
    {value: 'system', label: 'System', icon: '/assets/icons/computer.svg'},
]

export const sidebarLinks: SidebarLink[] = [
    {
        imgURL: '/assets/icons/home.svg',
        label: 'Home',
        route: '/',
    },
    {
        imgURL: '/assets/icons/users.svg',
        route: '/comminity',
        label: 'Community',
    },
    {}
]

export const BADGE_CRITERIA = {
    QUESTION_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    QUESTION_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
}