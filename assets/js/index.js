function main() {
    const registerBtn = document.getElementById('registerBtn');
    const clearBtn = document.getElementById('clearBtn');
    const acceptInscriptionBtn = document.getElementById('acceptInscriptionBtn');
    const confirmInscriptionBtn = document.getElementById('confirmInscriptionBtn');

    let personalDataIsNotCompleted = false;

    registerBtn.onclick = function () {
        personalDataIsNotCompleted = validatePersonalData();

        if (personalDataIsNotCompleted) {
            return;
        }

        showInscriptionSection();
        setCourses();
    };

    clearBtn.onclick = function () {
        resetFormState(true);
    };

    acceptInscriptionBtn.onclick = function () {
        const career = $('#career').val();
        const selectedCourses = checkSelectedCourses(career);
        showConfirmationSection();
        showSchedule(selectedCourses);
        showPersonalData();
    }

    confirmInscriptionBtn.onclick = resetInscription;
}

document.addEventListener('DOMContentLoaded', function () {
    main();
});