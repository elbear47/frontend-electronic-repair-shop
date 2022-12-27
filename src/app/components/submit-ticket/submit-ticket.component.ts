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

  ticketModel = {} as Ticket;
  areaList: Area[] = [];
  equipList: Equipment[] = [];

  numberChoices: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.getAreas();
    this.getEquips();
  }

  getAreas(): void {
    this.ticketService.getAllAreas().subscribe((response) => {
      this.areaList = response;
    })
  }
  getEquips(): void {
    this.ticketService.getAllEquipment().subscribe((data) => {
      this.equipList = data;
    })
  }

  getEquipsByAreaId(areaId:number): void {
    this.ticketService.getEquipsByAreaId(areaId).subscribe((response) => {
      this.equipList = response;
    })
  }

  getSelectedAreaId(): number {
    return this.ticketModel.areaId;
  }

  clearAllInputs(): void {
    this.ticketModel = {} as Ticket; // reset values by reinitalizing to empty ticket
  }



  submitNewTicket(): void{
    this.ticketService.createAndAddNewTicket(this.ticketModel).subscribe();
  }


}
