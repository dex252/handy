import '../../Shared/common';

import { showSpinner, hideSpinner } from '../../Shared/spinner';
import { renderError } from '../../Shared/errors'
import { Customers } from './Customers';
import { InitNavBar } from '../../Shared/auth';
import { InitTable } from './table';

import 'styles/customers.css';



const container = $('#render-container');

$(async ()=>{
    InitNavBar();
    
    let CUSTOMERS = new Customers();
    showSpinner();

    try {
        let data = await CUSTOMERS.getCustomers();
       
        container.empty();
        container.html(
            $( '#render-customers' ).render(data)
        );

        InitTable();
    } catch (e) {
        renderError(e);
    } finally{
        hideSpinner();
    }

    $(document).on('click','.selected-row', (e)=>{
        let target = $(e.currentTarget);
        let userId = target.data('user-id');
        console.log(userId);
    });

});