function expandirAspectos() {
    var items = document.getElementsByClassName("accordion-item");

    for (var i = 0; i < items.length; i++) {
        var header = items[i].getElementsByClassName("accordion-header")[0];

        header.addEventListener("click", function () {
            var currentItem = this.parentElement;
            var content = currentItem.getElementsByClassName("accordion-content")[0];

            // Alterna el ítem actual (sin cerrar los demás)
            if (currentItem.classList.contains("active")) {
                currentItem.classList.remove("active");
                content.style.maxHeight = null;
            } else {
                currentItem.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}
