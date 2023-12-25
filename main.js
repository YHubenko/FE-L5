let nameInput = document.querySelector('#name');
let phoneInput = document.querySelector('#phone');
let cardInput = document.querySelector('#card');
let facultyInput = document.querySelector('#faculty');
let addressInput = document.querySelector('#address');
let out = document.querySelector('#error-output');
let submitBtn = document.querySelector('#submit-btn');
let nameOut = document.querySelector('#name-out');
let phoneOut = document.querySelector('#phone-out');
let cardOut = document.querySelector('#card-out');
let facultyOut = document.querySelector('#faculty-out');
let addressOut = document.querySelector('#address-out');
let outputLines = document.querySelectorAll('.output');

let checkContent = (element, regex) => {
    return regex.test(element.value);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    out.innerHTML = '';
    out.classList.remove('error');
    for (const outputLine of outputLines) {
        outputLine.classList.add('hidden');
    }
    let isError = false;
    if (!checkContent(nameInput, /^[А-ЯІЇЄҐ][а-яіїєґ']{1,20}\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/)) {
        out.innerHTML += 'ПІБ написано некоректно! <br />';
        out.classList.add('error');
        isError = true;
    }
    if (!checkContent(phoneInput, /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/)) {
        out.innerHTML += 'Некоректний номер телефону! <br />';
        out.classList.add('error');
        isError = true;
    }
    if (!checkContent(cardInput, /^[A-ZА-ЯІЇЄҐ]{2} №\d{6}$/)) {
        out.innerHTML += 'Некоректний номер id-card! <br />';
        out.classList.add('error');
        isError = true;
    }
    if (!checkContent(facultyInput, /^[А-ЯІЇЄҐ]{2,6}$/)) {
        out.innerHTML += 'Некоректна назва факультету! <br />';
        out.classList.add('error');
        isError = true;
    }
    if (!checkContent(addressInput, /^м\.\s[А-ЯІЇЄҐ][а-яіїєґ]+$/)) {
        out.innerHTML += 'Некоректна назва міста! <br />';
        out.classList.add('error');
        isError = true;
    }
    if (!isError) {
        for (const outputLine of outputLines) {
            outputLine.classList.remove('hidden');
            console.log('ok');
        }
        nameOut.textContent = nameInput.value;
        phoneOut.textContent = phoneInput.value;
        cardOut.textContent = cardInput.value;
        facultyOut.textContent = facultyInput.value;
        addressOut.textContent = addressInput.value;
    }
})

let tableCells = document.querySelectorAll('td');
let mainDiagonalCells = [];
mainDiagonalCells.push(tableCells[0]);
mainDiagonalCells.push(tableCells[7]);
mainDiagonalCells.push(tableCells[14]);
mainDiagonalCells.push(tableCells[21]);
mainDiagonalCells.push(tableCells[28]);
mainDiagonalCells.push(tableCells[35]);
let colorCell = tableCells[2];
let colorPicker = document.querySelector('#colorPicker');

let getRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

colorCell.addEventListener('mouseover', () => {
    tableCells[2].style.backgroundColor = getRandomColor();
});

colorCell.addEventListener('click', function() {
    colorCell.style.backgroundColor = colorPicker.value;
});

colorCell.addEventListener('dblclick', function() {
    mainDiagonalCells.forEach(cell => {
        cell.style.backgroundColor = colorPicker.value;
    });
});
