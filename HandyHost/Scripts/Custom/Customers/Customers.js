import { Authentication } from '../../Shared/models/Authentication';
import { Customer } from "../../Shared/models/Customer";

export class Customers extends Authentication{
    constructor(){
        super();
    }

    /**
    * @returns {Promise<Customer[]>}
    */
    getCustomers() {
        return new Promise(async (resolve, reject) => {
            let token = await this.Token;
            $.ajax({
                url: "https://healchpack.azurewebsites.net/users",
                beforeSend: function(request) {
                    request.setRequestHeader("Authorization", `${token}`);
                },
                type: "get",
                cache: false,
                error: e => {
                    reject(e);
                },
                success: response => {
                    let customers = [];
                    for (let user of response){
                        customers.push(new Customer(user.id, user.firstName, user.lastName, user.email));
                    }

                    resolve(customers);
                }
            });
        });
    };
}