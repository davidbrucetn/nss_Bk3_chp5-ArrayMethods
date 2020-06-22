const businessArray = []

const businessURL="http://localhost:8088/businesses"
const API = {
    //Get biznessez
    takingCareOfBusiness: () => {
        return fetch(businessURL)
            .then(response => response.json())
    },
    getSingleBusiness: (id) => {
        return fetch(`${businessURL}/${id}`)
            .then(response => response.json())
    },
    deleteBusiness: (id) => {
        return fetch(`${businessURL}/${id}`, {
            method: "DELETE",
        }).then(response => response.json());
    },
    updateBusiness: (id, updatedBusinessObject) => {
        return fetch(`${businessURL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:  JSON.stringify(updatedBusinessObject)
        })

    }
}

export default API;