import prisma from "@/services/singleton_prisma";
import ChallengeItem from "./item";
import style from "./style.module.css";
export default async function ChallengeSettingList() {
    const settings = await prisma.challengeSetting.findMany();
    const displaySettings = settings.map(setting => <ChallengeItem setting={setting} key={setting.id} />)

    return <div className={style.main}>
        {displaySettings}
    </div>
}