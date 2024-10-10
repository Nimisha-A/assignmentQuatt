///<reference types='cypress'/>
import { getUser } from "../support/getApi";
import { userEmail } from "../support/createEmail";
import { createUser } from "../support/postApi";


describe('Get users', () => {
    beforeEach("load token", function () {
        cy.fixture("token.json").as('token');
    });
    it('Get all users', () => {
        cy.get('@token').then((authToken) => {
            getUser('public/v2/users', authToken.accessToken)
                .then((response) => {
                    expect(response.status).to.equal(200);
                });
        });
    });

    it('Get a single user', () => {
        const email = userEmail();
        cy.fixture("token.json").as('token');
        cy.get('@token').then((authToken) => {
            createUser('public/v2/users', authToken.accessToken, email)
                .then((response) => {
                    if (response.status === 201) {
                        const userID = response.body.id;
                        getUser('public/v2/users/' + userID, authToken.accessToken)
                            .then((response) => {
                                expect(response.status).to.equal(200);
                            });
                    }
                });
        });

    });

    it('Get an invalid user', () => {
        cy.get('@token').then((authToken) => {
            getUser('public/v2/users/001', authToken.accessToken).then((response) => {
                expect(response.status).to.equal(404);
            });
        });
    });
})
