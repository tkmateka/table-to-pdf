import { Component, OnInit } from '@angular/core';

import { CommonService } from '../services/common.service';

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

  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }

  downloadPDF() {
    this.common.downloadPDF(this.header, this.tableData);
  }
}
