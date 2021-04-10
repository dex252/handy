import './common';

const spinner = $('#modal-spinner');

export function showSpinner() {
    // @ts-ignore
    spinner.modal('show');
};

export function hideSpinner() {
    setTimeout(() => {
        // @ts-ignore
        spinner.modal('hide');
    }, 500);
};