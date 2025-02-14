// Esperar a que el documento cargue
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("downloadPdf");

    button.addEventListener("click", function () {
        generarPDF();
    });
});

// Función para generar el PDF
function generarPDF() {
    const { jsPDF } = window.jspdf; // Librería para crear PDFs
    let pdf = new jsPDF();

    // Texto en el PDF
    pdf.setFont("courier", "bold");
    pdf.setFontSize(20);
    pdf.text("¡Hola! 🌻", 20, 30);
    pdf.text("¿Quieres ser mi San Valentín? ❤️", 20, 50);

    // Guardar el PDF
    pdf.save("carta_san_valentin.pdf");
}
