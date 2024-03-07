document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Display success message
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("myForm").reset();
});