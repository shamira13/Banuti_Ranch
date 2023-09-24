import React from 'react'
import { TabView, TabPanel } from 'primereact/tabview';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Accordion, AccordionTab } from 'primereact/accordion';

function Tips() {
  return (
    <div>
     <div className="layout-dashboard">
        <div className="card">
        <h2>Useful Information</h2>
            <TabView>
                
                <TabPanel header="Normal Goat Values">
                <p className="m-0">
                    <h4>The Normal Goat values are as follows</h4>
                    Gestation = 145-155 days	<br></br>	
	                   Days between heats = 18-21 days		<br></br>
	                   Length of heat = 6 hours - 3 days		<br></br>
        </p>
                </TabPanel>
                <TabPanel header="Prenatal Recommendation">
                    <p className="m-0">
                   <h4>Consider the recommended Prenatals below</h4>      
                   2 months before due:		<br></br>
		Doe should be dried off	        <br></br>
			
	5 weeks before due date (35 days):		<br></br>
		Give Selenium/Vitamin E	            <br></br>
		Pregnancy Herbal Tonic daily with their grain ration	<br></br>
			
	4 weeks before due date:		<br></br>
		Enterotoxemia & Tetanus vaccine (if you choose to vaccinate your animals)	 <br></br>
			
	3 weeks before due date:		<br></br>
		Vitamin E to food each day	   <br></br>
			
	2 weeks before due date:		<br></br>
		Give another Selenium/Vitamin E	    <br></br>
		Get together all the items you need for your birthing kit   	<br></br>
			
	1 week before due date:		 <br></br>
		Have your birthing kit ready	  <br></br>
		Trim your finger nails and keep them short and clean	 <br></br>
		Clean out your delivery stall and disinfect it	         <br></br>
		Shave the does udder, tail and around her "privates"	  <br></br>
		Start putting mom up in the birthing stall by herself at night (just in case)	
		Keep checking the doe's tail ligaments	
                    </p>
                </TabPanel>
                <TabPanel header="Tip 3">
                    <p className="m-0">
                        <h4>Eat well to see well.</h4>
                        Eat plenty of leafy green vegetables and colored fruits, berries and vegetables every day. They contain vitamins and minerals that protect your 
        body and eyes. In fact, studies show that eye-healthy foods are better than vitamins at preventing glaucoma.
                    </p>
                </TabPanel>
                <TabPanel header="Tip 4">
                    <p className="m-0">
                        <h4>Exercise regularly but carefully.</h4>
                        Intense exercise that raises your heart rate can also raise your eye pressure. But brisk walking and regular exercise at a moderate pace can lower 
        eye pressure and improve your overall health. If you lift heavy weights, have a qualified trainer show you how to breathe properly during this exercise.
                    </p>
                </TabPanel>
                
               
            </TabView>
        </div>
        <div className="card">
        <h2>More Farm Information</h2>
            <TabView>
                
                <TabPanel header="Heat Signs">
                    <p className="m-0">
                        <h4>Healthy Diet Healthy Eyesight.</h4>
                        Yes, it starts as simple as that; you are what you eat and so is your eyesight. Foods rich in nutrients like vitamin C and E, zinc, lutein and omega-3 fatty acids strengthen your eyes against age-related eye problems like cataracts and macular degeneration. Some great foods for eye health include:


                    </p>
                </TabPanel>
                <TabPanel header="Tip 2">
                    <p className="m-0">
                        <h4>Quit Smoking.</h4>
                        Research suggest that the likelihood of smokers getting affected from these debilitating eye conditions increases twice to thrice. 
        So, here is to those of you who like their eyesight more than a cigarette.
                    </p>
                </TabPanel>
                <TabPanel header="Tip 3">
                    <p className="m-0">
                        <h4>Shades are Helpful.</h4>
                        If you considered sunglasses a mere fashion accessory, think again. A right pair of shades can help you stay away from cataracts, macular degeneration 
        and pinguecula by blocking out sun’s harmful UV (ultraviolet) rays. A good pair of UV protection sunglasses can block 99 – 100% of harmful UV rays. In case you are wondering, UV protection contact lenses are also available.
                    </p>
                </TabPanel>
                <TabPanel header="Tip 4">
                    <p className="m-0">
                        <h4> Avoid Excessive Exposure to Computer Screens.</h4>
                        In addition to causing neck, back and shoulder pain, staring too long at a computer/phone screen can affect your eye health severely. Some of the eye problems you can get from excessive exposure to computer/phone screens include:

                    </p>
                </TabPanel>
                <TabPanel header="Tip 5">
                    <p className="m-0">
                        <h4>Incorporate Blinking Breaks.</h4>
                        Don’t only blame computers and phone screens for eyestrain. Books and written documents can also cause eyestrain when looked upon for extended periods.
 So, make sure to get your head up, look away from the docs and just blink your eyes for a few seconds to relieve the strain.
                    </p>
                </TabPanel>
                
            </TabView>
        </div>
</div>
        </div>
  )
}

export default Tips
