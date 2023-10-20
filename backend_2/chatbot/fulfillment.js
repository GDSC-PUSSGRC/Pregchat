const fs = require('fs');

// Read the symptoms table from a JSON file
const symptomsTable = JSON.parse(fs.readFileSync('symptoms_table.json'));

// Function to find the recommendations for a given symptom
function findRecommendations(symptom) {
  // Find the row in the symptoms table with the matching symptom
  const row = symptomsTable.find((row) => row.Symptom.toLowerCase() === symptom.toLowerCase());

  if (!row) {
    // If the symptom is not found in the table, return an error message
    return `Sorry, we do not have recommendations for the symptom '${symptom}'.`;
  }

  // Otherwise, return the medication, care, and exercise recommendations for the symptom
  return `Medication: ${row.Medication.join(', ')}\nCare: ${row.Care.join(', ')}\nExercise: ${row.Exercise.join(', ')}`;
}

// // Example usage
// console.log(findRecommendations('nausea and vomiting')); // Output: Medication: Vitamin B6, Doxylamine (Unisom), Ginger supplements Care: Eat small, frequent meals, Avoid spicy or greasy foods, Stay hydrated Exercise: Light exercise, such as walking or yoga
// console.log(findRecommendations('back pain')); // Output: Medication: Acetaminophen (Tylenol) Care: Practice good posture, Use a supportive pillow when sleeping, Avoid high heels Exercise: Prenatal yoga or gentle stretching
// console.log(findRecommendations('fatigue')); // Output: Medication: Care: Get plenty of rest, Nap when possible Exercise: Gentle exercise, such as stretching or swimming
// console.log(findRecommendations('cough')); // Output: Sorry, we do not have recommendations for the symptom 'cough'.
