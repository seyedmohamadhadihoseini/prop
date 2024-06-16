import prisma from "@/services/singleton_prisma"
import "./style.css";
import VerifyUserItem from "./item";

export default async function VerifyUsers({ params }: { params: { uuid: string } }) {
    const PendingUsers = await prisma.user.findMany({
        where: {
            verifyLevel: "Pending"
        }
    });
    const displayVerification = PendingUsers.map(user => <VerifyUserItem uuid={params.uuid} key={user.id} user={user} />)
    return <div className="verify-container">
        {displayVerification}
    </div>
}