import React from 'react';
import {useNavigate} from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
        <section className="error-section">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="error-content">
                            <p className='error-heading'><span className='error-str'>Error</span> <span className='error-num'>404</span></p>
                            <p className='error-desc'>Page Not Found</p>
                            <button className="button" onClick={() => navigate("/") }>Back to Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default ErrorPage;