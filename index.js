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
    displayPatients(); // Update the table with the new patient
}

// Function to display all patients in a table format
function displayPatients() {
    const patientBody = document.getElementById('patientBody');

    // Clear the table body
    patientBody.innerHTML = '';

    // Generate table rows for each patient
    patients.forEach(patient => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
        `;
        patientBody.appendChild(tr);
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
    displayPatients(); // Update the table after deletion
}
