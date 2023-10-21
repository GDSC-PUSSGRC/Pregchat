const fs = require('fs');

// Read the JSON file
const firstAidData = fs.readFileSync('firstAidTable.json');
// const medicalEmergencyData = fs.readFileSync('medicalEmergencyTable.json');

// Parse the JSON data
const firstAidTable = JSON.parse(firstAidData);
// const medicalEmergencyTable = JSON.parse(medicalEmergencyData);

// Function to find the corresponding row in the table
function findRowInTable(table, symptom, severity, duration) {
  for (let i = 0; i < table.data.length; i++) {
    const row = table.data[i];
    if (row.Symptom === symptom && row.Severity === severity && row.Duration === duration) {
      return row;
    }
  }
  return null; // Row not found
}

// Function to get medication, care, and exercise
function getFirstAid(symptom, severity, duration) {
  const row = findRowInTable(firstAidTable, symptom, severity, duration);
  if (row !== null) {
    return {
      medication: row.Medication,
      care: row.Care,
      exercise: row.Exercises
    };
  } else {
    return null; // No first aid information found for given inputs
  }
}

// Function to get medical emergency information
function getMedicalEmergency(symptom, severity, duration) {
  const row = findRowInTable(medicalEmergencyTable, symptom, severity, duration);
  if (row !== null) {
    return {
      medication: row.Medication,
      care: row.Care,
      exercise: row.Exercises
    };
  } else {
    return null; // No medical emergency information found for given inputs
  }
}

// Example usage
const symptom = 'Bleeding';
const severity = 'Severe';
const duration = 'More than 30 minutes';

const firstAid = getFirstAid(symptom, severity, duration);
const medicalEmergency = getMedicalEmergency(symptom, severity, duration);

console.log('First Aid:');
console.log(firstAid);
console.log('Medical Emergency:');
console.log(medicalEmergency);
