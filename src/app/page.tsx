import { Hash } from "@/services/bcrypt";
import "./style.css";
export default async function Home(){
  const hashed = "$2b$13$Wej0NDMTInu06lBWaRkzDetRxSREdFNkDKtDdp/oMFhp2I6oQMgIG".replaceAll("/","r");
  
  return <div className="container">
    <div className="inner">
        {hashed}
    </div>
  </div>
}