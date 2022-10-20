function validatePersonalData() {
    const nameInput = document.getElementById('name');
    const provinceInput = document.getElementById('province');
    const cityInput = document.getElementById('city');
    const sectorInput = document.getElementById('sector');
    const streetInput = document.getElementById('street');
    const careerSelect = document.getElementById('career');

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