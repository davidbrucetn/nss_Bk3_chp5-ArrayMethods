import API from './data.js'
import renderBusinessList from './businessList.js';
import updateFormFields from './updateFormFields.js';

const businessContainer =  document.querySelector('.article__businesses--active')

export default {
    registerListener() {
        businessContainer.addEventListener('click', event => {
            if (event.target.id.startsWith("deleteBusiness--")) {
                const businessToDelete = event.target.id.split("--")[1];
                API.deleteBusiness(businessToDelete)
                .then(renderBusinessList());
            } else if (event.target.id.startsWith("editBusiness--")) {
                const businessIDToEdit = event.target.id.split("--")[1];
                API.getSingleBusiness(businessIDToEdit)
                .then((businessObject) => {updateFormFields(businessObject)})
            }
        })
    }
}

