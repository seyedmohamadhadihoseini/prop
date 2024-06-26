import CurrentUser from "@/functions/CurrentUser";
import prisma from "@/services/singleton_prisma";
import { User } from "@prisma/client";

export default async function ChallengeApp({ params }: { params: { id: string } }) {
    const { id } = params;

    const user: User = await CurrentUser();
    const challenge = await prisma.challenge.findUnique({
        where: {
            id: parseInt(id)
        }, include: {
            setting: true, user: true
        }
    });
    if (!challenge || (challenge.user.id != user.id)) {
        return;
    }

    return <div>
        {id}
    </div>
}