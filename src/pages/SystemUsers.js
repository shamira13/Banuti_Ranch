import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import data from '../assets/flags/systemusers.json';
import { Sidebar } from 'primereact/sidebar';
import { confirmPopup } from 'primereact/confirmpopup';
import { Dropdown } from 'primereact/dropdown';

function SystemUsers() {

    const [displayBasic, setDisplayBasic] = useState(false);

    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const navigate = useNavigate();

    const confirmationDialogFooter = (
        <>
            <Button type="button" label="No" icon="pi pi-times" onClick={() => setDisplayConfirmation(false)} className="p-button-text" />
            <Button type="button" label="Yes" icon="pi pi-check" onClick={() => setDisplayConfirmation(false)} className="p-button-text" autoFocus />
        </>
    );
    const [visibleRight, setVisibleRight] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Male', code: 'option 1' },
        { name: 'Female', code: 'option 2' }
    ];
    const toast = useRef(null);
    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    }
    return (
        <div className='flex flex-column gap-2'>
            <div class="flex justify-content-end flex-wrap card-container green-container">
                <Button type="button" label="Back" className="mr-2 mb-2" style={{ backgroundColor: 'amber', marginLeft: '90%', marginBottom: '18%' }}></Button>
            </div>

            <div className='grid ' style={{ backgroundColor: "white" }}>
                <div className="col-12 lg:col-6 xl:col-6"  >
                    <div style={{ width: '250%' }}>
                        <InputText id="firstname1" type="text" placeholder="Enter any information about a user" style={{ width: '40%' }} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" style={{ backgroundColor: 'amber' }}></Button>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button type="button" label="Export" icon="pi pi-arrow-circle-up" onClick={() => { navigate("/AddUser") }} style={{ backgroundColor: "amber" }} />
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button type="button" label="Add New" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} style={{ backgroundColor: "deep purple" }} />
                </div>

            </div>
            <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New User" visible={displayBasic} style={{ width: '30vw' }} onHide={() => setDisplayBasic(false)}  >
                    <div className="col-12">
                        <div className="card">
                        <div className="field col-12">
                                <label for="clientid">Username</label>
                                <input id="clientid" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>
                            <div className="field col-12">
                                <label for="clientname">First Name</label>
                                <input id="clientname" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>
                            <div className="field col-12">
                                <label for="location">Last Name</label>
                                <input id="location" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>
                            <div className="field col-12">
                                <label for="contact">Contact</label>
                                <input id="contact" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="state">Gender</label>
                                <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                            </div>

                            <div className="field col-12">
                                <label for="action">Password</label>
                                <input id="action" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>
                            <div class="flex justify-content-center " >
                            <div className="field col-12 md:col-6" >
                                <Button label="Save" icon="pi pi-save" className="mr-2 mb-2" style={{ backgroundColor: 'green', borderBlockColor: 'green' }}></Button>
                            </div>
                            <div className="field col-12 md:col-6" >
                                <Button label="Cancel" icon="pi pi-times" className="mr-2 mb-2" style={{ backgroundColor: 'red', borderBlockColor: 'red' }}></Button>
                            </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
            <Sidebar visible={visibleRight} onHide={() => setVisibleRight(false)} baseZIndex={1000} position="right">
                <h1 style={{ fontWeight: 'normal' }}>Profile</h1>
                <div className='profile'>
                    <img src="assets/layout/images/avatar.png" alt="babylon-layout" />
                    <span className="layout-profile-name">Administrator</span>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <b><h5>Profile Details</h5></b>
                    </div>
                    <div className='col-4'>
                        <h7>Full Name:</h7>
                    </div>
                    <div className='col-6'>
                        <h7>Email address:</h7>
                    </div>
                    <div className='col-8'>
                        <h7>Phone number:</h7>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-2'>
                        <b><h5>Client Stats</h5></b>
                    </div>
                    <div className='col-4'>
                        <h7>Total Clients:</h7>
                    </div>
                    <div className='col-6'>
                        <h7>This week:</h7>
                    </div>
                    <div className='col-8'>
                        <h7>Today:</h7>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-2'>
                        <b><h5>Communications</h5></b>
                    </div>
                    <div className='col-4'>
                        <h7>Total:</h7>
                    </div>
                    <div className='col-6'>
                        <h7>Conversion rate:</h7>
                    </div>
                    <div className='col-8'>
                        <h7>This week</h7>
                    </div>

                </div>
            </Sidebar>



            <><h5>System Users</h5>
                <DataTable value={data} paginator rows={5} className="p-datatable-products">
                    <Column field="id" header="No." style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                    <Column field="image" header="Image" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                    <Column field="first_name" header="Full Name" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="username" header="Username" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="added" header="AddedBy" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                    <Column field="action" className='flex gap-2' header="Action" style={{ flexGrow: 1, flexBasis: '200px' }} body={() => <><><><Button type="button" icon="pi pi-pencil" onClick={() => setDisplayBasic(true)} style={{ backgroundColor: "#239B47" }}></Button></><Button type="button" icon="pi pi-trash" className="p-button-danger" onClick={() => setDisplayConfirmation(true)}></Button></><Button type="button" icon="pi pi-eye" className="p-button-danger" onClick={() => setVisibleRight(true)}></Button></>}></Column>
                </DataTable>
                <Dialog header="Confirmation" visible={displayConfirmation} onHide={() => setDisplayConfirmation(false)} style={{ width: '350px' }} modal footer={confirmationDialogFooter}>
                    <div className="flex align-items-center justify-content-center">
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        {(
                            <span>Are you sure you want to delete <b>{data.name}</b>?</span>
                        )}
                    </div>
                </Dialog>
            </>
        </div>

    );
};
export default SystemUsers;
