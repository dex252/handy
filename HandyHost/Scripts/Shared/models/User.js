export class User {
    /**
     * 
     * @param {string} lastName
     * @param {string} firstName
     * @param {string} jwtToken
     */
    constructor(lastName, firstName, jwtToken) {
        this.LastName = lastName;
        this.FirstName = firstName;
        this.Token = jwtToken;
    }

};