import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export const  generatePDF = async () => {
    const element = document.getElementById("invoice-preview");

    if (!element) {
      alert("Invoice preview not found.");
      return;
    }

    // Wait for rendering
    await new Promise((resolve) => setTimeout(resolve, 300));

    const canvas = await html2canvas(element, {
      scale: 3,
      backgroundColor: "#faf9f5",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("portrait", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice.pdf");
  };