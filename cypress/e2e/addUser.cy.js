///<reference types='cypress'/>
import { userEmail } from "../support/createEmail";
import { createUser, createExistingUser } from "../support/postApi"



describe('User addition', () => {
    beforeEach("load fixture", function () {
        cy.fixture("token.json").as('token');
    });

    const email = userEmail();
    it('Add new valid user', () => {
        cy.get('@token').then((authToken) => {
            createUser('public/v2/users', authToken.accessToken, email, 201);
        });

    })

    it('Add already existing user', () => {
        cy.get('@token').then((authToken) => {
            createExistingUser('public/v2/users', authToken.accessToken, email, 422, "has already been taken");
        });

    })

    it('Add invalid user', () => {
        cy.get('@token').then((authToken) => {
            createUser('public/v2/users', authToken.accessToken, "ntestntest.com", 422);
        });
    })
})
