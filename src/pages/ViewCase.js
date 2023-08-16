import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const ViewCase = () => {

    return (
        <><div className="grid" style={{ backgroundColor: 'white', marginBottom: '2%' }}>
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card">
                    <Card title="Case No: TP-6839">
                        <p className="m-0">
                            Date Reported: 16/08/2023
                        </p>
                        <p>By: Shamira Naiga</p>
                        <h3 style={{ textAlign: 'center', fontWeight: 'bolder' }}>NEW</h3>
                    </Card>
                    <p>Case Details</p>
                    <p>Attachments</p>
                    <p>Case Notes</p>
                    <p>Logs</p>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-8">
                <div className="card">

                    <Button label="In Progress" className="mr-2 mb-2" style={{ backgroundColor: 'gray', borderBlockColor: 'gray' }} ></Button>
                    <Button label="Escalate" className="mr-2 mb-2" style={{ backgroundColor: 'gray', borderBlockColor: 'gray' }}></Button>
                    <Button label="Oh Hold" className="mr-2 mb-2" style={{ backgroundColor: 'gray', borderBlockColor: 'gray' }}></Button>
                    <Button label="Close" className="mr-2 mb-2" style={{ backgroundColor: 'gray', borderBlockColor: 'gray' }}></Button>

                    <Card title="Case Details">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </Card>
                </div>
            </div>
        </div></>
    );
};
export default ViewCase;