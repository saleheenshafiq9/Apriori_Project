import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  dataset: Data[] = [];

  constructor() {}

  addData(newData: Data): void {
    this.dataset.push(newData);
    console.log(newData);
  }
}
