const updateFormFields = (businessObject) => {
    const businessID = document.querySelector("#businessId");
    const businessName = document.querySelector("#businessName");
    const businessStreet = document.querySelector("#businessStreet");
    const businessCity = document.querySelector("#businessCity");
    const businessState = document.querySelector("#businessState");
    const businessZip = document.querySelector("#businessZip");

    businessID.value = businessObject.id;
    businessName.value = businessObject.companyName;
    businessStreet.value = businessObject.addressFullStreet;
    businessCity.value = businessObject.addressCity;
    businessState.value = businessObject.addressStateCode;
    businessZip.value = businessObject.addressZipCode;

}









export default updateFormFields;
