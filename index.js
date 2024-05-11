// Initialize an array to store patient data
let patients = [];

// Function to add a patient
function addPatient() {
    const name = prompt("Enter patient's name:");
    const age = prompt("Enter patient's age:");
    const gender = prompt("Enter patient's gender (M/F):");

    // Validate input
    if (!name ||!age ||!gender) {
        alert("Please fill in all the details.");
        return;
    }

    // Add patient to the list
    patients.push({ name, age, gender });
    displayPatients();
}

// Function to display all patients
function displayPatients() {
    const patientList = document.getElementById('patientList');
    patientList.innerHTML = ''; // Clear the list

    // Display each patient
    patients.forEach(patient => {
        const patientElement = document.createElement('p');
        patientElement.textContent = `Name: ${patient.name}, Age: ${patient.age}, Gender: ${patient.gender}`;
        patientList.appendChild(patientElement);
    });
}

// Function to delete a patient
function deletePatient() {
    const name = prompt("Enter the name of the patient to delete:");
    const patientIndex = patients.findIndex(patient => patient.name === name);

    if (patientIndex === -1) {
        alert("Patient not found.");
        return;
    }

    // Remove the patient from the list
    patients.splice(patientIndex, 1);
    displayPatients();
}
