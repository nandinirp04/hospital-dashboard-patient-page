// Function to toggle visibility of sections
function toggleSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    // Show the clicked section
    var sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Function to calculate the adjusted medication dose based on patient's weight and age
function calculateDose() {
    var weight = parseInt(document.getElementById('patientWeight').value);
    var age = parseInt(document.getElementById('patientAge').value);
    var dose = parseInt(document.getElementById('dose').value);

    // Validate if all fields are filled
    if (weight && age && dose) {
        // Example dose adjustment calculation based on weight
        var adjustedDose = dose * (weight / 10); // Simple formula: dose adjusted by weight (example)
        
        // Display the calculated dose result
        document.getElementById('doseResult').innerHTML = "Adjusted Dose: " + adjustedDose.toFixed(2) + " mg";
    } else {
        alert("Please fill all the fields correctly!");
    }
}

// Function to handle the selection of symptoms and update possible conditions
function updatePossibleConditions() {
    let selectedSymptoms = [];
    const symptomCheckboxes = document.querySelectorAll('.form-check-input');
    
    symptomCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedSymptoms.push(checkbox.value);
        }
    });

    // Based on selected symptoms, adjust the possible conditions (simple example logic)
    const conditionsContainer = document.querySelector('.list-group');
    conditionsContainer.innerHTML = '';

    if (selectedSymptoms.length > 0) {
        selectedSymptoms.forEach(symptom => {
            let condition = document.createElement('a');
            condition.classList.add('list-group-item', 'list-group-item-action');
            condition.href = '#';

            switch (symptom) {
                case 'fever':
                    condition.textContent = "Possible: Flu or Viral Infection";
                    break;
                case 'cough':
                    condition.textContent = "Possible: Cold or Cough-related Infection";
                    break;
                case 'headache':
                    condition.textContent = "Possible: Migraine or Viral Infection";
                    break;
                case 'vomiting':
                    condition.textContent = "Possible: Gastrointestinal Infection";
                    break;
                default:
                    condition.textContent = "Possible: General Infection";
            }

            conditionsContainer.appendChild(condition);
        });
    } else {
        let defaultCondition = document.createElement('a');
        defaultCondition.classList.add('list-group-item', 'list-group-item-action');
        defaultCondition.href = '#';
        defaultCondition.textContent = "Please select symptoms to determine possible conditions";
        conditionsContainer.appendChild(defaultCondition);
    }
}

// Add event listener to symptom checkboxes to dynamically update conditions
const symptomCheckboxes = document.querySelectorAll('.form-check-input');
symptomCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updatePossibleConditions);
});

// Optional: Automatically update conditions on page load if any symptoms are already checked
document.addEventListener('DOMContentLoaded', updatePossibleConditions);




function loadPatientHistory(patientId) {
    // Fetch patient history from the server using patientId
    fetch(`/api/patient/${patientId}/history`)
        .then(response => response.json())
        .then(data => {
            const historyContainer = document.getElementById('patientHistory');
            historyContainer.innerHTML = ''; // Clear previous history
            data.forEach(record => {
                const recordElement = document.createElement('div');
                recordElement.innerHTML = `
                    <p>Date: ${record.date}</p>
                    <p>Diagnosis: ${record.diagnosis}</p>
                    <p>Treatment: ${record.treatment}</p>
                    <hr>
                `;
                historyContainer.appendChild(recordElement);
            });
        })
        .catch(error => console.error('Error fetching patient history:', error));
}