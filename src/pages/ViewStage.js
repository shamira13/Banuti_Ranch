import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import { Link } from 'react-router-dom';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';

const ViewStage = () => {

    const [displayBasic, setDisplayBasic] = useState(false);

    return (
        <><div class="flex justify-content-end flex-wrap card-container green-container">
            <Button type="button" label="Back" className="mr-2 mb-2" style={{ backgroundColor: 'amber', marginLeft: '90%', marginBottom: '18%' }}></Button>
        </div>
            <div className="grid" style={{ backgroundColor: 'white', marginBottom: '2%' }}>

                <div className="card">
                    <Fieldset legend="Stages" >

                        <div className="p-fluid formgrid grid">
                            <div className="field col-4">
                                <label for="clientid">Animal Name</label>
                                <input id="clientid" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>
                            <div className="field col-12 md:col-4">
                                <label for="clientname">Gender</label>
                                <input id="clientname" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>
                            <div className="field col-4">
                                <label for="location">Description</label>
                                <input id="location" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                            </div>
                        </div>
                        <div className='grid' style={{ justifyContent: 'flex-end' }}>
                            <div class="flex justify-content-end ">
                                <div className="field col-12 md:col-4" style={{ marginRight: '10%' }}>
                                    <Button label="Save" icon="pi pi-save"  ></Button>

                                </div>
                                <div className="field col-12 md:col-8" >
                                    <Button label="Add Stage" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} ></Button>
                                </div>
                            </div>
                        </div>


                    </Fieldset>

                </div>
                <div className="col-12 lg:col-6 xl:col-2" >
                <Dialog header="New User" visible={displayBasic} style={{ width: '70vw' }} onHide={() => setDisplayBasic(false)}  >
                    <div className="col-12">
                        <div className="card">
                            <div className="p-fluid formgrid grid">
                                <div className="field col-4">
                                    <label for="clientid">Stage Name</label>
                                    <input id="clientid" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                                </div>
                                <div className="field col-12 md:col-4">
                                    <label for="clientname">Life span</label>
                                    <input id="clientname" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                                </div>
                                <div className="field col-6">
                                    <label for="location">Description</label>
                                    <input id="location" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                                </div>
                            </div>
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
                </Dialog>
            </div>

            </div>
            <div className="card">
                    <Fieldset legend="Stage Details" >
                    <DataTable  paginator rows={5} className="p-datatable-products">
                        <Column field="id" header="No." style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                        <Column field="image" header="Stage Name" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                        <Column field="first_name" header="Lifespan" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="action" className='flex gap-2' header="Action" style={{ flexGrow: 1, flexBasis: '200px' }} body={() => <Link to={"/ViewStage"} style={{ color: 'green' }}>View</Link>}></Column>
                    </DataTable>
                    </Fieldset>
                </div></>
    );
};
export default ViewStage;