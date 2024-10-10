const testUrl = Cypress.config().baseUrl;
export const deleteUser = (endpoint, statusResponse) => {
    cy.request({
        method: 'DELETE',
        url: testUrl + endpoint,
        failOnStatusCode: false,
    }).then((response) => {
        console.log(response.status)
        expect(response.status).to.equal(statusResponse);
    })
};
