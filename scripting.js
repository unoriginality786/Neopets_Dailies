  // Accordion function
  function toggleTable(tableId) {
    const tables = document.querySelectorAll("table");

    tables.forEach((table) => {
      if (table.id === tableId) {
        table.style.display = (table.style.display === "none" || table.style.display === "") ? "table" : "none";
      } else {
        table.style.display = "none";
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
    });
  });
