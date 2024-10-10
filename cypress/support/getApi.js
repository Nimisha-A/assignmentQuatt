const testUrl = Cypress.config().baseUrl;
export const getUser = (endpoint, statusResponse) => {
    cy.request({
        method: 'GET',
        url: testUrl + endpoint,
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.equal(statusResponse);
    })
};
