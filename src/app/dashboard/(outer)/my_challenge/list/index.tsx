import CurrentUser from "@/functions/CurrentUser";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";
import ChallengeItem from "./item";


export default async function ChallengesList() {
    const user: User = await CurrentUser();
    const list = await prisma.challenge.findMany({
        where: {
            AND: [
                { userId: user.id },
                { isPaid: true }
            ]
        }
    });
    const displayList = list.map(i => <ChallengeItem challenge={i} />)

    return <div>
        {displayList}
    </div>


}