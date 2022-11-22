import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesConfig } from 'app/router/config/routes-config';

export function AppRouter():JSX.Element {
    return (
        <Suspense fallback='...Loading'>
            <Routes>
                {Object.values(RoutesConfig).map(({path, element}) =>
                    <Route
                        key={path}
                        path={path}
                        element={(<div className="page-wrapper"> {element} </div>)}
                    />)}
            </Routes>
        </Suspense>
    );
}