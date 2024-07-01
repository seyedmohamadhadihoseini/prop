import { MT5Account } from "@prisma/client";


export default function Mt5Item({ mt5Acc }: { mt5Acc: MT5Account|any }) {
    
    return <tr>
        <td>{mt5Acc.setting?.name}</td>
        <td>{mt5Acc.server}</td>
        <td>{mt5Acc.accountNumber}</td>
        <td>{mt5Acc.password}</td>
    </tr>;
}