const data = [null, [], null, null];
activatePlate(1);

function showPlate (number) {
    const elements = document.querySelectorAll('div.plate');
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }

    elements[number - 1].style.display = '';
};

function activatePlate (number) {
    showPlate(number);

    activatePlate_1(false);
    activatePlate_2(false);
    activatePlate_3(false);
    activatePlate_4(false);
    activatePlate_5(false);

    if (number === 1) {
        activatePlate_1(true);
    } else if (number === 2) {
        activatePlate_2(true);
    } else if (number === 3 ) {
        activatePlate_3(true);
    } else if (number === 4) {
        activatePlate_4(true);
    } else if (number === 5) {
        activatePlate_5(true);
    } 
};

function activatePlate_1 (active) {
    const aElement = document.querySelector('#startTest');

    if (active) {
        aElement.addEventListener('click', startTest);
    } else {
        aElement.removeEventListener('click', startTest);
    }

    function startTest (event) {
        event.preventDefault();
        activatePlate(2);
    };
};

function activatePlate_2 (active) {
    const plateElement = document.querySelector('#plate2');
    const labelElements = plateElement.querySelectorAll('label');
    const aElementBack = plateElement.querySelector('a.button--back');
    const aElementNext = plateElement.querySelector('a.button--next');

    if (active) {
        aElementNext.addEventListener('click', toNextPlate);
        aElementBack.addEventListener('click', toPrevPlate);
    } else {
        aElementNext.removeEventListener('click', toNextPlate);
        aElementBack.removeEventListener('click', toPrevPlate);
    }

    for (let i = 0; i < labelElements.length; i++) {
        le = labelElements[i];

        if (active) {
            le.addEventListener('click', selectHandler);
        } else {
            le.removeEventListener('click', selectHandler);
        }

        function selectHandler (event) {
            for (let i = 0; i < labelElements.length; i++) {
                labelElements[i].classList.remove('radio-block--active');
            }

            this.classList.add('radio-block--active');

            const inputElement = this.querySelector('input');
            const value = inputElement.value;

            data[0] = value;
        }
    }

    function toNextPlate (event) {
        event.preventDefault();

        if (data[0]) {
            activatePlate(3);
        }
    }

    function toPrevPlate (event) {
        event.preventDefault();
        activatePlate(1);
    }
}

function activatePlate_3 (active) {
    const plateElement = document.querySelector('#plate3');
    const labelElements = plateElement.querySelectorAll('label');
    const aElementBack = plateElement.querySelector('a.button--back');
    const aElementNext = plateElement.querySelector('a.button--next');

    if (active) {
        aElementNext.addEventListener('click', toNextPlate);
        aElementBack.addEventListener('click', toPrevPlate);
    } else {
        aElementNext.removeEventListener('click', toNextPlate);
        aElementBack.removeEventListener('click', toPrevPlate);
    }

    for (let i = 0; i < labelElements.length; i++) {
        le = labelElements[i];

        if (active) {
            le.addEventListener('click', selectHandler);
        } else {
            le.removeEventListener('click', selectHandler);
        }

        function selectHandler (event) {
            const inputElement = this.querySelector('input');
            const answers = [];
            this.classList.toggle('checkbox-block--active');
            inputElement.checked = !inputElement.checked;
            
            event.preventDefault();

            for (let i = 0; i < labelElements.length; i++) {
                const inputElement = labelElements[i].querySelector('input');

                if (inputElement.checked) {
                    answers.push(inputElement.value);
                }
            }

            data[1] = answers;
        }
    }

    function toNextPlate (event) {
        event.preventDefault();

        if (data[1].length > 0) {
            activatePlate(4);
        }
    }

    function toPrevPlate (event) {
        event.preventDefault();
        activatePlate(2);
    }
}

function activatePlate_4 (active) {
    const plateElement = document.querySelector('#plate4');
    const labelElements = plateElement.querySelectorAll('label');
    const aElementBack = plateElement.querySelector('a.button--back');
    const aElementNext = plateElement.querySelector('a.button--next');

    if (active) {
        aElementNext.addEventListener('click', toNextPlate);
        aElementBack.addEventListener('click', toPrevPlate);
    } else {
        aElementNext.removeEventListener('click', toNextPlate);
        aElementBack.removeEventListener('click', toPrevPlate);
    }

    for (let i = 0; i < labelElements.length; i++) {
        le = labelElements[i];

        if (active) {
            le.addEventListener('click', selectHandler);
        } else {
            le.removeEventListener('click', selectHandler);
        }

        function selectHandler (event) {
            for (let i = 0; i < labelElements.length; i++) {
                labelElements[i].classList.remove('radio-block--active');
            }

            this.classList.add('radio-block--active');

            const inputElement = this.querySelector('input');
            const value = inputElement.value;

            data[2] = value;
        }
    }

    function toNextPlate (event) {
        event.preventDefault();

        if (data[2]) {
            activatePlate(5);
        }
    }

    function toPrevPlate (event) {
        event.preventDefault();
        activatePlate(3);
    }
}

function activatePlate_5 (active) {
    const plateElement = document.querySelector('#plate5');
    const labelElement = plateElement.querySelector('.checkbox');
    const inputResult = plateElement.querySelector('input.button');

    if (active) {
        inputResult.addEventListener('click', getResult);
        labelElement.addEventListener('click', selectHandler);
    } else {
        inputResult.removeEventListener('click', getResult);
        labelElement.removeEventListener('click', selectHandler);
    }

    function selectHandler (event) {
        const checkbox = this.querySelector('input');
        data[3] = checkbox.checked;
    }

    function getResult () {
        const email = plateElement.querySelector('.input-email').value;

        if (data[3] && validateEmail(email)) {
            activatePlate(6);
        }
    }

    function validateEmail(email) {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    }
}
