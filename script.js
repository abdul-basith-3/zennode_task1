document.getElementById("form").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault(); 
    // Display success message
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("form").reset();
});