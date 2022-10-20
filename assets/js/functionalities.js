// Global variables
const nameInput = document.getElementById('name');
const provinceInput = document.getElementById('province');
const cityInput = document.getElementById('city');
const sectorInput = document.getElementById('sector');
const streetInput = document.getElementById('street');
const careerSelect = document.getElementById('career');

const courses = {
    software: ['Programacion 2',
        'Programacion Web',
        'Mineria de Datos',
        'Calculo Integral',
        'Estructuras de Datos'],
    multimedia: ['Introduccion a Desktop Publishing',
        'Animacion 2D',
        'HTML y Creacion de Web Sites',
        'Produccion Audiovisual',
        'Ingles'],
    redes: ['Conmutacion y Enrutamiento',
        'Introduccion a las bases de Datos',
        'Fundamentos de Seguridad',
        'Metodologia de investigacion',
        'Instalacion de Redes']
};

function validatePersonalData() {
    let fieldsAreNotFilled = false;

    if (!nameInput.value || nameInput.value == '' || nameInput.value == null) {
        nameInput.classList.remove('border-success');
        nameInput.classList.add('border-danger');
        fieldsAreNotFilled = true;
    } else {
        nameInput.classList.remove('border-danger');
        nameInput.classList.add('border-success');
    }

    if (!provinceInput.value || provinceInput.value == '' || provinceInput.value == null) {
        provinceInput.classList.remove('border-success');
        provinceInput.classList.add('border-danger');
        fieldsAreNotFilled = true;
    } else {
        provinceInput.classList.remove('border-danger');
        provinceInput.classList.add('border-success');
    }

    if (!cityInput.value || cityInput.value == '' || cityInput.value == null) {
        cityInput.classList.remove('border-success');
        cityInput.classList.add('border-danger');
        fieldsAreNotFilled = true;
    } else {
        cityInput.classList.remove('border-danger');
        cityInput.classList.add('border-success');
    }

    if (!sectorInput.value || sectorInput.value == '' || sectorInput.value == null) {
        sectorInput.classList.remove('border-success');
        sectorInput.classList.add('border-danger');
        fieldsAreNotFilled = true;
    } else {
        sectorInput.classList.remove('border-danger');
        sectorInput.classList.add('border-success');
    }

    if (!streetInput.value || streetInput.value == '' || streetInput.value == null) {
        streetInput.classList.remove('border-success');
        streetInput.classList.add('border-danger');
        fieldsAreNotFilled = true;
    } else {
        streetInput.classList.remove('border-danger');
        streetInput.classList.add('border-success');
    }

    if (!careerSelect.value || careerSelect.value == '' || careerSelect.value == null) {
        careerSelect.classList.remove('border-success');
        careerSelect.classList.add('border-danger');
        fieldsAreNotFilled = true;
    } else {
        careerSelect.classList.remove('border-danger');
        careerSelect.classList.add('border-success');
    }

    if (fieldsAreNotFilled) {
        $.notify.defaults({ globalPosition: 'bottom right' });
        $.notify('Debes rellenar todos los campos', 'error');
        return fieldsAreNotFilled;
    }

    return false;
}

function resetFormState(dataHasToBeCleaned = false) {
    if (dataHasToBeCleaned) {
        nameInput.value = '';
        provinceInput.value = '';
        cityInput.value = '';
        sectorInput.value = '';
        streetInput.value = '';
        careerSelect.value = '';
        nameInput.focus();
    }

    nameInput.classList.remove('border-success', 'border-danger');
    provinceInput.classList.remove('border-success', 'border-danger');
    cityInput.classList.remove('border-success', 'border-danger');
    sectorInput.classList.remove('border-success', 'border-danger');
    streetInput.classList.remove('border-success', 'border-danger');
    careerSelect.classList.remove('border-success', 'border-danger');    
}

function showPersonalDataSection() {
    const personalDataSection = document.getElementById('personalDataSection');
    const inscriptionSection = document.getElementById('inscriptionSection');
    const confirmationSection = document.getElementById('confirmationSection');
    inscriptionSection.classList.add('d-none');
    confirmationSection.classList.add('d-none');
    personalDataSection.classList.remove('d-none');
    resetFormState();
    changeNavigationBetweenSections(1);
}

function showInscriptionSection() {
    const personalDataSection = document.getElementById('personalDataSection');
    const inscriptionSection = document.getElementById('inscriptionSection');
    const confirmationSection = document.getElementById('confirmationSection');
    personalDataSection.classList.add('d-none');
    confirmationSection.classList.add('d-none');
    inscriptionSection.classList.remove('d-none');
    changeNavigationBetweenSections(2);
}

function showConfirmationSection() {
    const personalDataSection = document.getElementById('personalDataSection');
    const inscriptionSection = document.getElementById('inscriptionSection');
    const confirmationSection = document.getElementById('confirmationSection');
    personalDataSection.classList.add('d-none');
    inscriptionSection.classList.add('d-none');
    confirmationSection.classList.remove('d-none');
    changeNavigationBetweenSections(3);
}

function setCourses() {
    const career = document.getElementById('career').value;
    const coursesView = document.getElementById('courses');
    const coursesTitles = coursesView.getElementsByTagName('h5');

    for (let i = 0; i < coursesTitles.length; i++) {
        coursesTitles[i].innerText = courses[career][i];
    }

    const coursesDivs = coursesView.getElementsByClassName('mb-2');

    for (let i = 0; i < coursesDivs.length; i++) {
        const radioButtons = coursesDivs[i].getElementsByTagName('input');

        for (const radioButton of radioButtons) {
            radioButton.setAttribute('name', coursesTitles[i].innerText);
        }
    }
}

function checkSelectedCourses(career) {
    const careerSpecificCourses = courses[career];
    const selectedCourses = [];

    for (let i = 0; i < careerSpecificCourses.length; i++) {
        const radioButtons = document.getElementsByName(careerSpecificCourses[i]);
        for (const radioButton of radioButtons) {
            if (radioButton.checked)
                selectedCourses.push(radioButton);
        }
    }

    return selectedCourses;
}

function showPersonalData() {
    const personalDataVisualization = document.getElementById('personalDataVisualization');
    personalDataVisualization.children[1].innerHTML = `
        <p><strong>Nombre:</strong> ${nameInput.value}</p>
        <p><strong>Provincia:</strong> ${provinceInput.value}</p>
        <p><strong>Cuidad:</strong> ${cityInput.value}</p>
        <p><strong>Sector:</strong> ${sectorInput.value}</p>
        <p><strong>Calle:</strong> ${streetInput.value}</p>
        <p><strong>Carrera:</strong> ${careerSelect.value.charAt(0).toUpperCase() + careerSelect.value.slice(1)}</p>
    `;
}

function showSchedule(courses) {
    const table = document.getElementById('scheduleTable');
    const tableBody = table.children[1];
    tableBody.innerHTML = '';

    if (courses.length == 0) {
        table.classList.add('d-none');
        table.previousSibling.innerText = 'No has seleccionado materias';
        return;
    }
    
    table.classList.remove('d-none');
    table.previousSibling.innerText = '';

    for (let i = 0; i < courses.length; i++) {
        const tableRow = document.createElement('tr');
        const schedule = courses[i].parentElement.innerText;

        tableRow.innerHTML = `<td>${courses[i].name}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>`;

        switch (courses[i].value) {
            case 'lun':
                tableRow.children[1].innerText = schedule;
                break;
            case 'mar':
                tableRow.children[2].innerText = schedule;
                break;
            case 'mie':
                tableRow.children[3].innerText = schedule;
                break;
            case 'jue':
                tableRow.children[4].innerText = schedule;
                break;
            case 'vie':
                tableRow.children[5].innerText = schedule;
                break;
            case 'sab':
                tableRow.children[6].innerText = schedule;
                break;
        }

        tableBody.appendChild(tableRow);
    }
}

function resetSelectedCourses(selectedCourses) {
    if (selectedCourses.length != 0) {
        for (const course of selectedCourses) {
            course.checked = false;
        }
    }
}

function resetInscription() {
    bootbox.confirm('¿Estás de acuerdo en confirmar tu selección?', function (result) {
        if (result) {
            const career = $('#career').val();
            resetFormState(true);
            resetSelectedCourses(checkSelectedCourses(career));
            showPersonalDataSection();
            $.notify.defaults({ globalPosition: 'bottom right' })
            $.notify('Tu selección de materias ha sido exitosa', 'success');
        }
    });
}

// sectionOption corresponds to the position of the section
function changeNavigationBetweenSections(sectionOption) {
    const sections = {
        1: 'personalData',
        2: 'inscription',
        3: 'confirmation'
    };

    const navigationSection = document.getElementById('navigationSection');

    if (sections[sectionOption] == 'personalData') {
        navigationSection.innerHTML = '<span>Datos personales</span>';
        resetSelectedCourses(checkSelectedCourses($('#career').val()));
    } else if (sections[sectionOption] == 'inscription') {
        navigationSection.innerHTML = '';
        
        const personalDataSpan = document.createElement('span');
        personalDataSpan.style.color = 'blue';
        personalDataSpan.style.textDecoration = 'underline';
        personalDataSpan.style.cursor = 'pointer';
        personalDataSpan.innerText = 'Datos personales';

        navigationSection.appendChild(personalDataSpan);
        navigationSection.innerHTML += ' > <span>Selección de materias</span>';

        navigationSection.firstChild.onclick = showPersonalDataSection;
    } else if (sections[sectionOption] == 'confirmation') {
        navigationSection.innerHTML += ' > <span>Confirmación</span>';

        const inscriptionSpan = navigationSection.children[1];
        inscriptionSpan.style.color = 'blue';
        inscriptionSpan.style.textDecoration = 'underline';
        inscriptionSpan.style.cursor = 'pointer';

        navigationSection.firstChild.onclick = showPersonalDataSection;
        inscriptionSpan.onclick = showInscriptionSection;
    }
}