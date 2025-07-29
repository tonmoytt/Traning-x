import React from 'react';
import "./expertice.css"

const Expertice = () => {
    return (
        <div>
            <div className=" bg-lightblue py-8">

                <div>
                    <h2 className="expertise-heading">
                        <span className="text-pink">আমাদের দক্ষতা সমূহ</span>
                    </h2>
                </div>

                <div className="grid md:flex justify-center gap-6">
                    <div className="expertise-card bg-yellow">
                        <img src="src/assets/image/enterprise-applications-image.png" alt="Enterprise Applications" />
                        <h3 className="text-center text-xl font-semibold mt-4">Enterprise Applications</h3>
                    </div>
                    <div className="expertise-card bg-core">
                        <img src="src/assets/image/artificial-intelligence-image.png" alt="Artificial Intelligence" />
                        <h3 className="text-center text-xl font-semibold mt-4">Artificial Intelligence</h3>
                    </div>
                    <div className="expertise-card bg-pink">
                        <img src="src/assets/image/marketplace-applications-image.png" alt="Marketplace Applications" />
                        <h3 className="text-center text-xl font-semibold mt-4">Marketplace Applications</h3>
                    </div>
                    <div className="expertise-card bg-darkblue">
                        <img src="src/assets/image/fintech-applications-image.png" alt="Fintech Applications" />
                        <h3 className="text-center text-xl font-semibold mt-4">Financial Applications</h3>
                    </div>
                    <div className="expertise-card bg-blue">
                        <img src="src/assets/image/ecommerce-platforms-image.png" alt="E-Commerce Platforms" />
                        <h3 className="text-center text-xl font-semibold mt-4">E-Commerce Platforms</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertice;
