import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/main-page";
import {NotFoundPage} from "pages/not-found-page";

export const enum PathsNames {
    Main ='main',
    NotFound = "page-not-found"
}

export const RoutesConfig: Record<PathsNames, RouteProps> =  {
    [PathsNames.Main]: {path: '/', element: <MainPage />},
    [PathsNames.NotFound]: {path: '*', element: <NotFoundPage />},
};