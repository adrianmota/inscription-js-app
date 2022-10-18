function main() {
    const registerBtn = document.getElementById('registerBtn');
    const clearBtn = document.getElementById('clearBtn');
    const acceptInscriptionBtn = document.getElementById('acceptInscriptionBtn');

    let personalDataIsValidated = false;
    
    registerBtn.onclick = function () {
        personalDataIsValidated = validatePersonalData();
        
        if (!personalDataIsValidated) {
            return;
        }

        showInscriptionSection();
        setCourses();
    };

    clearBtn.onclick = function () {
        clearInputsData(true);
    };

    acceptInscriptionBtn.onclick = function () {
        showConfirmationSection();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    main();
});