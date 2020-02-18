import App from "../view/app";
import HomeEN from "../view/en/home-en";
import VisionEN from "../view/en/vision-en";
import AssociationEN from "../view/en/association-en";
import MediaEN from "../view/en/media-en";
import DevelopersEN from "../view/en/developers-en";
import PartnerEN from "../view/en/partner-en";
import WhitePaperEN from "../view/en/whitePaper-en";

const routes = [
    //首页
    {
        path: "/app",
        component: App,
        children:[
            {
                path: "/app/home-en",
                component: HomeEN
            },
            {
                path: "/app/vision-en",
                component: VisionEN
            },
            {
                path: "/app/association-en",
                component: AssociationEN
            },
            {
                path: "/app/media-en",
                component: MediaEN
            },
            {
                path: "/app/developers-en",
                component: DevelopersEN
            },
            {
                path: "/app/partner-en",
                component: PartnerEN
            },
            
            {
                path: "/app",
                redirect: "/app/home-en"
            }
        ]
    },
    {
        path: "/whiteParper-en",
        component: WhitePaperEN
    },
    {
        path: "/",
        redirect: "/app"
    }
];

export default routes