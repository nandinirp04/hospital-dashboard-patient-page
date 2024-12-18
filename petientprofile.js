// // Sample patient data object
// const patientData = {
//     basicInfo: {
//       fullName: "John Doe",
//       patientID: "123456",
//       dateOfBirth: "1980-01-01",
//       age: 42,
//       gender: "Male"
//     },
//     contactInfo: {
//       phone: "+123456789",
//       email: "john.doe@example.com",
//       emergencyContact: {
//         name: "Jane Doe",
//         phone: "+987654321"
//       }
//     },
//     medicalInfo: {
//       allergies: "Penicillin",
//       conditions: ["Diabetes", "Hypertension"],
//       medications: ["Metformin", "Amlodipine"],
//       immunizationHistory: "COVID-19 Vaccine (2022)",
//       pastSurgeries: "Appendectomy (2015)"
//     },
//     appointments: {
//       recent: [
//         { date: "2023-10-25", doctor: "Dr. Smith", notes: "Follow-up" },
//         { date: "2023-09-15", doctor: "Dr. Brown", notes: "Check-up" }
//       ],
//       upcoming: [
//         { date: "2023-11-10", doctor: "Dr. Allen", notes: "Consultation" }
//       ]
//     },
//     insurance: {
//       provider: "HealthCare Corp",
//       policyNumber: "HC12345",
//       billingHistory: {
//         paid: 300,
//         pending: 50
//       }
//     }
//   };
  
//   // Function to display patient info in HTML
//   function displayPatientInfo() {
//     document.querySelector(".patient-profile").innerHTML = `
//       <h2>Patient Profile</h2>
//       <div class="info-block">
//         <h3>Basic Information</h3>
//         <p><strong>Full Name:</strong> ${patientData.basicInfo.fullName}</p>
//         <p><strong>Patient ID:</strong> ${patientData.basicInfo.patientID}</p>
//         <p><strong>Date of Birth & Age:</strong> ${patientData.basicInfo.dateOfBirth}, ${patientData.basicInfo.age} years</p>
//         <p><strong>Gender:</strong> ${patientData.basicInfo.gender}</p>
//       </div>
//       <div class="info-block">
//         <h3>Contact Details</h3>
//         <p><strong>Phone Number:</strong> ${patientData.contactInfo.phone}</p>
//         <p><strong>Email Address:</strong> ${patientData.contactInfo.email}</p>
//         <p><strong>Emergency Contact:</strong> ${patientData.contactInfo.emergencyContact.name}, ${patientData.contactInfo.emergencyContact.phone}</p>
//       </div>
//     `;
//   }
  
//   // Function to display recent and upcoming appointments
//   function displayAppointments() {
//     const recentAppointments = patientData.appointments.recent.map(appointment => 
//       `<li>${appointment.date} - ${appointment.doctor} - ${appointment.notes}</li>`
//     ).join("");
  
//     const upcomingAppointments = patientData.appointments.upcoming.map(appointment => 
//       `<li>${appointment.date} - ${appointment.doctor} - ${appointment.notes}</li>`
//     ).join("");
  
//     document.querySelector(".appointment-history").innerHTML = `
//       <h2>Appointment History</h2>
//       <div class="info-block">
//         <h3>Recent Appointments</h3>
//         <ul>${recentAppointments}</ul>
//         <h3>Upcoming Appointments</h3>
//         <ul>${upcomingAppointments}</ul>
//       </div>
//     `;
//   }
  
//   // Function to add a new upcoming appointment
//   function addAppointment(date, doctor, notes) {
//     patientData.appointments.upcoming.push({ date, doctor, notes });
//     displayAppointments();
//   }
  
//   // Display all patient data on page load
//   displayPatientInfo();
//   displayAppointments();
  
//   // Example usage of addAppointment function
//   // This would be connected to a form in a real app
//   addAppointment("2023-12-05", "Dr. Carter", "Routine Check-up");
  

// Assuming you have a patient object with the necessary information
// const patient = {
//   fullName: "John Doe",
//   patientId: "123456",
//   dobAndAge: "01/01/1980, 42 years",
//   gender: "Male",
//   phoneNumber: "+123456789",
//   email: "john.doe@example.com",
//   emergencyContact: "Jane Doe, +987654321",
//   allergies: "Penicillin",
//   medicalConditions: "Diabetes, Hypertension",
//   medications: "Metformin, Amlodipine",
//   immunizations: "COVID-19 Vaccine (2022)",
//   surgeries: "Appendectomy (2015)",
//   recentAppointments: ["2023-10-25 - Dr. Smith - Follow-up", "2023-09-15 - Dr. Brown - Check-up"],
//   upcomingAppointments: ["2023-11-10 - Dr. Allen - Consultation"],
//   insuranceProvider: "HealthCare Corp",
//   policyNumber: "HC12345",
//   billingHistory: "Paid - $300, Pending - $50",
//   doctorsNotes: "Regular blood sugar monitoring recommended.",
//   patientConcerns: "Concerned about medication side effects.",
//   treatmentInstructions: "Continue prescribed medications, exercise daily.",
//   testResults: "Blood Sugar Level: 110 mg/dL, Cholesterol: 180 mg/dL",
//   pendingTests: "Blood Pressure Test",
//   feedback: "Satisfied with consultation, but would like more dietary guidance."
// };

// // Populate the patient profile information
// document.getElementById("fullName").innerText = patient.fullName;
// document.getElementById("patientId").innerText = patient.patientId;
// document.getElementById("dobAndAge").innerText = patient.dobAndAge;
// document.getElementById("gender").innerText = patient.gender;
// document.getElementById("phoneNumber").innerText = patient.phoneNumber;
// document.getElementById("email").innerText = patient.email;
// document.getElementById("emergencyContact").innerText = patient.emergencyContact;
// document.getElementById("allergies").innerText = patient.allergies;
// document.getElementById("medicalConditions").innerText = patient.medicalConditions;
// document.getElementById("medications").innerText = patient.medications;
// document.getElementById("immunizations").innerText = patient.immunizations;
// document.getElementById("surgeries").innerText = patient.surgeries;

// const recentAppointmentsList = document.getElementById("recentAppointments");
// patient.recentAppointments.forEach(appointment => {
//   const listItem = document.createElement("li");
//   listItem.innerText = appointment;
//   recentAppointmentsList.appendChild(listItem);
// });

// const upcomingAppointmentsList = document.getElementById("upcomingAppointments");
// patient.upcomingAppointments.forEach(appointment => {
//   const listItem = document.createElement("li");
//   listItem.innerText = appointment;
//   upcomingAppointmentsList.appendChild(listItem);
// });

// document.getElementById("insuranceProvider").innerText = patient.insuranceProvider;
// document.getElementById("policyNumber").innerText = patient.policyNumber;
// document.getElementById("billingHistory").innerText = patient.billingHistory;
// document.getElementById("doctorsNotes").innerText = patient.doctorsNotes;
// document.getElementById("patientConcerns").innerText = patient.patientConcerns;
// document.getElementById("treatmentInstructions").innerText = patient.treatmentInstructions;
// document.getElementById("testResults").innerText = patient.testResults;
// document.getElementById("pendingTests").innerText = patient.pendingTests;
// document.getElementById("feedback").innerText = patient.feedback;



 // Function to toggle edit mode
 function toggleEditMode() {
  const editButton = document.getElementById('editButton');
  const saveButton = document.getElementById('saveButton');

  // Toggle visibility of buttons
  if (editButton.style.display === 'none') {
      editButton.style.display = 'block';
      saveButton.style.display = 'none';

      // Hide input fields and show spans
      hideInputs();
  } else {
      editButton.style.display = 'none';
      saveButton.style.display = 'block';

      // Show input fields and hide spans
      showInputs();
  }
}

// Function to show input fields
function showInputs() {
  const spans = document.querySelectorAll('span');
  spans.forEach(span => {
      const input = span.nextElementSibling;
      if (input) {
          input.style.display = 'inline'; // Show input field
          input.value = span.innerText; // Copy span value to input
          span.style.display = 'none'; // Hide span
      }
  });
}

// Function to hide input fields
function hideInputs() {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
      const span = input.previousElementSibling;
      if (span) {
          span.style.display = 'inline'; // Show span
          input.style.display = 'none'; // Hide input field
      }
  });
}

// Function to save data
function saveData() {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
      const span = input.previousElementSibling;
      if (span) {
          span.innerText = input.value; // Update span with input value
      }
  });

  // Toggle back to edit mode
  toggleEditMode();
}

// Event listeners
document.getElementById('editButton').addEventListener('click', toggleEditMode);
document.getElementById('saveButton').addEventListener('click', saveData);
