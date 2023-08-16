
           
import React from 'react'; 
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';

const CompanyInfo = () => {
    return (
        <div className="card">
            <Card title="Pahappa Limited">
                
            <Avatar image="assets\layout\images\avatar-julia.png" size="large" shape="circle" />
                <p>
                   Email Address: info@pahappa.com                   
                </p>
                <p>0707811116 or 077781116</p>
                <p>Muteesa II Road, Ntinda</p>
                <p>Assignee: Shamira Naiga</p>
                <p>Referral Source: Website</p>
            </Card>
        </div>
    );
};
     

export default CompanyInfo;