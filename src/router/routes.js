import App from "../view/app";
import Home from "../view/home";
import Vision from "../view/vision";
import Association from "../view/association";
import Media from "../view/media";
import Developers from "../view/developers";
import Partner from "../view/partner";
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
                path: "/app/developers",
                component: Developers
            },
            {
                path: "/app/partner",
                component: Partner
            },
            {
                path: "/app/whiteParper",
                component: WhitePaper
            },
            {
                path: "/app",
                redirect: "/app/home"
            }
        ]
    },
    {
        path: "/",
        redirect: "/app"
    }
];

export default routes