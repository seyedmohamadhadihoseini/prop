import prisma from "@/services/singleton_prisma";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
export default async function UserDetailForAdmin({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const user = await prisma.user.findUnique({
        where: { id }
    })
    if (!user) {
        return <div></div>
    }
    let verificationStatus = `${user.verifyLevel}`;
    if (verificationStatus == "Yes") {
        verificationStatus = "Verified";
    }
    const informationEls = [
        { title: "firstName", content: user.firstName },
        { title: "LastName", content: user.lastName },
        { title: "Address", content: user.address || "" },
        { title: "telephone", content: user.telephone || "" },
        { title: "Verification Status", content: verificationStatus },
        { title: "BirthDate", content: user.brithDate?.toDateString() || "" },
    ].map(item => <InformationElement key={item.title} title={item.title} content={item.content} />)
    return <div>
        <div className="user-header">
            <Image
                src={`${process.env.NEXT_PUBLIC_HOST}/api/file/get_profile?name=${user.profile}`}
                alt={user.email}
                width={100}
                height={50}
            />
            <div className="user-header-h1">

                <h1>{user.email}</h1>
            </div>
        </div>
        <hr />
        <div>
            {informationEls}
            <div className="information-element" id="id-card-user">
                <span>Id Card :</span>
                <Link href={`${process.env.NEXT_PUBLIC_HOST}/api/file/get_identity?name=${user.identity}`}>IdCard</Link>
            </div>
        </div>
    </div>
}
function InformationElement({ title, content }: { title: string, content: string }) {
    return <div className="information-element">
        <span>{title} :</span>
        <p>{content}</p>
    </div>
}