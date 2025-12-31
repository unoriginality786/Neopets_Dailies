  // Accordion function
function toggleTable(tableId) {
  const tables = document.querySelectorAll(".accordion-content");

  tables.forEach((table) => {
    if (table.id === tableId) {
      table.classList.toggle("active");
    } else {
      table.classList.remove("active");
    }
  });
}

  // Make all links open in a new tab
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a').forEach(link => {
      link.setAttribute('target', '_blank');
    });

  // Center Paragraphs
    document.querySelectorAll('p').forEach(p => {
      p.setAttribute('align', 'center');
    });});

  // Set even width for all table cells
  document.querySelectorAll("table").forEach(table => {
    const firstRow = table.querySelector("tr");
    if (firstRow) {
      const cellCount = firstRow.querySelectorAll("td").length;
      if (cellCount > 0) {
        const evenWidth = (100 / cellCount) + "%";
        table.querySelectorAll("td").forEach(td => {
          td.style.width = evenWidth;
        });}}});
