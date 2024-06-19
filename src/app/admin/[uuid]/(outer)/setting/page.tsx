import AdminLinkPart from "./AdminLink";
import TicketCategorySetting from "./TicketCategory";
import EmailSetting from "./email";

export default function SettingApp({ params }: { params: { uuid: string } }) {

    return <div>
        <TicketCategorySetting />
        <AdminLinkPart uuid={params.uuid} />
        {/* <EmailSetting/> */}
    </div>
}