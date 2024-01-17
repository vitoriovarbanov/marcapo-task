import React from 'react';
import { Route } from 'react-router-dom';
import { lazy } from 'react';
import { paths } from '../paths';

const Home = lazy(() => import('../components/Home'));

const HomeRoute: React.FC = () => <Route path={paths.home} element={<Home />} />;

export default HomeRoute;
