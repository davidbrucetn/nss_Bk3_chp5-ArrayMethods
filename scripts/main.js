import API from './data.js';
import renderBusinessList from './businessList.js';

const makeABusinessObject = (name,street,city,state,zip) => {
    return {
        companyName: name,
        addressZipCode: zip,
        addressStateCode: state,
        addressFullStreet: street,
        addressCity: city
    }
}

const mergeBusObject  = ( orgBusiness,editBusObj) => {
    const newBusObject = orgBusiness;
    newBusObject.companyName = editBusObj.companyName
    newBusObject.addressFullStreet = editBusObj.addressFullStreet
    newBusObject.addressStateCode = editBusObj.addressStateCode
    newBusObject.addressCity = editBusObj.addressCity
    newBusObject.addressZipCode = editBusObj.addressZipCode
    delete newBusObject.id;
    return newBusObject
}

renderBusinessList();

// button for FIND array method here
document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            API.takingCareOfBusiness()
            .then((businesses) => {
                debugger
                const foundBusiness =  businesses.find(
                    business =>
                        business.companyName.includes(keyPressEvent.target.value)
                );
                const outEl = document.querySelector(".article__businesses--active")
                outEl.innerHTML = `
                    <h2>
                    ${foundBusiness.companyName}
                    </h2>
                    <section>
                    ${foundBusiness.addressFullStreet}
                    </section>
                    <section>
                    ${foundBusiness.addressCity},
                    ${foundBusiness.addressStateCode}
                    ${foundBusiness.addressZipCode}
                    </section>
                `;
            }) // API End
        }  // if end
    });

    // button for FIND array method here - Lightning Exercise 1-2, search full name
document
.querySelector("#agentSearch")
.addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
        /* WHEN  USER PRESSES ENTER, FIND MATCHING AGENT */
        API.takingCareOfBusiness()
        .then((businesses) => {
        // Purchasing Agent Objects Lightning Exercise
        const purchasingAgentsExpandedArray = businesses.map(businessObject => {
            return {
                fullName: businessObject.purchasingAgent.nameFirst + ' ' + businessObject.purchasingAgent.nameLast,
                company:  businessObject.companyName,
                phoneNumber:  businessObject.phoneWork
            }
        });
        const foundAgent = purchasingAgentsExpandedArray.find(
                agent =>
                agent.fullName.includes(keyPressEvent.target.value)
            );
            const outEl = document.querySelector(".article__businesses--active")
            outEl.innerHTML = `<h1>Matching Agent(s)</h1>`
            outEl.innerHTML += `
                <h3>${foundAgent.fullName}</h3>
                <section class="section__agent--info">
                    ${foundAgent.company}<br>
                    ${foundAgent.phoneNumber}
                </section>

            `; 
            outEl.innerHTML += "<hr/>"
        //purchasing agent exp array end

        }) // API End
    }  // if end
});

let saveButton = document.querySelector('#saveBusinessButton')
saveButton.addEventListener("click", event => {
    const businessId = document.querySelector("#businessId").value;
    console.log(`ID ${businessId}`)
    let newBusObject = {};

    if (businessId !== "") {
        const businessName = document.querySelector("#businessName").value;
        const businessStreet = document.querySelector("#businessStreet").value;
        const businessCity = document.querySelector("#businessCity").value;
        const businessState = document.querySelector("#businessState").value;
        const businessZip = document.querySelector("#businessZip").value;
        const editBusObj = makeABusinessObject(businessName,businessStreet,businessCity,businessState,businessZip)
        debugger
        API.getSingleBusiness(businessId)
                .then((orgBusiness) => {API.updateBusiness(businessId,mergeBusObject(orgBusiness,editBusObj))})
                .then((renderBusinessList()))
        
        //newBusObject = Object.assign(orgBusiness,editBusObj)
        

        
    } else {
        //save functionality goes here
    }
    

})

