import cls from './app.module.scss';
import {buildNames} from "services/build-css-class-names/build-css-class-names";
import { Suspense } from 'react';
import {AppRouter} from "app/router/app-router";

export function App(): JSX.Element {
    return(
        <div className={buildNames([cls.app])}>
            <Suspense fallback='...Loading'>
                    <AppRouter />
            </Suspense>
        </div>
    );
};
