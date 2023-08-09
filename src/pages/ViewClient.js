import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import data from '../assets/flags/clients.json';
import { Link } from 'react-router-dom';
import { TabMenu } from 'primereact/tabmenu';
import Users from './Users';
import Dashboard from './Dashboard';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Roles from './Roles';

const ViewClient = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const wizardItems = [

        { label: 'Company Information', command: () => navigate('/menu') },
        { label: 'Contact Person', command: () => navigate('/menu/seat') },
        { label: 'Product Lines', command: () => navigate('/menu/payment') },
        { label: 'Communications', command: () => navigate('/menu/confirmation') }
    ];
    return (

        <div className="layout-dashboard" >
            <div className="col-12 lg:col-6 xl:col-2" style={{ marginLeft: '90%' }}>
                <Link to="/"> <Button label="Back" icon="pi pi-chevron-left" style={{ backgroundColor: 'green', borderBlockColor: 'red' }} className="mr-2 mb-2" ></Button></Link>
            </div>

            <div className="grid" style={{ justifyContent: 'space-between' }}>
                <div className="col-12 xl:col-12">

                    <div className="card card-w-title">
                       
                        <TabMenu model={wizardItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                        <Routes>
                            <Route exact path={'/'} element={<Dashboard />} />
                            <Route path={'/users'} element={<Users />} />
                            <Route path={'/Roles'} element={<Roles />} />
                        </Routes>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default ViewClient;