import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const FavouritesPage = lazy(() => import('./views/Favourites'))
const IndexPage = lazy(() => import('./views/IndexPage'))
import Layout from './layouts/Layout';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={
                        <Suspense fallback="Cargado...">
                            <IndexPage />
                        </Suspense>
                    } index />
                    <Route path='/favoritos' element={
                        <Suspense fallback="Cargado...">
                            <FavouritesPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;