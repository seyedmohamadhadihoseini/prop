import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./style.css";
export default function Pagination({ skip, setSkip, take }: { skip: number, setSkip: (x: number) => void, take: number }) {
    return <div className="pagination">
        <div className="next-page" title="next page" onClick={e => {
            setSkip(skip + take);
        }}>
            <ArrowForwardIcon />
        </div>
        <div className="pre-page" title="previous page" onClick={e => {
            if (skip - take >= 0) {
                setSkip(skip - take);
            }

        }}>
            <ArrowBackIcon />
        </div>
    </div>
}