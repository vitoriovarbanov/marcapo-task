import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './paths';

const Home = lazy(() => import('./components/Home'));
const CreateBook = lazy(() => import('./components/CreateBook'));

const App: React.FC = () => (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={paths.home} element={<Home />} />
                <Route path={paths.createBook} element={<CreateBook />} />
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default App;
