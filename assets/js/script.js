document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('.popup-triggers__item_filters').addEventListener("click", () => {
        document.querySelector('.filters').classList.toggle('filters-open');
        document.querySelector('.filters__header>span').textContent = 'Фильтры';
        document.querySelector('.filters__dropdown').classList.remove('dropdown-filters-hide');
        document.querySelector('.filters__dropdown').classList.add('dropdown-sorting-hide');
        document.querySelector('.filters__mob-buttons').style.display = 'block';
    });
    document.querySelector('.popup-triggers__item_sort').addEventListener("click", () => {
        document.querySelector('.filters').classList.toggle('filters-open');
        document.querySelector('.filters__header>span').textContent = 'Сортировка';
        document.querySelector('.filters__dropdown').classList.remove('dropdown-sorting-hide');
        document.querySelector('.filters__dropdown').classList.add('dropdown-filters-hide');
        document.querySelector('.dropdown_sorting').classList.add('dropdown-open');
        document.querySelector('.filters__mob-buttons').style.display = 'none';
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


    document.querySelectorAll('.dropdown').forEach(element => {
        let input = element.querySelector('.dropdown__search');
        if(input) {
            input.addEventListener('input', () => {
                let dropdown_items = document.querySelector('.dropdown__search+.dropdown__items').querySelectorAll('.checkbox__name');
                if (!dropdown_items)
                    return false;
                for (let i=0; i<dropdown_items.length; i++) {
                    if (dropdown_items[i].innerHTML.toUpperCase().includes(input.value.toUpperCase()))
                        dropdown_items[i].closest('.checkbox').style.display = 'flex';
                    else
                        dropdown_items[i].closest('.checkbox').style.display = 'none';
                }
            });            
        }
    });

    var toggler = document.querySelectorAll('.catalog-menu__fold>a');
    var i;

    for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".catalog-menu__nested").classList.toggle('catalog-menu__active');
        this.classList.toggle('catalog-menu__fold_open');
    });
    }

});