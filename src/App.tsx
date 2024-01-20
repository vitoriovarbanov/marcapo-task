import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './paths';
import styles from './App.module.scss';
import Layout from './layout';

const Home = lazy(() => import('./components/Home'));
const CreateBook = lazy(() => import('./components/CreateBook'));
const EditBook = lazy(() => import('./components/EditBook'));
const NotFound = lazy(() => import('@components/404'));

const App: React.FC = () => (
    <BrowserRouter>
        <Suspense fallback={<div className={styles.loadingWrapper}>Loading...</div>}>
            <Layout>
                <Routes>
                    <Route path={paths.home} element={<Home />} />
                    <Route path={paths.createBook} element={<CreateBook />} />
                    <Route path={paths.editBook(':id')} element={<EditBook />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Suspense>
    </BrowserRouter>
);

export default App;
