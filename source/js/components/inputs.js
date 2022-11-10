const inputs = document.body.querySelectorAll(".bikes__add input[type='text']");
const buttons = document.body.querySelectorAll('.bikes__add button');
const lists = document.body.querySelectorAll('.list');

const setInputs = () => {
    if (inputs.length === buttons.length) {
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (inputs[index].value && inputs[index].value !== '') {
                    inputs[index].classList.remove('error');
                    lists[index].insertAdjacentHTML('beforeend', `<li>${inputs[index].value}</li>`);
                } else {
                    inputs[index].classList.add('error');
                }
            });
        });
    }
}

export {setInputs}
