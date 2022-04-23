import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newData = new Data();

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  addData(): void {
    //console.log(this.newData);
    this.dataService.addData(this.newData);
    const listData = this.newData.listItems.split('\n');
    const transactionData = this.newData.listTransactions.split('\n');
    let j = 0;
    let listDetail;
    let L1 = new Array();
    let C2 = new Array();
    let L2 = new Array();
    let C3 = new Array();
    let Candidate2;

    listData.forEach((element, index) => {
      var internalSup = 0;
      for (j = 0; j < transactionData.length; j++) {
        if (transactionData[j].includes(element)) internalSup++;
      }
      listDetail = {
        item: element,
        supCount: internalSup,
      };
      L1[index] = listDetail;
    });

    L1.forEach((element, index) => {
      if (element.supCount < this.newData.minsup) L1.splice(index, 1);
    });
    console.log(L1);

    let k = 0;
    L1.forEach((element, index) => {
      for (j = index + 1; j < L1.length; j++) {
        Candidate2 = {
          item: element.item + ',' + L1[j].item,
          supCount2: 0,
        };
        C2[k] = Candidate2;
        k++;
      }
    });
    //console.log(this.newData.minsup);
    C2.forEach((element, index) => {
      var internalSup2 = 0;
      var can = element.item.split(',');
      //console.log(can);
      for (j = 0; j < transactionData.length; j++) {
        if (
          transactionData[j].includes(can[0]) &&
          transactionData[j].includes(can[1])
        )
          internalSup2++;
      }
      element.supCount2 = internalSup2;
    });
    // console.log(C2);

    // C2.forEach((element, index) => {
    //   console.log(element.supCount2);
    //   if (element.supCount2 <= this.newData.minsup) {
    //     console.log(index);
    //     C2.splice(index, 1);
    //   }
    // });
    C2.forEach((element) => {
      if (element.supCount2 >= this.newData.minsup) L2.push(element);
    });

    L1.forEach((element) => {});

    console.log(L2);
    let supCount = 0;
    let i = 0;
    this.router.navigate(['frequent']);
  }
}
