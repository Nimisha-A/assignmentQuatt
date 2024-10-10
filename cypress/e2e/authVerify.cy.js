///<reference types='cypress'/>
import { userEmail } from "../support/createEmail";
import { createUser } from "../support/postApi"

describe('Token validation', () => {
    beforeEach("load token", function () {
        cy.fixture("token.json").as('token');
    });


    it('Create user using a valid token', () => {
        const email = userEmail();
        cy.get('@token').then((authToken) => {
            createUser('public/v2/users', authToken.accessToken, email)
                .then((response) => {
                    expect(response.status).to.equal(201);
                });
        });

    });

    it('Create user using invalid token', () => {
        const email = userEmail();
        cy.get('@token').then((authToken) => {
            createUser('public/v2/users', authToken.invalidToken, email)
                .then((response) => {
                    expect(response.status).to.equal(401);
                });
        });

    });
})
