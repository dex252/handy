export class Customer {
    /**
     * 
     * @param {number} id
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} email
     */
    constructor(id, firstName, lastName, email) {
        this.Id = id;
        this.UserName = `${lastName} ${firstName}`;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
    }

};