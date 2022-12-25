import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {

  numberChoices: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor() { }

  ngOnInit(): void {
  }

}
