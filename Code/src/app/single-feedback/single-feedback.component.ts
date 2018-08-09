import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-feedback',
  templateUrl: './single-feedback.component.html',
  styleUrls: ['./single-feedback.component.css']
})
export class SingleFeedbackComponent implements OnInit {

  survey  = [
    {
      title: 'Topic 1', cols: 1, rows: 1, data: [
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'}
      ]
    },
    {
      title: 'Topic 2', cols: 1, rows: 1, data: [
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'}
      ]
    },
    {
      title: 'Topic 3', cols: 1, rows: 1, data: [
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'}
      ]
    },
    {
      title: 'Topic 4', cols: 1, rows: 1, data: [
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'},
        {label: 'Question: ', value: 'Answer'}
      ]
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
