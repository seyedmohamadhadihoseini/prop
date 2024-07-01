import { Challenge } from "@prisma/client";

export function SearchChallengesByUserEmail(challenges: Challenge[] | any[], email: string) {
    return challenges.filter(ch => ch.user.email.includes(email));
}