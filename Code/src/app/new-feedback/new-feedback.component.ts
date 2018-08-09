import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.css']
})
export class NewFeedbackComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  survey  = [
    {
      topic: 'topic', data: [
        {shortName: 'Hallo1?', text: 'Muster', description: 'blablabla', itemType: 'YES_NO', id: '1'},
        {shortName: 'Hallo2?', text: 'Muster', description: 'blablabla', itemType: 'RANGE', id: '1'},
        {shortName: 'Hallo3?', text: 'Muster', description: 'blablabla', itemType: 'YES_NO', id: '1'},
        {shortName: 'Hallo4?', text: 'Muster', description: 'blablabla', itemType: 'TEXT', id: '1'}
      ]
    },
    {
      topic: 'topic', data: [
        {shortName: 'Hallo1?', text: 'Muster', description: 'blablabla', itemType: 'YES_NO', id: '1'},
        {shortName: 'Hallo2?', text: 'Muster', description: 'blablabla', itemType: 'RANGE', id: '1'},
        {shortName: 'Hallo3?', text: 'Muster', description: 'blablabla', itemType: 'YES_NO', id: '1'},
        {shortName: 'Hallo4?', text: 'Muster', description: 'blablabla', itemType: 'TEXT', id: '1'}
      ]
    },
    {
      topic: 'topic', data: [
        {shortName: 'Hallo1?', text: 'Muster', description: 'blablabla', itemType: 'YES_NO', id: '1'},
        {shortName: 'Hallo2?', text: 'Muster', description: 'blablabla', itemType: 'RANGE', id: '1'},
        {shortName: 'Hallo3?', text: 'Muster', description: 'blablabla', itemType: 'YES_NO', id: '1'},
        {shortName: 'Hallo4?', text: 'Muster', description: 'blablabla', itemType: 'TEXT', id: '1'}
      ]
    },
    {
      topic: 'topic', data: [
        {shortName: 'Hallo1?', text: 'Muster', description: 'blablabla', itemType: 'YES_NO', id: '1'},
        {shortName: 'Hallo2?', text: 'Muster', description: 'blablabla', itemType: 'RANGE', id: '1'},
        {shortName: 'Hallo3?', text: 'Muster', description: 'blablabla', itemType: 'YES_NO', id: '1'},
        {shortName: 'Hallo4?', text: 'Muster', description: 'blablabla', itemType: 'TEXT', id: '1'}
      ]
    }
];


  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  btnClick(): void {
    this.router.navigate(['dashboard']);
  };

  isTextItem(item): boolean {
    return item.itemType === 'TEXT';
  }

  isRangeItem(item): boolean {
    return item.itemType === 'RANGE';
  }

  isYesnoItem(item): boolean {
    return item.itemType === 'YES_NO';
  }


}
