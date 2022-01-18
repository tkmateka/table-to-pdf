import { Injectable } from '@angular/core';

let { jsPDF } = require('jspdf');
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  base64 = '';

  constructor() { }

  // Export PDF
  downloadPDF(header: any[], tableData: any[]): void {
    let pdf = new jsPDF();

    pdf.text('Angular PDF Table', 15, 10);
    pdf.setFontSize(12);
    pdf.setTextColor(100);
    pdf.addImage('../assets/pdf.png', 'JPEG', 185, 3, 10, 10);

    let text = "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune";

    let textTab = pdf.splitTextToSize(text, 200, { textIndent: 30 });
    pdf.text(15, 20, textTab);

    (pdf as any).autoTable({
      head: header,
      body: tableData,
      theme: 'striped',
      headStyles: {
        halign: "center",
        valign: "middle",
        lineWidth: 0.25,
        lineColor: 200
      },
      bodyStyles: {
        halign: "center",
        lineWidth: 0.25,
        lineColor: 200
      },
      margin: {
        top: 35
      },
      didDrawCell: (data: any) => {
        // console.log(data.column.index)
      }
    })

    // Open PDF document in browser's new tab
    pdf.output('dataurlnewwindow')

    // Download PDF doc  
    // pdf.save('table.pdf');
  }

}
