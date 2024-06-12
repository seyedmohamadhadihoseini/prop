import Link from "next/link";
import "./style.css";

export default function DashboardApp() {


    return <div id="all-container">
        <div id="dashboard-header">
            <div id="card-container">
                <Link href="#">
                    <div className="inter-container">
                        <img className="pico" src="/icon/target.png" />
                        <div className="description">
                            <h4>start  challenge</h4>
                            <p>Start the path to success in capital management</p>
                        </div>
                    </div>
                </Link>
                <Link href="#">
                    <div className="inter-container">
                        <img className="pico" src="/icon/book.svg" />
                        <div className="description">
                            <h4>Rules of Challenges</h4>
                            <p>Read the challenge rules</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div id="my-recent-challenge">
                <h4>My recent challenges</h4>
                <Link href="/dashboard/my_challenge">see all</Link>
            </div>
        </div>
        <div></div>
    </div>
}