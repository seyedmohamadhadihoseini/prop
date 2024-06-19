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
    , {
        header: "Authentication rules",
        content: `After reaching the targets of the two stages and checking the status of the accounts and confirming the acceptance in the stages (passing the message in the analysis panel), the trader is obliged to send his documents for authentication through the user panel.
Your name and surname must be the same as the information on your ID card`
    }, {
        header: "Challenge account information rules",
        content: `The trader has no right to change the account information, i.e. the main password and the investor password. In this case, the rules have been violated and his challenge will be rejected.`
    }, {
        header: "Rules for calculating the start time of the challenge",
        content: `Account creation in Propy is done by the trader himself. According to this rule, after creating a user account on Propy and preparing a challenge, the trader has a 30-day deadline to create his own challenge and register the first trade in the first step.
In the second stage, after passing the first stage, the trader has 15 days to request the start of the second stage challenge. After sending the request and receiving the challenge of the second stage, the trader has 30 days to make the first trade.`
    }, {
        header: "Drawdown Rules",
        content: `The basis for daily drawdown calculation is the starting balance of the day and the overall drawdown basis is the initial balance of the account.

During a trading day, the equity of the account should not reach below 5% of the balance at the beginning of the day, in this case, the rules have been violated and the challenge or the rail account will be rejected.

If the account balance increases with profit during a day, it will still be the basis for calculating the daily drawdown of the starting balance, that is, you will be allowed to take more risk. For example, if the balance at the beginning of the day is 10,000 and the account balance reaches 10,200 during the day, now you will have the possibility of risking $700 during the same day.

If the account balance goes to the next day with 10,200, the basis for calculating the daily balance will be 5% of the balance at the beginning of the day. That is (10200*5% = 510)
The total drawdown of the account is 12%, which is calculated from the starting balance of the account. And with a drop in equity (open transactions) amounting to 12% of the initial balance of the account, the drawdown will be violated.`
    }
    , {
        header: "Interest deposit and withdrawal rules",
        content: `Deposits and withdrawals are made through digital currencies (Litecoin, Tether). At the time of profit withdrawal, the trader informs Propiy about the profit withdrawal request, and after checking the account status, the profit is divided and deposited for the trader, and the account is reset to start again. If violations are found, there will be no withdrawal for the trader.

Withdr
awals are automatically processed at any time you want and you will receive a new Real account 
in less than 24 hours.
For the first withdrawal, at least 30 days must have passed since receiving the Real account, which is reduced to 14 days from the second withdrawal.
These conditions will be implemented for the best possible management of Propy prop form and moving towards quality and service conditions equal to valid international prop forms (FTMO, MFF, etc.).`
    }, {
        header: "Refund rules",
        content: `
        After passing the two challenge stages, with the first profit withdrawal, a 130% refund will be made to the trader through digital currencies.
        `
    }, {
        header: "Hedging rules",
        content: `
        The trader should not trade between the trading accounts in all stages of the challenge or rail, or with other traders in Propy or with other prop forms, if the violation is done in such conditions, the accounts will be taken from the trader and the right to return the money for There will be no trader or traders involved in the transaction hedge, and Propy has the right to terminate cooperation with the trader immediately. The use of trading hedges between accounts is outside the principles of correct risk management for the use of proprietary services and capital management.
        `
    }, {
        header: "The terms of the rules of light trade are prohibited",
        content: `
            The use of very high leverage and outside of the appropriate risk creates problems for the management and provision of prop form prop services in the right way.

Traders who try to create more than 80% of the target profit with a trading position in one trade or several trades on a trading symbol to pass the challenge or trade in very high-risk rail accounts will not be accepted and violate the rules of risk management. and the trader's challenge account will not be accepted to pass the challenge or pay the generated profit. Of course, this rule does not apply to traders who have multiple transactions and their own trading style. The purpose of this law is only to prevent people who intend to go through all the steps with hedging or high risk.
        (Keep in mind that such conditions can be seen in valid prop-forms such as FTMO clause 5.4.1 in the terms and conditions section and you can read them in their prohibited trading methods. This law will prevent people who violate the prop-form conditions from abuse.)

This rule will be applied from January 9th to check the accuracy of all accounts in all stages of challenges and rail accounts and will be added to the prop rules page.

We hope to be able to provide suitable conditions for successful and talented traders and provide a suitable and stable environment for providing services in Propy.
        `
    }, {
        header: "Rules of acceptable styles for trading",
        content: `We accept all trade styles such as swing, daily trade, scalp.`
    }, {
        header: "Rules for using Stop Loss",
        content: `Rules for the number of simultaneous active accounts for each trader`
    }, {
        header: "Rules for the number of simultaneous active accounts for each trader",
        content: `Each trader can have up to 3 accounts at the same time in the Propiy form, if they reach the Real Propiy account stage after two challenge stages, they can be merged.`
    }, {
        header: "Copy Trade Rules",
        content: `
        The trader should not do copy trading from other people's accounts. Only copy trade between one's own accounts is allowed.
        `
    }, {
        header: "Group trading team rules",
        content: `
        If you trade as a group and have several accounts at the group's disposal, as long as the trades are not done by copy trade (that is, in 90% of the entry points and profit and loss limits, there is no problem with team trading).

The capital limit for trading as a group is $300,000 as a general statement for all group members.

For group trading, a ticket must be registered for the group trading team.
        `
    }, {
        header: "Rules for using the robot and EA",
        content: `
        It's okay to use a trading robot (EA) only if it's one's intellectual property
         and proof of making the robot, otherwise we can't accept it, because your
          skill is important for our capital management. There is nothing wrong with using trader's assistants such as trading boards, etc., which are used for risk management. The use of robots or delayed arbitrage will not be accepted in this prop-form because it is not used in copy trade conditions.
        `
    }, {
        header: "Violation of Latency Arbitrage",
        content: `
            Whenever, at the same time, in the same symbol, the price of a broker is presented with a different market price, and the trader uses this price difference for unrealistic profit trading on the demo servers, the profit created is unrealistic and against the rules of all prop forms. And it is also prop form prop. In this situation, the trader will be given a one-time notice of delayed arbitrage, and the generated trade profit will not be taken into account. If repeated, the trader's challenge account is considered failed and the trader cannot continue trading on the challenge or rail account.
        `
    }, {
        header: "Martingale rules",
        content: `
        There is no problem using martingale. If robots are used for this purpose, the robot must be designed by the trader himself. To prove this, first register a ticket on the site so that we can check.
        `
    }, {
        header: "Rules, conditions and problems from the side of the broker server",
        content: `
        In case of problems such as broker outage, etc., Propiy will try to cooperate with traders as much as possible. (To reduce problems like this, we suggest using suitable hardware and high-speed internet such as Zitel, ADSL and TD-LTE modems, and always make sure of a quality internet connection.)
        `
    }, {
        header: "Capital increase conditions",
        content: `
        It has been 3 months since I received the Real account

- Attending 3 withdrawals (there is no need for consecutive withdrawals)

-Earning a total of 8% profit

- Having a positive account at the time of sending the capital increase request

After meeting the conditions of the REAL account, the trader will be given a 30% increase in capital after taking the profit, and the profit sharing will increase to 90%.

Capital increase of 30% in 3-month cycles and with the conditions mentioned above will be repeatable up to one million dollars.
The condition of receiving 90% profit in the merger of accounts with a capital increase plan (Scale up) will also be possible, and in case of a request to merge with accounts without capital increase, the profit sharing will be returned to the amount of 80%.
        `
    }, {
        header: "Challenge time on Propridge dedicated server",
        content: `
        Active accounts on Propridge's dedicated server do not have a time limit on challenges and rails; But traders are required to make their trades with a maximum interval of 30 days to maintain their account.

If you do not trade on your account within 30 days, your account will be considered rejected
        `
    }


]