import React from 'react';
import { Route } from 'react-router-dom';
import { lazy } from 'react';
import { paths } from '../paths';

const EditBook = lazy(() => import('../components/EditBook'));

const EditBookRoute: React.FC = () => <Route path={paths.editBook(':id')} element={<EditBook />} />;

export default EditBookRoute;
