import { Component, OnInit } from '@angular/core';

let { jsPDF } = require('jspdf');
import 'jspdf-autotable';

@Component({
  selector: 'app-pdf-download',
  templateUrl: './pdf-download.component.html',
  styleUrls: ['./pdf-download.component.scss']
})
export class PdfDownloadComponent implements OnInit {
  header = [['ID', 'Name', 'Email', 'Profile']]

  tableData = [
    [1, 'John', 'john@yahoo.com', 'HR'],
    [2, 'Angel', 'angel@yahoo.com', 'Marketing'],
    [3, 'Harry', 'harry@yahoo.com', 'Finance'],
    [4, 'Anne', 'anne@yahoo.com', 'Sales'],
    [5, 'Hardy', 'hardy@yahoo.com', 'IT'],
    [6, 'Nikole', 'nikole@yahoo.com', 'Admin'],
    [7, 'Sandra', 'Sandra@yahoo.com', 'Sales'],
    [8, 'Lil', 'lil@yahoo.com', 'Sales']
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // Export PDF
  public downloadPDF(): void {
    var pdf = new jsPDF();

    pdf.text('Angular PDF Table', 11, 8);
    pdf.setFontSize(12);
    pdf.setTextColor(99);


    (pdf as any).autoTable({
      head: this.header,
      body: this.tableData,
      theme: 'plain',
      didDrawCell: (data: any) => {
        console.log(data.column.index)
      }
    })

    // Open PDF document in browser's new tab
    pdf.output('dataurlnewwindow')

    // Download PDF doc  
    pdf.save('table.pdf');
  }
}
