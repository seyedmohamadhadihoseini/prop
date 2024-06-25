
import style from "./style.module.css";
export default function FullInformation({ header, p1, p2, p3 }: { header: string, p1: string[], p2: string[], p3: string[] }) {
    const p1s = p1.map(e => <p key={e}>{e}</p>);
    const p2s = p2.map(e => <p key={e}>{e}</p>);
    const p3s = p3.map(e => <p key={e}>{e}</p>);

    return <div className={style.main}>
        <div className={style.header}>
            <h4>{header}</h4>

        </div>
        <div>{p1s}</div>
        <div>{p2s}</div>
        <div>{p3s}</div>
        <div></div>
    </div>
}