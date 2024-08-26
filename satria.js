function toggleDetails(id) {
    var element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        // Hide all other details sections
        var detailsSections = document.querySelectorAll('.details');
        detailsSections.forEach(function(detail) {
            detail.style.display = 'none';
        });
        element.style.display = "block";
    }
}
