
import { useRouter } from "next/navigation";
import style from "./style.module.css";
import CloseIcon from '@mui/icons-material/Close';
export default function Modal({ content,modalClose }: { content: any,modalClose:(x:boolean)=>void }) {
    const router = useRouter();

    return <div className={style.outer}>
        <div className={style.inner}>
        <div className={style.close} onClick={e=>{
            modalClose(false);
        }}>
        <CloseIcon  />
        <hr />

        </div>
            {content}
        </div>
    </div>
}