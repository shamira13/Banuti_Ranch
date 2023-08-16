import CompanyInfo from './CompanyInfo';
import { Route, Routes, useNavigate} from 'react-router-dom';
import { Steps } from 'primereact/steps';
import Contact from './Contact';
import React, {  useState } from 'react';

const ProductLines = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const wizardItems = [

        { label: 'Lead', command: () => navigate('/menu') },
        { label: 'Prospect', command: () => navigate('/menu/Contact') },
        { label: 'Full Client', command: () => navigate('/menu/productlines') },
      
    ];

    return (
        <div className="col-12 md:col-6">
        <div className="card card-w-title">
            <h5>Steps</h5>
            <Steps model={wizardItems} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
            <Routes>
                <Route exact path={'/'} element={<CompanyInfo />} />
                <Route path={'/contact'} element={<Contact />} />
                <Route path={'/productlines'} element={<ProductLines />} />
                
            </Routes>
        </div>
    </div>
    );
};

export default ProductLines;