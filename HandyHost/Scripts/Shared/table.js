import 'datatables.net-bs4';
import 'datatables.net-autofill-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-colreorder-bs4';
import 'datatables.net-fixedheader-bs4';
import 'datatables.net-keytable-bs4';
import 'datatables.net-responsive-bs4';
import 'datatables.net-rowreorder-bs4';
import 'datatables.net-scroller-bs4';
import 'datatables.net-searchpanes-bs4';
import 'datatables.net-select-bs4';

import 'libs/datatables.net/datatables.min.css';

export function InitTable(){
    $('#table-customers').DataTable({
        scrollY:        '60vh',
        scrollCollapse: true,
        paging:         true,
        lengthChange:   true,
        lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "Все"]],
        language:{
            paginate:{
                first:'Первая страница',
                last:'Последняя страница',
                next:'Вперед',
                previous:'Назад'
            },
            searchPlaceholder:'Поиск...',
            'search': '',
            info:'Текущая страница _PAGE_ из _PAGES_',
            infoFiltered:'', //фильтр из _MAX_ записей
            lengthMenu:'Показать _MENU_ записей'
        }
    });

    $('.dataTables_filter').parent().addClass('my-auto');
}