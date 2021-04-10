import '../../Shared/common';

import { InitNavBar, AUTH } from '../../Shared/auth';

$(()=>{
    InitNavBar();
    let showAuth = Boolean($('#auth-modal-show').val());

    if(showAuth){
        // @ts-ignore
        AUTH.modal('show');
    }
});