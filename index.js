let input = document.getElementById('in');
let buttons = document.querySelectorAll('button');

let str = "";

function EEvent(e) {
    const btnValue = e.target.innerHTML;
    if (btnValue === '=') {
        try {
            str = eval(str);
            input.value = str;
        } catch {
            input.value = "Error";
            str = '';
        }
    } else if (btnValue === 'DE') {
        str = str.substring(0, str.length - 1);
        input.value = str;
    } else if (btnValue === 'AC') {
        str = '';
        input.value = str;
    } else {
        str += btnValue;
        input.value = str;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', EEvent);
});
