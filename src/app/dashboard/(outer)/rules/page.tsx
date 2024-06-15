import prisma from "@/services/singleton_prisma"
import RuleItem from "./item"

export default async function Rules() {
    const displayRules = rulesData.map(rule => <RuleItem key={rule.header} content={rule.content} header={rule.header} />)
    return <div>
        {displayRules}
    </div>
}
const rulesData: { header: string, content: string }[] = [
    {
        header: "The rules of the first stage",
        content: `Account: Demo / Propridge exclusive server broker

Duration: There is no time limit

Profit target: 8%

Daily Allowance: 5%

Total permissible drawdown: 12%

Minimum number of trading days: 5 days`},
    {
        header: "Second stage rules", content: `Account: Demo / Propridge exclusive server broker

Duration: There is no time limit

Profit target: 4%

Daily Allowance: 5%

Total permissible drawdown: 12%

Minimum number of trading days: 5 days`}, {
        header: "prop account rules", content: `Account: Demo / Propridge exclusive server broker

Time limit: none

Profit target: none

Daily Allowance: 5%

Total permissible drawdown: 12%

Minimum number of trading days: None

Profit distribution: every two weeks with a ratio of 80% to the trader (withdrawal of the first profit after 30 days) and deposit with digital currency Thether USDT (TRC20)`
    }
,{
    header:"Authentication rules",
    content:`After reaching the targets of the two stages and checking the status of the accounts and confirming the acceptance in the stages (passing the message in the analysis panel), the trader is obliged to send his documents for authentication through the user panel.
Your name and surname must be the same as the information on your ID card`
},{
    header:"Challenge account information rules",
    content:`The trader has no right to change the account information, i.e. the main password and the investor password. In this case, the rules have been violated and his challenge will be rejected.`
},{
    header:"Rules for calculating the start time of the challenge",
    content:`Account creation in Propy is done by the trader himself. According to this rule, after creating a user account on Propy and preparing a challenge, the trader has a 30-day deadline to create his own challenge and register the first trade in the first step. 
In the second stage, after passing the first stage, the trader has 15 days to request the start of the second stage challenge. After sending the request and receiving the challenge of the second stage, the trader has 30 days to make the first trade.`
}



]