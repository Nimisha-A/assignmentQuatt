///<reference types='cypress'/>
import { userEmail } from "../support/createEmail";
import { createUser } from "../support/postApi"


describe('Delete user', () => {
    beforeEach("load fixture", function () {
        cy.fixture("token.json").as('token');
    });

    const email = userEmail();

    it('Create user and delete the created user', () => {
        cy.get('@token').then((authToken) => {
            createUser('/public/v2/users/6941897', authToken.accessToken, email, 201).then((response) => {
                console.log(response.body.id)
            })
        })
        //const id= Response.body.id;
    })
});

