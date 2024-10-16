///<reference types='cypress'/>
import { userEmail } from "../support/createEmail";
import { createUser } from "../support/postApi"
import { deleteUser } from "../support/deleteApi";

describe('Delete user', () => {
    beforeEach("load token", function () {
        cy.fixture("token.json").as('token');
    });

    it('Create user and delete the user', () => {
        const email = userEmail();
        cy.fixture("token.json").as('token');
        cy.get('@token').then((authToken) => {
            //create user
            createUser('public/v2/users', authToken.accessToken, email)
                .then((response) => {
                    if (response.status === 201) {
                        const userID = response.body.id;
                        //delete created user
                        deleteUser('public/v2/users/' + userID, authToken.accessToken)
                            .then((response) => {
                                expect(response.status).to.equal(204);
                            });
                    }
                });
        });
    });
})

