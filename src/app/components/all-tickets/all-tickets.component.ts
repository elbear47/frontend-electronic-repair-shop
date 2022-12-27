import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {

  allTickets: Ticket[] = [];

  userSelectedTicket = {} as Ticket;

  // css variable
  displayStyleModal = 'none';

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.loadTickets(); // load ticket list
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

  updateSelectedTicket(selectedTicket: Ticket): void {
    this.ticketService.setTicket(selectedTicket);// set ticket in service
    this.userSelectedTicket = this.ticketService.getTicket(); // play with ticket in component class
    this.openPopup();  // show popup
  }

  navigateToNewTicket(): void {
    this.router.navigate([('/newTicket')]);
  }

  openPopup(): void {
    this.ticketService.setDisplayStyleModal('block');
    this.displayStyleModal = this.ticketService.getDisplayStyleModal();
  }

  closePopup(): void {
    this.ticketService.setDisplayStyleModal('none');
    this.displayStyleModal = this.ticketService.getDisplayStyleModal();
  }

}
