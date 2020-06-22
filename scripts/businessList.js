import businessDOM from './domConverter.js'
import API from './data.js'
import registerListener from './events.js'

const renderBusinessList = () => {

    const businessArticle = document.querySelector('.article__businesses--active')
    API.takingCareOfBusiness()
    .then((businessArray) => {
        
        // All Businesses using forEach array method
        businessArticle.innerHTML = "<h1 class=\"section__header\">Active Businesses</h1>"
        businessArray.forEach(businessObject => {
            // console.log(businessObject.companyName)
            businessArticle.innerHTML += businessDOM("ACTIVE",businessObject)
            businessArticle.innerHTML += "<hr/>"
        });
        // invoke register delete 
        registerListener.registerListener();

        // New York Business Only using filter array method
        const newYorkBusinessarray = businessArray.filter((businessObject) => {
            return businessObject.addressStateCode === "NY"
        });
        
        businessArticle.innerHTML += "<h1 class=\"section__header\">New York Businesses</h1>"
        newYorkBusinessarray.forEach(businessObject => {
            businessArticle.innerHTML += businessDOM("NY",businessObject)
            businessArticle.innerHTML += "<hr/>"
        });
        
        // Purchasing Agents only using map array method
        const purchasingAgentsArray = businessArray.map(businessObject => {
            return businessObject.purchasingAgent
        })
        
        businessArticle.innerHTML += "<h1 class=\"section__header\">Purchasing Agents</h1>"
        purchasingAgentsArray.forEach(agent => {businessArticle.innerHTML += `<h3>${agent.nameFirst} ${agent.nameLast}</h3>`; businessArticle.innerHTML += "<hr/>" })

        // Purchasing Agent Objects Lightning Exercise
        const purchasingAgentsExpandedArray = businessArray.map(businessObject => {
            return {
                fullName: businessObject.purchasingAgent.nameFirst + ' ' + businessObject.purchasingAgent.nameLast,
                company:  businessObject.companyName,
                phoneNumber:  businessObject.phoneWork
            }
        })

        businessArticle.innerHTML += "<h1 class=\"section__header\">Purchasing Agents Expanded</h1>"
        purchasingAgentsExpandedArray.forEach(agent => {
            businessArticle.innerHTML += `
                <h3>${agent.fullName}</h3>
                <section class="section__agent--info">
                    ${agent.company}<br>
                    ${agent.phoneNumber}
                </section>

            `; 
            businessArticle.innerHTML += "<hr/>"
        })
        

    })
    
}

export default renderBusinessList;