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
                        if(!el.classList.contains('dropdown_sorting')) {
                            el.classList.toggle('dropdown-mob-hide');
                        }
                    }
                });           
                element.classList.toggle('dropdown-open');
            });  
        }
    });

    document.querySelectorAll('.dropdown.dropdown_sorting .radiobox').forEach(el => {
        el.querySelector('.radiobox__input').addEventListener("change", () => {
                let activeSort = el.querySelector('.radiobox__name').innerText;
                document.querySelector('.dropdown_sorting .dropdown__button .active-sort').textContent = activeSort;
        });
    });

    document.querySelectorAll('.dropdown:not(.dropdown_sorting):not(.dropdown_one_checkbox)').forEach(element => {
        let checkbox = element.querySelectorAll('.checkbox__input');
        let checkboxCount = 0;
        // console.log(checkbox.length);
        checkbox.forEach(el => {
            if (el.checked) {
                checkboxCount =+1;
            } else {}
        });
        if (checkboxCount>0) {
            element.classList.add('dropdown_fill');
            element.querySelector('.dropdown__count').innerText = checkboxCount;   
        }

    });  

});