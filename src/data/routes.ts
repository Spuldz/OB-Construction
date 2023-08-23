import { Contact } from "../pages/Contact";
import { Inserting } from "../pages/Inserting";
import { Landing } from "../pages/Landing";
import { Renovation } from "../pages/Renovation";
import { WoodenFurniture } from "../pages/WoodenFurniture";
import { YardSettling } from "../pages/YardSettling";

type Route = {
    route: string,
    component: any
}

export const routes:Route[] = [
    {
        route: "/",
        component: Landing
    },
    {
        route: "/ieklasana",
        component: Inserting
    },
    {
        route: "/koka-mebeles",
        component: WoodenFurniture
    },
    {
        route: "/kontakti",
        component: Contact
    },
    {
        route: "/labiekartosana",
        component: YardSettling
    },
    {
        route: "/renovacija",
        component: Renovation
    }
] 

