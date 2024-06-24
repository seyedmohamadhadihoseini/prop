import CurrentUser from "@/functions/CurrentUser"
import prisma from "@/services/singleton_prisma"
import { User } from "@prisma/client";

export default async function RefferalChallengeTable() {
    const user: User = await CurrentUser();
    const challenges = await prisma.user.findMany({
        where: {
            parentReferralCode: user.referralCode
        }, include: {
            Challenges: true
        }
    });
    
    return <div className="row">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">referral's Challenges</h5>
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td >Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
}