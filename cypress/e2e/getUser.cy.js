///<reference types='cypress'/>
import { getUser } from "../support/getApi"


describe('Get users', () => {

    it('Get all users', () => {
        getUser('public/v2/users', 200);
    })

    it('Get a single user', () => {
        getUser('public/v2/users/6941897', 200);
    })

    it('Get an invalid user', () => {
        getUser('public/v2/users/001', 404);
    })
})
