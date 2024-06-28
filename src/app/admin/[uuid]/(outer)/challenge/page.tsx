import ChallengeSettingList from "./challengeList";
import Mt5AddApp from "./mt5";


export default function ChallengeAdminApp() {

    return <div>
        <h3>Challenge Settings</h3>
        <ChallengeSettingList />
        <hr />
        <h3>MT5 Accounts</h3>
        <Mt5AddApp />
    </div>
}