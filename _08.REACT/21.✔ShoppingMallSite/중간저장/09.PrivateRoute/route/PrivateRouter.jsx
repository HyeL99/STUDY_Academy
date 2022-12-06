import React from 'react';
import { Navigate } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';

const PrivateRouter = ({authenticate}) => {
  return authenticate === false? <Navigate to='/login' /> : <ProductDetail />
}

export default PrivateRouter