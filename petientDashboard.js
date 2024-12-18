let patients = [];
let totalPatients = 0;
let admittedPatients = 0;
let outpatients = 0;

// Initialize dashboard with dummy patients
function initializeDashboard() {
    addPatient("John Doe", 45, "Male", "2024-10-20", "A1", "60", "155", "Admitted", "Dr. Smith", "Fever");
    addPatient("Jane Smith", 52, "Female", "2024-10-18", "B3", "60", "155", "Discharged", "Dr. Brown", "Cold");
    addPatient("Bob Johnson", 34, "Male", "2024-10-22", "C2", "60", "155", "Under Observation", "Dr. White", "Cough");
    loadPatientTable();
    updateOverview();
}

// Add a new patient
function addPatient(name, age, gender, admissionDate, ward, weight, height, status, doctor, symptoms) {
    const patientId = `P${String(++totalPatients).padStart(3, '0')}`;
    const newPatient = { id: patientId, name, age, gender, admissionDate, ward, weight, height, status, doctor, symptoms };
    patients.push(newPatient);
    status === "Admitted" ? admittedPatients++ : outpatients++;
}

// Load patients into the table
function loadPatientTable(filteredPatients = patients) {
    const patientTable = document.getElementById("patientTable");
    patientTable.innerHTML = filteredPatients.map(patient => `
        <tr>
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.admissionDate}</td>
            <td>${patient.ward}</td>
            <td>${patient.weight}</td>
            <td>${patient.height}</td>
            <td>${patient.status}</td>
            <td>${patient.doctor}</td>
            <td>${patient.symptoms}</td>
            <td>
                <button onclick="viewProfile('${patient.id}')">View</button>
                ${patient.status === "Admitted" ? `<button onclick="showDischargeForm('${patient.id}')">Discharge</button>` : ''}
                <button onclick="showEditForm('${patient.id}')">Edit</button>
            </td>
        </tr>
    `).join('');
}

// Update overview counts
function updateOverview() {
    document.getElementById("totalPatients").innerText = totalPatients;
    document.getElementById("inpatients").innerText = admittedPatients;
    document.getElementById("outpatients").innerText = outpatients;

    const recentAdmissions = document.getElementById("recentAdmissions");
    recentAdmissions.innerHTML = patients.slice(-3).map(patient => `<li>${patient.name} - Ward: ${patient.ward}</li>`).join('');
}

// Search patients by name or ID
function searchPatient() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredPatients = patients.filter(patient => 
        patient.name.toLowerCase().includes(searchQuery) || patient.id.toLowerCase().includes(searchQuery)
    );
    loadPatientTable(filteredPatients);
}

// View patient profile
function viewProfile(patientId) {
    window.location.href = `petientprofile.html?patientId=${patientId}`;
}

// Show discharge form
function showDischargeForm(patientId) {
    const dischargeForm = document.getElementById('dischargeForm');
    document.getElementById('dischargePatientId').value = patientId;
    dischargeForm.style.display = 'block';
    dischargeForm.scrollIntoView({ behavior: 'smooth' });
}

// Handle discharge form submission
document.getElementById('dischargeFormElement').onsubmit = function(event) {
    event.preventDefault();
    const patientId = document.getElementById('dischargePatientId').value;
    const remarks = document.getElementById('dischargeRemarks').value;

    const patient = patients.find(p => p.id === patientId);
    if (patient) {
        patient.status = "Discharged";
        patient.remarks = remarks;
        outpatients++;
        admittedPatients--;
    }

    closeDischargeForm();
};

// Close discharge form and update table
function closeDischargeForm() {
    document.getElementById('dischargeForm').style.display = 'none';
    loadPatientTable();
    updateOverview();
    document.getElementById('dischargeFormElement').reset();
}

// Toggle admission form visibility
document.getElementById('admissionBtn').onclick = function() {
    const form = document.getElementById('admissionForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
};

// Handle admission form submission
document.getElementById('admissionFormElement').onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const doctorName = document.getElementById('doctorName').value;
    const symptoms = document.getElementById('symptoms').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const ward = document.getElementById('ward').value;

    addPatient(name, age, gender, new Date().toLocaleDateString(), ward, weight, height, "Admitted", doctorName, symptoms);
    closeAdmissionForm();
};

// Close admission form and update table
function closeAdmissionForm() {
    document.getElementById('admissionForm').style.display = 'none';
    loadPatientTable();
    updateOverview();
    document.getElementById('admissionFormElement').reset();
}

// Show edit form
function showEditForm(patientId) {
    const patient = patients.find(p => p.id === patientId);
    if (patient) {
        document.getElementById('editPatientId').value = patient.id;
        document.getElementById('editPatientName').value = patient.name;
        document.getElementById('editAge').value = patient.age;
        document.getElementById('editGender').value = patient.gender;
        document.getElementById('editDoctorName').value = patient.doctor;
        document.getElementById('editSymptoms').value = patient.symptoms;
        document.getElementById('editWeight').value = patient.weight;
        document.getElementById('editHeight').value = patient.height;
        document.getElementById('editWard').value = patient.ward;

        document.getElementById('editForm').style.display = 'block';
        document.getElementById('editForm').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('editPatientName').focus();
    }
}

// Handle edit form submission
document.getElementById('editFormElement').onsubmit = function(event) {
    event.preventDefault();
    const patientId = document.getElementById('editPatientId').value;
    const name = document.getElementById('editPatientName').value;
    const age = document.getElementById('editAge').value;
    const gender = document.getElementById('editGender').value;
    const doctorName = document.getElementById('editDoctorName').value;
    const symptoms = document.getElementById('editSymptoms').value;
    const weight = document.getElementById('editWeight').value;
    const height = document.getElementById('editHeight').value;
    const ward = document.getElementById('editWard').value;

    const patient = patients.find(p => p.id === patientId);
    if (patient) {
        patient.name = name;
        patient.age = age;
        patient.gender = gender;
        patient.doctor = doctorName;
        patient.symptoms = symptoms;
        patient.weight = weight;
        patient.height = height;
        patient.ward = ward;
    }

    closeEditForm();
};

// Close edit form and update table
function closeEditForm() {
    document.getElementById('editForm').style.display = 'none';
    loadPatientTable();
    updateOverview();
    document.getElementById('editFormElement').reset();
}

// Initialize dashboard on page load
initializeDashboard();