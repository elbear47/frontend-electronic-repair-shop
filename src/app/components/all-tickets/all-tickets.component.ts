import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';
import { Area } from 'src/app/interfaces/area';
import { Equipment } from '../../interfaces/equipment';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css'],
})
export class AllTicketsComponent implements OnInit {
  constructor(
    private ticketService: TicketService,
    private router: Router
  ) {}

  allTickets: Ticket[] = [];
  areas: Area[] = [];
  equips: Equipment[] = [];

  userSelectedTicket = {} as Ticket;

  // css variable
  displayStyleModal = 'none';
  onEditMode: boolean = false;

  ngOnInit(): void {
    this.loadTickets(); // load ticket list
    this.loadAreas(); // load all areas to get names
    this.loadEquips(); // load all equips to get names
  }

  loadAreas(): void {
    this.ticketService.getAllAreas().subscribe((data) => {
      this.areas = data;
    });
  }
  loadEquips(): void {
    this.ticketService.getAllEquipment().subscribe((data) => {
      this.equips = data;
    });
  }

  loadTickets(): void {
    this.ticketService.getAllTickets().subscribe((data) => {
      this.allTickets = data;
    });
  }
  loadOpenTickets(): void {
    this.ticketService.getOpenTickets().subscribe((data) => {
      this.allTickets = data;
    });
  }
  loadClosedTickets(): void {
    this.ticketService.getClosedTickets().subscribe((data) => {
      this.allTickets = data;
    });
  }

  getAreaNameById(id:number): string {
    return this.areas.find(a => a.areaId == id)?.areaName!; // non null assertion
  }
  getEquipNameById(id:number): string {
    return this.equips.find(e => e.equipmentId == id)?.equipmentName!; // non null assertion
  }
  formatDate(relatedDate: Date):string {
    return relatedDate.toDateString();
  }

  updateSelectedTicket(selectedTicket: Ticket): void {
    this.ticketService.setTicket(selectedTicket); // set ticket in service
    this.onEditMode = false; // turn edit mode off as a default
    this.userSelectedTicket = this.ticketService.getTicket(); // play with ticket in component class
    this.openPopup(); // show popup
  }

  navigateToNewTicket(): void {
    this.router.navigate(['/newTicket']);
  }

  openPopup(): void {
    this.ticketService.setDisplayStyleModal('block');
    this.displayStyleModal = this.ticketService.getDisplayStyleModal();
  }

  closePopup(): void {
    this.ticketService.setDisplayStyleModal('none');
    this.displayStyleModal = this.ticketService.getDisplayStyleModal();
  }

  turnEditModeOn(): void {
    this.onEditMode = true;
  }
  updateTicketDetails(updatedTicket: Ticket): void {
    this.onEditMode = false;
  }
}
