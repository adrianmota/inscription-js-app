function showPersonalDataSection() {
    const personalDataSection = document.getElementById('personalDataSection');
    const inscriptionSection = document.getElementById('inscriptionSection');
    const confirmationSection = document.getElementById('confirmationSection');
    inscriptionSection.classList.add('d-none');
    confirmationSection.classList.add('d-none');
    personalDataSection.classList.remove('d-none');
    resetFormState();
    changeNavigation(1);
}

function showInscriptionSection() {
    const personalDataSection = document.getElementById('personalDataSection');
    const inscriptionSection = document.getElementById('inscriptionSection');
    const confirmationSection = document.getElementById('confirmationSection');
    personalDataSection.classList.add('d-none');
    confirmationSection.classList.add('d-none');
    inscriptionSection.classList.remove('d-none');
    changeNavigation(2);
}

function showConfirmationSection() {
    const personalDataSection = document.getElementById('personalDataSection');
    const inscriptionSection = document.getElementById('inscriptionSection');
    const confirmationSection = document.getElementById('confirmationSection');
    personalDataSection.classList.add('d-none');
    inscriptionSection.classList.add('d-none');
    confirmationSection.classList.remove('d-none');
    changeNavigation(3);
}

// sectionOption corresponds to the position of the section
function changeNavigation(sectionOption) {
    const sections = {
        1: 'personalData',
        2: 'inscription',
        3: 'confirmation'
    };

    const navigationSection = document.getElementById('navigationSection');

    if (sections[sectionOption] == 'personalData') {
        navigationSection.innerHTML = '<span>Datos personales</span>';
        resetSelectedCourses(getSelectedCourses($('#career').val()));
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

function showPersonalData() {
    const nameInput = document.getElementById('name');
    const provinceInput = document.getElementById('province');
    const cityInput = document.getElementById('city');
    const sectorInput = document.getElementById('sector');
    const streetInput = document.getElementById('street');
    const careerSelect = document.getElementById('career');
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

        tableRow.innerHTML = `<th scope="row">${courses[i].name}</th>
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