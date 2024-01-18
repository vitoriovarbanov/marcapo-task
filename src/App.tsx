import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './paths';
import styles from './App.module.scss';

const Home = lazy(() => import('./components/Home'));
const CreateBook = lazy(() => import('./components/CreateBook'));
const EditBook = lazy(() => import('./components/EditBook'));

const NotFound: React.FC = () => (
    <div>
        <h2>404 - Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
    </div>
);

const App: React.FC = () => (
    <BrowserRouter>
        <Suspense fallback={<div className={styles.loadingWrapper}>Loading...</div>}>
            <Routes>
                <Route path={paths.home} element={<Home />} />
                <Route path={paths.createBook} element={<CreateBook />} />
                <Route path={paths.editBook(':id')} element={<EditBook />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default App;
