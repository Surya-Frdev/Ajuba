 // Sorting functionality
 document.querySelectorAll("th").forEach(header => {
    header.addEventListener("click", () => {
        const table = header.parentElement.parentElement.parentElement;
        const tbody = table.querySelector("tbody");
        const rows = Array.from(tbody.querySelectorAll("tr"));
        const index = Array.from(header.parentElement.children).indexOf(header);
        const isAscending = header.classList.contains("sort-asc");

        rows.sort((a, b) => {
            const aText = a.children[index].textContent.trim();
            const bText = b.children[index].textContent.trim();
            return isAscending
                ? aText.localeCompare(bText, undefined, { numeric: true })
                : bText.localeCompare(aText, undefined, { numeric: true });
        });

        rows.forEach(row => tbody.appendChild(row));
        document.querySelectorAll("th").forEach(th => th.classList.remove("sort-asc", "sort-desc"));
        header.classList.toggle("sort-asc", !isAscending);
        header.classList.toggle("sort-desc", isAscending);
    });
});