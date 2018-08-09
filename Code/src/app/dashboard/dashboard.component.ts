import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

    cards = [
    {
      title: 'Profile', cols: 1, rows: 1, data: [
        {label: 'Name: ', value: 'Muster'},
        {label: 'Vorname: ', value: 'Max'},
        {label: 'Funktion: ', value: 'CEO'},
        {label: 'Gruppen: ', value: 'Puzzle Member'}
      ]
    },
    {
      title: 'Pfeedbacks for me', cols: 1, rows: 1, data: [
        {label: 'Pfeedback 1', value: 1},
        {label: 'Pfeedback 1', value: 1},
        {label: 'Pfeedback 1', value: 1},
        {label: 'Pfeedback 1', value: 1}
      ]
    },
    {
      title: 'Pfeedback from me', cols: 1, rows: 1, data: [
        {label: 'Pfeedback 1', value: 1},
        {label: 'Pfeedback 1', value: 1},
        {label: 'Pfeedback 1', value: 1},
        {label: 'Pfeedback 1', value: 1}
      ]
    },
    {
      title: 'Requests', cols: 1, rows: 1, data: [
        {label: 'Pfeedback 1', value: 1},
        {label: 'Pfeedback 1', value: 1},
        {label: 'Pfeedback 1', value: 1},
        {label: 'Pfeedback 1', value: 1}
      ]
    },

  ];

    profile = this.cards[0];

  constructor() { }

  ngOnInit() {
  }

}
