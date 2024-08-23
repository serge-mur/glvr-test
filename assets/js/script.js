document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('.popup-triggers__item_filters').addEventListener("click", () => {
        document.querySelector('.filters').classList.toggle('filters-open');
        document.querySelector('.filters__header>span').textContent = 'Фильтры';
        document.querySelector('.filters__dropdown').classList.remove('dropdown-filters-hide');
        document.querySelector('.filters__dropdown').classList.add('dropdown-sorting-hide');
    });
    document.querySelector('.popup-triggers__item_sort').addEventListener("click", () => {
        document.querySelector('.filters').classList.toggle('filters-open');
        document.querySelector('.filters__header>span').textContent = 'Сортировка';
        document.querySelector('.filters__dropdown').classList.remove('dropdown-sorting-hide');
        document.querySelector('.filters__dropdown').classList.add('dropdown-filters-hide');
        document.querySelector('.dropdown_sorting').classList.add('dropdown-open');
    });
    document.querySelector('.filters__close-button').addEventListener("click", () => {
        document.querySelector('.filters').classList.toggle('filters-open');
    });
    
    document.querySelectorAll('.dropdown').forEach(element => {

        if(!element.classList.contains('dropdown_one_checkbox')) {

            element.querySelector('.dropdown__button').addEventListener("click", () => {
                document.querySelectorAll('.dropdown').forEach(el => {
                    if (element !== el) {
                        el.classList.remove('dropdown-open');
                        el.classList.toggle('dropdown-mob-hide');
                    }
                });           
                element.classList.toggle('dropdown-open');
            });            
        }

    });

});