const testUrl = Cypress.config().baseUrl;
export const updateUser = (endpoint, authToken, userName, userEmail, userStatus) => {
    return cy.request({
        method: 'PATCH',
        url: testUrl + endpoint,
        failOnStatusCode: false,

        headers: {
            'Authorization': 'Bearer ' + authToken
        },
        body: {
            'name': userName,
            'email': userEmail,
            'status': userStatus
        }
    })
};




