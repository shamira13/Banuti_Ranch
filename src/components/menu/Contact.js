import React from 'react';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';

const Contact = () => {
    return (
        <div className="card">
        <Card title="Ms. Ania Cella">
            
        <Avatar image="assets\layout\images\avatar-julia.png" size="large" shape="circle" />
            <p>
               Email Address: ania@pahappa.com                   
            </p>
            <p>0707811116 or 077781116</p>
            <p>Muteesa II Road, Ntinda</p>
            
        </Card>
    </div>
    );
};

export default Contact;