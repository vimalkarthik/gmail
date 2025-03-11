const table = document.getElementById("myTable");
const existingRow = table.querySelector("tr");

for (let i = 0; i < 3; i++) {
    let newRow = existingRow.cloneNode(true);
    newRow.cells[0].innerText = `Duplicated Row ${i + 1}, Col 1`;
    newRow.cells[1].innerText = `Duplicated Row ${i + 1}, Col 2`;
    table.appendChild(newRow);
}
