function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
  
    // Check for valid inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid values for weight and height.");
      return;
    }
  
    // Calculate BMI
    const bmi = weight / (height * height);
    document.getElementById("bmi-result").innerText = "Your BMI: " + bmi.toFixed(2);
  
    // Rotate the needle based on BMI value
    rotateNeedle(bmi);
  }
  
  function rotateNeedle(bmi) {
    const needle = document.getElementById("needle");
    let angle;
  
    // Set angle for each BMI range
    if (bmi < 18.5) {
      angle = -45;  // Underweight (Green)
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      angle = 0;  // Normal (Blue)
    } else if (bmi >= 25 && bmi <= 29.9) {
      angle = 45;  // Overweight (Yellow)
    } else if (bmi >= 30 && bmi <= 39.9) {
      angle = 90;  // Obese (Orange)
    } else if (bmi >= 40) {
      angle = 135;  // Morbidly Obese (Red)
    }
  
    // Apply rotation to the needle
    needle.style.transform = `rotate(${angle}deg)`;
  }
  
