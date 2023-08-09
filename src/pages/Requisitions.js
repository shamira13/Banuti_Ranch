// import React, { useState, useEffect, useRef } from 'react';
// import { Button } from 'primereact/button';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { InputText } from 'primereact/inputtext';
// import { Link } from 'react-router-dom';
// import { Dialog } from 'primereact/dialog';
// import {InputTextarea} from 'primereact/inputtextarea';

    

// const Requisitions = () => {
//     const [displayBasic, setDisplayBasic] = useState(false);

//     return (

//         <div className="layout-dashboard" >
//             <div className="col-12 lg:col-6 xl:col-2" style={{ marginLeft: '90%' }}>
//             <Link to="/"> <Button label="Back" icon="pi pi-chevron-left" style={{backgroundColor:'red', borderBlockColor:'red'}} className="mr-2 mb-2" ></Button></Link>
//             </div>
//             <div className="grid" style={{ backgroundColor: 'white', marginBottom: '2%' }} >
//                 <div className="col-12 lg:col-6 xl:col-6"  >
//                     <div style={{ width: '250%' }}>
//                         <InputText id="firstname1" type="text" placeholder="Enter any information about a requisition" style={{ width: '40%' }} />
//                     </div>
//                 </div>
//                 <div className="col-12 lg:col-6 xl:col-2" >
//                     <Button label="Search" icon="pi pi-search" className="mr-2 mb-2" ></Button>
//                 </div>
//                 <div className="col-12 lg:col-6 xl:col-3">
//                 <Dialog header="New Requisition" visible={displayBasic} style={{ width: '30vw' }} onHide={() => setDisplayBasic(false)}>
//                             <div className="col-12">
//                                 <div className="card">

//                                     <div className="p-fluid formgrid grid">
//                                         <div className="field col-12  ">
//                                             <label htmlFor="firstname2">Title</label>
//                                             <InputText id="firstname2" type="text" />
//                                         </div>

//                                         <div className="field col-12 ">
//                                             <label htmlFor="firstname2">Product Name</label>
//                                             <InputText id="firstname2" type="text" />
//                                         </div>
//                                         <div className="field col-12">
//                                         <label htmlFor="address">Description</label>
//                                         <InputTextarea id="address" rows="4" />
//                                     </div>
//                                         <div className="field col-12">
//                                             <label htmlFor="firstname2">Quantity</label>
//                                             <InputText id="firstname2" type="text" />
//                                         </div>

//                                         <div className="field col-12 md:col-6">
//                                             <Button label="Save" icon="pi pi-save" className="mr-2 mb-2" style={{ backgroundColor: 'green', borderBlockColor: 'green' }}></Button>
//                                         </div>
//                                         <div className="field col-12 md:col-6">
//                                             <Button label="Cancel" icon="pi pi-times" className="mr-2 mb-2" style={{ backgroundColor: 'red', borderBlockColor: 'red' }}></Button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Dialog>
//                     <Button label="New Requisition" icon="pi pi-plus" className="mr-2 mb-2"  onClick={() => setDisplayBasic(true)}></Button>
//                 </div>
//             </div>


//             <div className="grid" style={{ justifyContent: 'space-evenly' }}>
//                 <div className="col-12 xl:col-12">
//                     <div className="card card-w-title global-sales" >
//                         <DataTable value={data} paginator rows={5} className="p-datatable-products">
//                             <Column field="id" header="ID" ></Column>
//                             <Column field="title" header="Title" ></Column>
//                             <Column field="description" header="Description" ></Column>
//                             <Column field="productName" header="Product Name" ></Column>
//                             <Column field="quantity" header="Quantity" ></Column>
//                             <Column field="status" header="Status" ></Column>
//                             <Column field="options" header="Options" body={<><Link to={"/Clients"} style={{ color: 'green' }}>View</Link><p></p>      <Link to={"/Clients"} style={{ color: 'red' }}>Manage</Link></>} >

//                             </Column>
//                         </DataTable>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Requisitions;