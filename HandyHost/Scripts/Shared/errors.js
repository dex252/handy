import './common';

import { clearCookie } from './models/Authentication';

const error = $('#modal-error');

/**
 * 
 * @param {string} text
 */
export function renderErrorMessage(text) {

    $('.modal-error-body').empty();
    $('.modal-error-body').html(
        $('#render-user-error').render({ 'RenderMessage': text })
    );

    // @ts-ignore
    error.modal('show');
};

export function renderError(response) {
    if(response.status == 401){
        renderErrorMessage('Вы не авторизованы');
        error.addClass('unauthorized');
        clearCookie();
        return;
    }

    if(response.status == 500){
        renderErrorMessage('Внутренняя ошибка сервера');
        return;
    }

    if(response.status == 0){
        renderErrorMessage('Сервер не доступен');
        return;
    }

    if(response.responseJSON && response.responseJSON.message){
        renderErrorMessage(response.responseJSON.message);
        return;
    }

    //Дикая ошибка при приведении типов от сервера (возвращает namespace класса Authenticate и подробности ошибки - уязвимость! :-) )
    if(response.responseJSON){
        $('.modal-error-body').empty();
        $('.modal-error-body').html(
            $('#render-detail-error').render(response.responseJSON)
        );
        // @ts-ignore
        error.modal('show');
        return;
    }
    
    if(response.statusText != null){
        $('.modal-error-body').empty();
        $('.modal-error-body').html(
            $('#render-user-error').render(response)
        );
    } else{
        renderErrorMessage('Произошла неизвестная ошибка');
        return;
    }


    // @ts-ignore
    error.modal('show');
};

$(document).on('hide.bs.modal', '#modal-error.unauthorized', function() {
    error.removeClass('unauthorized');
    window.location.href='./Home/Index?auth=true';
});