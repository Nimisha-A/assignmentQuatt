///<reference types='cypress'/>
import { userEmail } from "../support/createEmail";
import { createUser } from "../support/postApi";
import { updateUser } from "../support/patchApi";


describe('Update users', () => {
    beforeEach("load token", function () {
        cy.fixture("token.json").as('token');
    });

    it('Update user name', () => {
        const email = userEmail();
        cy.fixture("token.json").as('token');
        cy.get('@token').then((authToken) => {
            createUser('public/v2/users', authToken.accessToken, email)
                .then((response) => {
                    if (response.status === 201) {
                        const userID = response.body.id;
                        updateUser('public/v2/users/' + userID, authToken.accessToken, "new name", email, "active")
                            .then((response) => {
                                expect(response.status).to.equal(200);
                            });
                    }
                });
        });

    });

})
