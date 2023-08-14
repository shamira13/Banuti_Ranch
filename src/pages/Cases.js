import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';
import data from '../assets/cases.json';


const Cases = () => {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [display, setDisplay] = useState(false);

    return (

        <div className="layout-dashboard" >
            <div className="col-12 lg:col-6 xl:col-2" style={{ marginLeft: '90%' }}>
                <Link to="/"> <Button label="Back" icon="pi pi-chevron-left" style={{ backgroundColor: 'orange', borderBlockColor: 'red' }} className="mr-2 mb-2" ></Button></Link>
            </div>


            <div className="col-12">
                <div className="card">
                    <div className="grid p-fluid" style={{ justifyContent: 'flex-end' }}>


                        <div className="col-12 lg:col-6 xl:col-2" >
                            <Button label="New Case Type" icon="pi pi-plus" className="mr-2 mb-2" style={{ backgroundColor: 'blue' }} onClick={() => setDisplayBasic(true)}></Button>
                        </div>
                        <div className="col-12 lg:col-6 xl:col-2" >
                            <Button type="button" label="Export" icon="pi pi-arrow-circle-up" style={{ backgroundColor: 'blue' }} />
                        </div>

                    </div>
                </div>
            </div>
            <div class="flex justify-content-around flex-wrap card-container indigo-container" style={{ backgroundColor: 'white' }}>
                <div className="col-12 lg:col-6 xl:col-6"  >
                    <div style={{ width: '250%' }}>
                        <InputText id="firstname1" type="text" placeholder="Enter any information about a case" style={{ width: '40%' }} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" style={{ backgroundColor: 'blue' }} ></Button>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="New Case" icon="pi pi-plus" className="mr-2 mb-2" style={{ backgroundColor: 'blue' }}onClick={() => setDisplay(true)} ></Button>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New Case" visible={displayBasic} style={{ width: '30vw' }} onHide={() => setDisplayBasic(false)}  >
                    <div className="col-12">
                        <div className="card">

                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Case Number</label>
                                    <InputText id="firstname2" type="text" />
                                </div>

                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Subject</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-12">
                                    <label htmlFor="firstname2">Description</label>
                                    <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                                </div>
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Case Type</label>
                                    <InputText id="firstname2" type="text" />
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
            </div>
        </Dialog>
</div >
<div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New Case Type" visible={display} style={{ width: '30vw' }} onHide={() => setDisplay(false)}  >
                    <div className="col-12">
                        <div className="card">

                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Name</label>
                                    <InputText id="firstname2" type="text" />
                                </div>

                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Code</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-12">
                                    <label htmlFor="firstname2">Description</label>
                                    <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
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
            </div>
        </Dialog>
</div >
    <div className="grid" style={{ justifyContent: 'space-evenly' }}>
        <div className="col-12 xl:col-12">
            <div className="card card-w-title global-sales" >
                <DataTable value={data} paginator rows={5} className="p-datatable-products">
                    <Column field="case_number" header="Case No." ></Column>
                    <Column field="subject" header="Subject" ></Column>
                    <Column field="description" header="Description" ></Column>
                    <Column field="type" header="Case Type" ></Column>
                    <Column field="account" header="Client Account" ></Column>
                    <Column field="status" header="Status" ></Column>
                    <Column field="priority" header="Priority" ></Column>
                    <Column field="options" header="Actions" body={<><Link to={"/Clients"} style={{ color: 'green' }}>View</Link><p></p>      <Link to={"/Clients"} style={{ color: 'red' }}>Manage</Link></>} >

                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
        </div >
    );
};
export default Cases;