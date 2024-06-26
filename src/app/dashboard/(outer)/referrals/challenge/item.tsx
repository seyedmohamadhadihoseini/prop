
export default function RefferalChallengeTableItem
    ({ number, name, count, price }: { number: number, name: string, count: number, price: number }) {

    return <tr >
        <th scope="row">{number}</th>
        <td>{name}</td>
        <td>{count}</td>
        <td>{price} $</td>
    </tr>
}