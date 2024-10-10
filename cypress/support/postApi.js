const testUrl = Cypress.config().baseUrl;
export const createUser = (endpoint, authToken, userEmail, statusResponse) => {
    cy.request({
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
    }).then((response) => {
        expect(response.status).to.equal(statusResponse);
    })
};

export const createExistingUser = (endpoint, authToken, userEmail, statusResponse, responseMessage) => {
    cy.request({
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
    }).then((response) => {
        expect(response.status).to.equal(statusResponse);
        expect(response.body[0].message).to.equal(responseMessage);
    })
};


