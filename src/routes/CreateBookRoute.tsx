import React from 'react';
import { Route } from 'react-router-dom';
import { lazy } from 'react';
import { paths } from '../paths';

const CreateBook = lazy(() => import('../components/CreateBook'));

const CreateBookRoute: React.FC = () => <Route path={paths.createBook} element={<CreateBook />} />;

export default CreateBookRoute;
