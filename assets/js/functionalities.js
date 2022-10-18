function validatePersonalData() {
    const nameInput = document.getElementById('name');
    const provinceInput = document.getElementById('province');
    const cityInput = document.getElementById('city');
    const sectorInput = document.getElementById('sector');
    const streetInput = document.getElementById('street');
    const careerSelect = document.getElementById('career');

    let fieldsAreValidated = true;

    if (!nameInput.value || nameInput.value == '' || nameInput.value == null) {
        nameInput.classList.remove('border-success');
        nameInput.classList.add('border-danger');
        fieldsAreValidated = false;
    } else {
        nameInput.classList.remove('border-danger');
        nameInput.classList.add('border-success');
    }

    if (!provinceInput.value || provinceInput.value == '' || provinceInput.value == null) {
        provinceInput.classList.remove('border-success');
        provinceInput.classList.add('border-danger');
        fieldsAreValidated = false;
    } else {
        provinceInput.classList.remove('border-danger');
        provinceInput.classList.add('border-success');
    }

    if (!cityInput.value || cityInput.value == '' || cityInput.value == null) {
        cityInput.classList.remove('border-success');
        cityInput.classList.add('border-danger');
        fieldsAreValidated = false;
    } else {
        cityInput.classList.remove('border-danger');
        cityInput.classList.add('border-success');
    }

    if (!sectorInput.value || sectorInput.value == '' || sectorInput.value == null) {
        sectorInput.classList.remove('border-success');
        sectorInput.classList.add('border-danger');
        fieldsAreValidated = false;
    } else {
        sectorInput.classList.remove('border-danger');
        sectorInput.classList.add('border-success');
    }

    if (!streetInput.value || streetInput.value == '' || streetInput.value == null) {
        streetInput.classList.remove('border-success');
        streetInput.classList.add('border-danger');
        fieldsAreValidated = false;
    } else {
        streetInput.classList.remove('border-danger');
        streetInput.classList.add('border-success');
    }

    if (!careerSelect.value || careerSelect.value == '' || careerSelect.value == null) {
        careerSelect.classList.remove('border-success');
        careerSelect.classList.add('border-danger');
        fieldsAreValidated = false;
    } else {
        careerSelect.classList.remove('border-danger');
        careerSelect.classList.add('border-success');
    }

    if (!fieldsAreValidated) {
        // This alert has to be changed by a jQuery component
        alert('Debes rellenar todos los campos');
        return false;
    }

    return true;
}

function clearInputsData(dataHasToBeCleaned = false) {
    const nameInput = document.getElementById('name');
    const provinceInput = document.getElementById('province');
    const cityInput = document.getElementById('city');
    const sectorInput = document.getElementById('sector');
    const streetInput = document.getElementById('street');
    const careerSelect = document.getElementById('career');

    if (dataHasToBeCleaned) {
        nameInput.value = '';
        provinceInput.value = '';
        cityInput.value = '';
        sectorInput.value = '';
        streetInput.value = '';
        careerSelect.value = '';
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
    clearInputsData();
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
    } else if (sections[sectionOption] == 'inscription') {
        const personalDataSpan = document.createElement('span');
        navigationSection.innerHTML = '';
        personalDataSpan.style.color = 'blue';
        personalDataSpan.style.textDecoration = 'underline';
        personalDataSpan.style.cursor = 'pointer';
        personalDataSpan.innerText = 'Datos personales';

        navigationSection.appendChild(personalDataSpan);
        navigationSection.innerHTML += ' > <span>Inscripcion</span>';

        navigationSection.children[0].onclick = function () {
            showPersonalDataSection();
        }
    } else if (sections[sectionOption] == 'confirmation') {
        const inscriptionSpan = navigationSection.children[1];
        inscriptionSpan.style.color = 'blue';
        inscriptionSpan.style.textDecoration = 'underline';
        inscriptionSpan.style.cursor = 'pointer';

        navigationSection.innerHTML += ' > <span>Confirmación</span>';

        navigationSection.children[0].onclick = function () {
            showPersonalDataSection();
        }

        navigationSection.children[1].onclick = function () {
            showInscriptionSection();
        }
    }
}