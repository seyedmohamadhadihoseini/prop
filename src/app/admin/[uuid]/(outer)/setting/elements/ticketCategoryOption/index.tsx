
import "./style.css";
import DeleteIcon from '@mui/icons-material/Delete';
export default function TicketCategoryOption({ name }: { name: string }) {
    return <option className="ticket-category-main-option" value={name}>
        <div className="ticket-category-option">
            <p>{name}</p>
        </div>
    </option>
}