import style from "./style.module.css";
export default function PanelCard({ ico, title, value }: { ico: any, title: string, value: string }) {
    return <div className={style.card}>
        {ico}
        <p className={style.title}>{title}</p>
        <p className={style.value}>{value}</p>

    </div>
}