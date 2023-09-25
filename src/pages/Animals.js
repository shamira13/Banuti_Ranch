import React, { useState} from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import data from '../assets/flags/animal.json';

const Animals = () => {

    const [displayBasic, setDisplayBasic] = useState(false);
    const [display, setDisplay] = useState(false);
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Breed 1', code: 'Option 1' },
        { name: 'Breed 2', code: 'Option 2' },
        { name: 'Breed 3', code: 'Option 3' },
        { name: 'Breed 4', code: 'Option 3' }
    ];

    return (

        <div className="layout-dashboard" >
           
            <div className="col-12">
                <div className="card">
                    <div className="grid p-fluid" style={{ justifyContent: 'flex-end' }}>

                        <div className="col-12 lg:col-6 xl:col-2" >
                            <Button type="button" label="Export" icon="pi pi-arrow-circle-up" style={{ backgroundColor: '#795548' }} />
                        </div>
                        <div className="col-12 lg:col-6 xl:col-2" style={{ marginLeft: '90%' }}>
                <Link to="/"> <Button label="Back" icon="pi pi-chevron-left" style={{ backgroundColor: 'red', borderBlockColor: 'red' }} className="mr-2 mb-2" ></Button></Link>
            </div>

                    </div>
                </div>
            </div>
            <div class="flex justify-content-around flex-wrap card-container indigo-container" style={{ backgroundColor: 'white' }}>
                <div className="col-12 lg:col-6 xl:col-6"  >
                    <div style={{ width: '250%' }}>
                        <InputText id="firstname1" type="text" placeholder="Enter any information about an animal" style={{ width: '40%' }} />
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" style={{ backgroundColor: '#795548' }} ></Button>
                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                    <Button label="New Animal" icon="pi pi-plus" className="mr-2 mb-2" style={{ backgroundColor: '#795548' }}onClick={() => setDisplayBasic(true)} ></Button>
                </div>

            </div>
            <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New Animal" visible={displayBasic} style={{ width: '30vw' }} onHide={() => setDisplayBasic(false)}  >
                    <div className="col-12">
                        <div className="card">

                            <div className="p-fluid formgrid grid">
                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Tag No</label>
                                    <InputText id="firstname2" type="text" />
                                </div>

                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Animal Name</label>
                                    <InputText id="firstname2" type="text" />
                                </div>
                                <div className="field col-12">
                                    <label htmlFor="firstname2">Dam Name</label>
                                    <textarea id="address" type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                                </div>
                                <div className="field col-12 md:col-6 ">
                                    <label htmlFor="firstname2">Dam Tag No</label>
                                    <InputText id="firstname2" type="text" />
                                </div>

                                <div className="field col-12 md:col-12 ">
                                    <label htmlFor="firstname2">Breed</label>
                                    <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
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
                                <div className="field col-12 md:col-3">
                            <label htmlFor="state">State</label>
                            <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
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
                    <Column field="tag_no" header="Tag No." ></Column>
                    <Column field="full_name" header="Animal Name" ></Column>
                    <Column field="dam_no" header="Dam Tag No." ></Column>
                    <Column field="dam_name" header="Dam Name" ></Column>
                    <Column field="dob" header="Date of Birth" ></Column>
                    <Column field="breed" header="Breed" ></Column>
                    <Column field="options" header="Actions" body={<><Link to={"/ViewAnimal"} style={{ color: 'green' }}>View</Link><p></p> </>} >

                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
        </div >
    );
};
export default Animals;
