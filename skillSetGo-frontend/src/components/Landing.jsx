import CenterPart from "../helper/CenterPart"
import Footer from "../helper/Footer"
import Impact from "../helper/Impact"
import Problem from "../helper/Problem"
import Solution from "../helper/Solution"
import Stakeholders from "../helper/Stakeholders"
import Topbar from "../helper/Topbar"
export default function Landing(){
    return <div>
        <Topbar></Topbar>
        <CenterPart></CenterPart>
        <Problem></Problem>
        <Impact></Impact>
        <Solution></Solution>
        <Stakeholders></Stakeholders>
        <Footer></Footer>
    </div>
}