import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {

  allTickets: Ticket[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadTickets(); // load equip list
  }

  loadTickets(): void {
    this.ticketService.getAllTickets().subscribe((data) => {
      this.allTickets = data;
    });
  }

}
