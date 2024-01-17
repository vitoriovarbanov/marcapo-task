import { Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { HomeRoute, CreateBookRoute, EditBookRoute } from './routes';

const App: React.FC = () => (
    <BrowserRouter>
        <Suspense fallback={<div className={styles.loadingWrapper}>Loading...</div>}>
            <Routes>
                <HomeRoute />
                <CreateBookRoute />
                <EditBookRoute />
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default App;
