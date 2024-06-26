import CurrentUser from "@/functions/CurrentUser"
import prisma from "@/services/singleton_prisma"
import { User } from "@prisma/client";
import RefferalChallengeTableItem from "./item";

export default async function RefferalChallengeTable() {
    const user: User = await CurrentUser();
    const users = await prisma.user.findMany({
        where: {
            parentReferralCode: user.referralCode
        }, include: {
            Challenge: {
                where: {
                    isPaid: true
                }, include: {
                    setting: true
                }
            }
        }
    });
    let AllCount = 0; let AllPrice = 0;
    const displayUsers = users.map((user, index) => {
        const count = user.Challenge.length;
        const price = user.Challenge.reduce(
            (accumulator, currentValue) => accumulator + currentValue.setting.price,
            0,
        )
        AllPrice += price;
        AllCount += count;
        return <RefferalChallengeTableItem
            number={index + 1} count={count}
            name={user.email} price={price}
            key={user.id}
        />
    })
    return <div className="row">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        referral's Challenges
                    </h5>
                    <p style={{textAlign:"center"}}>total price:{AllPrice}$</p>
                    <div className="table-responsive">
                        <table className="table table-hover" style={{ textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">user</th>
                                    <th scope="col">total count</th>
                                    <th scope="col">total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayUsers}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
}