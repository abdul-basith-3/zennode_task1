document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault(); 
    // Display success message
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("myForm").reset();
});