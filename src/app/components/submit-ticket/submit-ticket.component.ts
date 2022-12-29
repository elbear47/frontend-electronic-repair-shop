import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/interfaces/area';
import { Ticket } from '../../interfaces/ticket';
import { TicketService } from '../../services/ticket.service';
import { Equipment } from '../../interfaces/equipment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-ticket',
  templateUrl: './submit-ticket.component.html',
  styleUrls: ['./submit-ticket.component.css']
})
export class SubmitTicketComponent implements OnInit {

  constructor(private ticketService: TicketService, private router: Router) { }

  ticketModel = {} as Ticket;
  harcodedUserId: number = 1;
  areaList: Area[] = [];
  equipList: Equipment[] = [];
  numberChoices: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];



  ngOnInit(): void {
    this.loadAreas();
    this.loadEquips();
    this.ticketModel.userId = this.harcodedUserId; // set ticket user id to the hardcoded value
  }

  loadAreas(): void {
    this.ticketService.getAllAreas().subscribe((response) => {
      this.areaList = response;
    })
  }
  loadEquips(): void {
    this.ticketService.getAllEquipment().subscribe((data) => {
      this.equipList = data;
    })
  }
  checkEmptyFields(): boolean{
    // title
    //area
    //equip
    //priority
    //manufacturer
    //part number
    //defect symptom
    //postRepairDispo
    //qty
    return true;


  }

  clearAllInputs(): void {
    this.ticketModel = {} as Ticket; // reset values by reinitalizing to empty ticket
  }

  submitNewTicket(): void{
    // check if all fields are filled in
    console.log(Object.keys(this.ticketModel));

    this.ticketService.addNewTicket(this.ticketModel).subscribe();
    this.clearAllInputs();
    this.navigateHome(); // navigate back home after submit
  }

  navigateHome() : void {
    this.router.navigate(['/home']);
  }


}
