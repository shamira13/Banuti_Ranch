import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { TabMenu } from 'primereact/tabmenu';
import { Menu } from 'primereact/menu';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import CompanyInfo from './menu/CompanyInfo';
import Contact from './menu/Contact';
import Communications from './menu/Communications';
import ProductLines from './menu/ProductLines';

const ViewClient = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const menu = useRef(null);

    const wizardItems = [

        { label: 'Company Information', command: () => navigate('/menu') },
        { label: 'Contact Person', command: () => navigate('/menu/contact') },
        { label: 'Product Lines', command: () => navigate('/menu/productlines') },
        { label: 'Communications', command: () => navigate('/menu/communications') }
    ];

    const checkActiveIndex = useCallback(() => {
        const paths = location.pathname.split('/');
        const currentPath = paths[paths.length - 1];

        switch (currentPath) {
            case 'contact':
                setActiveIndex(1);
                break;
            case 'productlines':
                setActiveIndex(2);
                break;
            case 'communications':
                setActiveIndex(3);
                break;
            default:
                break;
        }
    }, [location]);
    useEffect(() => {
        checkActiveIndex();
    }, [checkActiveIndex]);

    return (

        <div className="layout-dashboard" >
            <div className="col-12 lg:col-6 xl:col-2" style={{ marginLeft: '90%' }}>
                <Link to="/"> <Button label="Back" icon="pi pi-chevron-left" style={{ backgroundColor: 'deep purple' }} className="mr-2 mb-2" ></Button></Link>
            </div>

            <div className="grid" style={{ justifyContent: 'space-between' }}>
                <div className="col-12 xl:col-12">

                    <div className="card card-w-title">

                        <TabMenu model={wizardItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                        <Routes>
                            <Route exact path={'/'} element={<CompanyInfo />} />
                            <Route path={'/contact'} element={<Contact />} />
                            <Route path={'/productlines'} element={<ProductLines />} />
                            <Route path={'/communications'} element={<Communications />} />
                        </Routes>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default ViewClient;