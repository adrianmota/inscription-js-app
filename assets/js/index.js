document.addEventListener('DOMContentLoaded', function () {
    const registerBtn = document.getElementById('registerBtn');
    const clearBtn = document.getElementById('clearBtn');
    const acceptInscriptionBtn = document.getElementById('acceptInscriptionBtn');
    const confirmInscriptionBtn = document.getElementById('confirmInscriptionBtn');

    registerBtn.onclick = function () {
        let personalDataIsNotCompleted = validatePersonalData();

        if (personalDataIsNotCompleted) return;

        showInscriptionSection();
        setCourses();
    }

    clearBtn.onclick = function () {
        resetFormState(true);
    }

    acceptInscriptionBtn.onclick = function () {
        const career = $('#career').val();
        const selectedCourses = getSelectedCourses(career);
        showConfirmationSection();
        showSchedule(selectedCourses);
        showPersonalData();
    }

    confirmInscriptionBtn.onclick = resetInscription;
});