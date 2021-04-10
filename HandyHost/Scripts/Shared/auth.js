import './common';

import { authenticate, Authentication, clearCookie } from './models/Authentication';
import { renderError } from './errors';
import { hideSpinner, showSpinner } from './spinner';

export const AUTH = $('#modal-auth');

export function InitNavBar(){
    let AUTHENTICATION = new Authentication();

    if(AUTHENTICATION.Token){
        $('#navigation-enter-button').addClass('d-none');
        $('#navigation-name').text(AUTHENTICATION.Name);
    } else{
        $('.navigation-page-bar').addClass('d-none');
        $('#navigation-name').addClass('d-none');
        $('#navigation-exit-button').addClass('d-none');
    }

    $(document).on('click', '#authorization-button', async (e) =>{
        let form = $('#authorization-form');
        let valid = form.valid();

        if(!valid){
            return;
        }

        showSpinner();
        
        try{
            let user = await authenticate(form);
            AUTHENTICATION.setToken(user.Token);
            AUTHENTICATION.setPersonnelData(user); 
             
            $('#navigation-enter-button').addClass('d-none');
            $('#navigation-exit-button').removeClass('d-none');
            $('.navigation-page-bar').removeClass('d-none');
            $('#navigation-name').removeClass('d-none').text(`${user.LastName} ${user.FirstName}`);

            // @ts-ignore
            AUTH.modal('hide');
            hideSpinner();

        }catch(e){
            hideSpinner();
            renderError(e);
        }
        
    });

    $(document).on('click','#navigation-enter-button', ()=>{
        // @ts-ignore
        AUTH.modal('show');
    });

    $(document).on('click','#navigation-exit-button', ()=>{
        clearCookie();
        $('#navigation-enter-button').removeClass('d-none');
        $('#navigation-exit-button').addClass('d-none');
        $('.navigation-page-bar').addClass('d-none');
        $('#navigation-name').addClass('d-none').text('');

        window.location.href='/Home/Index?auth=true';
    });
}