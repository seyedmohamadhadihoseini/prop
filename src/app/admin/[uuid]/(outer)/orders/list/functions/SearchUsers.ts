import { Challenge, User } from "@prisma/client";


export default function SearchUsersById(challenges: Challenge[] | any[], keyward: string):any {
    return challenges.filter(ch => ch.user.email.includes(keyward));

}