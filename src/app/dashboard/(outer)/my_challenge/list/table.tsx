"use client";

export default function MyChallengeTable({ displayList }: { displayList: React.JSX.Element[] }) {

    return <div className="col-lg-12" style={{ textAlign: "center", marginLeft: "-1%" }}>
        <div className="card">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Login_Number</th>
                            <th scope="col">password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayList}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}