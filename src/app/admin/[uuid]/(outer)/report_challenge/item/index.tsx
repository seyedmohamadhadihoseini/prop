import { Challenge } from "@prisma/client";
export default function ReportChallengeItem({ challenge }: { challenge: Challenge|any }) {
    
    return <tr>
        <th scope="row">{challenge.id}</th>
        <td>{challenge.setting?.name}</td>
        <td>{challenge.setting?.price}</td>
        <td>{challenge.user?.email}</td>
        <td>{challenge.date.toLocaleDateString()}</td>
        <td>{challenge.isPaid ? "Paid" : "Pending"}</td>
    </tr>
    
}