import prisma from "@/services/singleton_prisma";
import ChallengeEditForm from "./form";

export default async function ChallengeDetailApp({ params }: { params: { id: string } }) {
    const { id } = params;
    const challenge = await prisma.challengeSetting.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    if (!challenge) {
        return;
    }
    return <div>
        <ChallengeEditForm challenge={challenge} />
    </div>

}