import React from 'react'
import { Fieldset } from 'primereact/fieldset';


function Help() {
  return (
    <div>
      <div className="layout-dashboard">
      <Fieldset legend="Normal Goat Values" toggleable>
    <p className="m-0">
      Get started by clicking on the sign up button that re directs you to the registration form where you enter your user Information
      and then press on the register button. After that you can use these credentials to login in into the GDS to carry out glaucoma tests.
       
    </p>
</Fieldset>
      <Fieldset legend="Prenatal Recommendations" toggleable>
    <p className="m-0">
      After signing in the user taken to the detect screen and to upload an image, the user can either clickig on the choose icon which has a label or 
      you can drag a glaucoma image into the interface. The image is then uploaded by clicking on the upload icon.
        
    </p>
</Fieldset>
      <Fieldset legend="How do i get my results?" toggleable>
    <p className="m-0">
      After the diagnosis and detection, the detection results are returned in the results screen for the user to view. These are clickable 
      in oder to show a detailed display of the results.
       
    </p>
</Fieldset>
      <Fieldset legend="How accurate is the diagnosis?" toggleable>
    <p className="m-0">
        The results are very promising and reliable since we have used F1 score as a metric to access and evaluate the performance of 
        our algorithm.
    </p>
</Fieldset>


        </div>
    </div>
  )
}

export default Help
