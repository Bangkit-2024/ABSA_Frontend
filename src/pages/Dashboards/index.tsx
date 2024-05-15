import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Ecommerce = () => {

    const navigate = useNavigate();
    useEffect(() => navigate("/dashboard"), [navigate]);

    return (
        <React.Fragment>
            <div className="grid grid-cols-12 gap-x-5">
            </div>
        </React.Fragment>
    );
};

export default Ecommerce;
