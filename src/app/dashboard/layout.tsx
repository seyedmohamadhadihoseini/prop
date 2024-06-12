import "@public/dashtreme-master/assets/css/pace.min.css";
// import "@public/dashtreme-master/assets/plugins/vectormap/jquery-jvectormap-2.0.2.css";
import "@public/dashtreme-master/assets/plugins/simplebar/css/simplebar.css";
import "@public/dashtreme-master/assets/css/bootstrap.min.css";
import "@public/dashtreme-master/assets/css/animate.css";
import "@public/dashtreme-master/assets/css/icons.css";
import "@public/dashtreme-master/assets/css/sidebar-menu.css";
import "@public/dashtreme-master/assets/css/app-style.css";
import Script from "next/script";
import LoadBody from "./loadBody";
import SideBarWrapper from "./components/SideBarWrapper";
import TabBarHeader from "./components/TabBarHeader";
import Link from "next/link";
import ThemeChanger from "./components/ThemeChanger";
import PropFooter from "./components/Footer";
import "./style.css";
import FormTemplate from "./components/Form";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {


    return <div>
        <LoadBody />
        <div id="wrapper" style={{height:"100%",position:"absolute",bottom:0,top:0,right:0,left:0,width:"100%"}}>


            <SideBarWrapper />


            <TabBarHeader />


            <div className="clearfix"></div>
            <div className="content-wrapper dashboard-wrapper">
                <div className="dashboard-container">
                    {children}
                </div>
                </div>



            <Link href="#" className="back-to-top"><i className="fa fa-angle-double-up"></i> </Link>

{/* 

            <PropFooter/>  */}



            <ThemeChanger />


        </div>
        <Script src="/dashtreme-master/assets/js/jquery.min.js"></Script>
        <Script src="/dashtreme-master/assets/js/popper.min.js"></Script>
        <Script src="/dashtreme-master/assets/js/bootstrap.min.js"></Script>
        <Script src="/dashtreme-master/assets/plugins/simplebar/js/simplebar.js"></Script>
        <Script src="/dashtreme-master/assets/js/sidebar-menu.js"></Script>
        <Script src="/dashtreme-master/assets/js/jquery.loading-indicator.js"></Script>
        <Script src="/dashtreme-master/assets/js/app-script.js"></Script>
        <Script src="/dashtreme-master/assets/plugins/Chart.js/Chart.min.js"></Script>

        <Script src="@public/dashtreme-master/assets/js/pace.min.js" strategy="beforeInteractive" />
    </div>
}