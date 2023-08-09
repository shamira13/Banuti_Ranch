import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import data from '../assets/flags/Roles.json';
import AddUser from './AddUser';

function Roles(){

    const [setDisplayBasic] = useState(false);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const  navigate = useNavigate();

    const confirmationDialogFooter = (
        <>
            <Button type="button" label="No" icon="pi pi-times" onClick={() => setDisplayConfirmation(false)} className="p-button-text" />
            <Button type="button" label="Yes" icon="pi pi-check" onClick={() => setDisplayConfirmation(false)} className="p-button-text" autoFocus />
        </>
    );

    return (
    <><div class="flex justify-content-end flex-wrap card-container green-container">
    <Button type="button" label="Back" className="mr-2 mb-2" style={{ backgroundColor: '#239B47', marginLeft: '90%', marginBottom:'18%'  }}></Button>
</div>
    <div className='grid ' style={{backgroundColor: "white"}}>
    <div className="col-12 lg:col-6 xl:col-6"  >
        <div style={{ width: '250%' }}>
            <InputText id="firstname1" type="text" placeholder="Enter any information about a user" style={{ width: '40%' }} />
        </div>
    </div>
    <div className="col-12 lg:col-6 xl:col-2" >
        <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" style={{backgroundColor:'green'}}></Button>
    </div>
    <div className="col-12 lg:col-6 xl:col-2" >
        <Button type="button" label="Export" icon="pi pi-arrow-circle-up" onClick={() => { navigate("/AddUser") }} style={{ backgroundColor: "#239B47" }} />
    </div>
    <div className="col-12 lg:col-6 xl:col-2" >
        <Button type="button" label="Add New" icon="pi pi-plus" onClick={() => { navigate("/AddUser") }} style={{ backgroundColor: "#239B47"}} />
    </div>
   
</div>

        <><h5>Roles</h5>
        <DataTable value={data}>
            <Column field="No" header="No." style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
            <Column field="Role" header="Role" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
            <Column field="description" header="Description" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
            <Column field="permissions" header="Permissions" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
            <Column field="action" header="Action" style={{ flexGrow: 1, flexBasis: '200px' }} body={() => <><><Button type="button" icon="pi pi-pencil" onClick={() => setDisplayBasic(true)}style={{backgroundColor:"#239B47"}}></Button></><Button type="button" icon="pi pi-trash" className="p-button-danger" onClick={() => setDisplayConfirmation(true)}></Button></>}></Column>
        </DataTable>
        <Dialog header="Confirmation" visible={displayConfirmation} onHide={() => setDisplayConfirmation(false)} style={{ width: '350px' }} modal footer={confirmationDialogFooter}>
                            <div className="flex align-items-center justify-content-center">
                                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                                { (
                                <span>Are you sure you want to delete <b>{data.name}</b>?</span>
                                )}
                            </div>
                            </Dialog>
      </></>

            );
};
export default Roles;
