const testUrl = Cypress.config().baseUrl;
export const createUser = (endpoint, authToken, userEmail) => {
    return cy.request({
        method: 'POST',
        url: testUrl + endpoint,
        failOnStatusCode: false,

        headers: {
            'Authorization': 'Bearer ' + authToken
        },
        body: {
            'name': "Ntest",
            'gender': "Female",
            'email': userEmail,
            'status': "active"
        }
    })
};




