import React from 'react'
import PrivateRoutes from './private/PrivateRoutes'
import PublicRoutes from './public/PublicRoutes'

const CheckAuth: React.FC = () => {
    const auth: Boolean = false
    return (
        auth ? <PrivateRoutes /> : <PublicRoutes />
    )
}

export default CheckAuth