const testUrl = Cypress.config().baseUrl;
export const deleteUser = (endpoint, authToken) => {
    return cy.request({
        method: 'DELETE',
        url: testUrl + endpoint,
        failOnStatusCode: false,
        headers: {
            'Authorization': 'Bearer ' + authToken
        }
    })
};
