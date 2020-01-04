import {Accommodations, Activities, Contact, Home, NotFound} from "./index";
import {RouteProps} from "react-router";

const defaultRoute: RouteProps = {
    component: Home
};

export enum APP_ROUTES {
    HOME = '/home',
    ACCOMMODATIONS = '/accommodations',
    ACTIVITIES = '/activities',
    CONTACT = '/contact',
    DEFAULT = '/',
    NOT_FOUND = ''
}

export const routes: RouteProps[] = [
    {
        path: APP_ROUTES.HOME,
        ...defaultRoute
    },
    {
        path: APP_ROUTES.ACCOMMODATIONS,
        component: Accommodations,
    },
    {
        path: APP_ROUTES.ACTIVITIES,
        component: Activities,
    },
    {
        path: APP_ROUTES.CONTACT,
        component: Contact,
    },
    {
        path: APP_ROUTES.DEFAULT,
        ...defaultRoute,
        exact: true
    },
    {
        path: APP_ROUTES.NOT_FOUND,
        component: NotFound
    }
];
