import 'jquery';
import 'bootstrap';
import 'jquery.cookie';
import {User} from './User';

export class Authentication{
    constructor(){
        this.Token = this.getToken();
        this.Name = this.getPersonnelData();
    }

    /**
     * @returns {string}
     */
    getToken(){
        let token = $.cookie('token');
        //let token = localStorage.getItem('token');
        if(token){
            return `Bearer ${token}`;
        } else {
            return undefined;
        }

    }

    /**
     * 
     * @param {User} user
     */
    setPersonnelData(user){
        $.cookie('name', `${user.LastName} ${user.FirstName}`, {secure: true, path: '/'});
        //localStorage.setItem('name', `${user.LastName} ${user.FirstName}`);
    }
    
    /**
     * 
     * @param {string} token 
     */
    setToken(token){
        //localStorage.setItem('token', token);
        $.cookie('token', token, { expires: 10, secure: true, path: '/' });
    }

    getPersonnelData(){
        let name = $.cookie('name');
        //let name = localStorage.getItem('name');
        if(name){
            return name;
        } else {
            return undefined;
        }

    }
    
}

    /**
     * 
     * @param {JQuery<HTMLElement>} form 
     * @returns {Promise<User>} 
     */
    export function authenticate(form){
        return new Promise((resolve, reject) => {
            let email = form.find('input[name=email]').val(); 
            let password = form.find('input[name=password]').val();    
            
            $.ajax({
                url: "https://healchpack.azurewebsites.net/users/login",
                type: "post",
                data: JSON.stringify({'email': email, 'password': password}),
                dataType: 'json',
                contentType: 'application/json',
                cache: false,
                error: e => {
                    reject(e);
                },
                success: response => {
                    let user = new User(response.lastName, response.firstName, response.jwtToken);
                    resolve(user);
                }
            });
        });
    }

export function registration(){

}

export function clearCookie(){
    //localStorage.clear();
    $.removeCookie('token');
    $.removeCookie('name');
}
