
const businessDOM = (listName,businessObject) => {   
    const getZip = ( zip ) => { return businessObject[zip] }
    let deleteButtonHTML = `<button id="deleteBusiness--${businessObject.id}">Delete</button>`
    deleteButtonHTML = (listName === "ACTIVE") ? deleteButtonHTML:""
    let editButtonHTML = `<button id="editBusiness--${businessObject.id}">Edit</button>`
    editButtonHTML = (listName === "ACTIVE") ? editButtonHTML:""

    const businessHTML = `
    <div "class="card__business">
        <section class="section__business">
        <h3 id="title--${businessObject.id}">${businessObject.companyName}</h3>
            <section class="section__street">
                ${businessObject.addressFullStreet}
            </section>
            <section class="section__csz">
                ${businessObject.addressCity}, ${businessObject['addressStateCode']} ${getZip('addressZipCode')}
            </section>
        </section>
        ${deleteButtonHTML}
        ${editButtonHTML}
    </div>
    `
    return businessHTML
}



export default businessDOM;