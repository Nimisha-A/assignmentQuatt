const testUrl = Cypress.config().baseUrl;
export const getUser = (endpoint, authToken) => {
    return cy.request({
        method: 'GET',
        url: testUrl + endpoint,
        failOnStatusCode: false,
        headers: {
            'Authorization': 'Bearer ' + authToken
        }
    })
};
