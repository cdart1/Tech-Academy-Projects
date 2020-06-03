function displayType(animal) {
    var animalSpecies = animal.getAttribute("data-animal-type");
    alert(animalSpecies + " is in the " + animal.innerHTML + " class.");
}

// Functions to open and close the popup form.
function openForm() {
    document.getElementById("animalForm").style.display = "block";
}

function closeForm() {
    document.getElementById("animalForm").style.display = "none";
}

// Added jQuery
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);