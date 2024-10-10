///<reference types='cypress'/>
import { userEmail } from "../support/createEmail";
import { createUser } from "../support/postApi"


describe('User addition', () => {
    beforeEach("load token", function () {
        cy.fixture("token.json").as('token');
    });

    const email = userEmail();
    it('Add new valid user', () => {
        cy.get('@token').then((authToken) => {
            createUser('public/v2/users', authToken.accessToken, email)
                .then((response) => {
                    expect(response.status).to.equal(201);
                });
        });

    });

    it('Add already existing user', () => {
        cy.get('@token').then((authToken) => {
            createUser('public/v2/users', authToken.accessToken, email)
                .then((response) => {
                    expect(response.status).to.equal(422);
                    expect(response.body[0].message).to.equal("has already been taken");
                });
        });

    });

    it('Add invalid user', () => {
        cy.get('@token').then((authToken) => {
            createUser('public/v2/users', authToken.accessToken, "ntestntest.com")
                .then((response) => {
                    expect(response.status).to.equal(422);
                    expect(response.statusText).to.equal("Unprocessable Entity");
                });
        });
    });
})
