import App from "../view/app";
import Home from "../view/home";
import Vision from "../view/vision";
import Association from "../view/association";
import Media from "../view/media";
import Developers from "../view/developers";
import Partners from "../view/partners";
import WhitePaper from "../view/whitePaper";

const routes = [
    //首页
    {
        path: "/app",
        component: App,
        children:[
            {
                path: "/app/home",
                component: Home
            },
            {
                path: "/app/vision",
                component: Vision
            },
            {
                path: "/app/association",
                component: Association
            },
            {
                path: "/app/media",
                component: Media
            },
            
            {
                path: "/app/partners",
                component: Partners
            },
            {
                path: "/app",
                redirect: "/app/home"
            }
        ]
    },
    {
        path: "/developers",
        component: Developers
    },
    {
        path: "/whiteParper",
        component: WhitePaper
    },
    {
        path: "/",
        redirect: "/app"
    }
];

export default routes