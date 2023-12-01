import { BADGE_CRITERIA } from "@/constants";

export interface SearchParamsProps {
    searchParams: { [key: string]: string | undefined };
}

export interface URLProps {
    params: {id: string};
    searchParams: { [key: string]: string | undefined };
}

export interface BadgeCounts{
    GOLD: number;
    SILVER: number;
    BRONZE: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;
