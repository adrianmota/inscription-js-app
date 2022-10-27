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

function resetFormState(dataHasToBeCleaned = false) {
    const nameInput = document.getElementById('name');
    const provinceInput = document.getElementById('province');
    const cityInput = document.getElementById('city');
    const sectorInput = document.getElementById('sector');
    const streetInput = document.getElementById('street');
    const careerSelect = document.getElementById('career');

    nameInput.classList.remove('border-success', 'border-danger');
    provinceInput.classList.remove('border-success', 'border-danger');
    cityInput.classList.remove('border-success', 'border-danger');
    sectorInput.classList.remove('border-success', 'border-danger');
    streetInput.classList.remove('border-success', 'border-danger');
    careerSelect.classList.remove('border-success', 'border-danger');
    
    if (dataHasToBeCleaned) {
        nameInput.value = '';
        provinceInput.value = '';
        cityInput.value = '';
        sectorInput.value = '';
        streetInput.value = '';
        careerSelect.value = '';
        nameInput.focus();
    }
}

function setCourses() {
    const career = document.getElementById('career').value;
    const coursesView = document.getElementById('courses');
    const coursesTitles = coursesView.getElementsByTagName('h5');

    for (let i = 0; i < coursesTitles.length; i++)
        coursesTitles[i].innerText = courses[career][i];

    const coursesDivs = coursesView.getElementsByClassName('mb-2');

    for (let i = 0; i < coursesDivs.length; i++) {
        const radioButtons = coursesDivs[i].getElementsByTagName('input');

        for (const radioButton of radioButtons)
            radioButton.setAttribute('name', coursesTitles[i].innerText);
    }
}

function getSelectedCourses(career) {
    const careerSpecificCourses = courses[career];
    
    if (!careerSpecificCourses)
        return [];
    
    const selectedCourses = [];
    for (let i = 0; i < careerSpecificCourses.length; i++) {
        const radioButtons = document.getElementsByName(careerSpecificCourses[i]);
        
        for (const radioButton of radioButtons) {
            if (!radioButton.checked) continue;

            selectedCourses.push(radioButton);
        }
    }

    return selectedCourses;
}

function resetSelectedCourses(selectedCourses) {
    if (!(selectedCourses.length != 0)) return;

    for (const course of selectedCourses)
        course.checked = false;
}

function resetInscription() {
    bootbox.confirm('¿Estás de acuerdo en confirmar tu selección?', function (result) {
        if (!result) return;
        
        const career = $('#career').val();
        resetSelectedCourses(getSelectedCourses(career));
        showPersonalDataSection();
        resetFormState(true);
        $('#personalDataVisualization div.card-body').html('');
        $.notify.defaults({ globalPosition: 'bottom right' })
        $.notify('Tu selección de materias ha sido exitosa', 'success');
    });
}