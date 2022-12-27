import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../interfaces/area';
import { Equipment } from '../interfaces/equipment';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  currentTicket = {} as Ticket;
  displayStyleModal: string = 'none';
  baseUrl: string = "https://localhost:7176/api";

  constructor(private http: HttpClient) { }


  getAllAreas = (): Observable<Area[]> => {
    return this.http.get<Area[]>(
      this.baseUrl + '/Area'
    );
  };

  getAllEquipment = (): Observable<Equipment[]> => {
    return this.http.get<Equipment[]>(
      this.baseUrl + '/Equipment'
    );
  };

  getAllTickets = (): Observable<Ticket[]> => {
    return this.http.get<Ticket[]>(
      this.baseUrl + '/Ticket'
    );
  };

  getClosedTickets = (): Observable<Ticket[]> => {
    return this.http.get<Ticket[]>(
      this.baseUrl + '/Ticket/GetClosedTickets'
    );
  };

  getOpenTickets = (): Observable<Ticket[]> => {
    return this.http.get<Ticket[]>(
      this.baseUrl + '/Ticket/GetOpenTickets'
    );
  };

  getEquipsByAreaId = (areaId: number): Observable<Equipment[]> => {
    return this.http.get<Equipment[]>(
      this.baseUrl + '/Equipment/getEquipByAreaId/' + areaId
    );
  };

  addNewTicket(ticketObj: Ticket){
    return this.http.post<Ticket>(`https://localhost:7176/api/Ticket`, ticketObj);
  }


  // getters and setters
  setTicket(selectedTicket: Ticket): void {
    this.currentTicket =  selectedTicket;
  }

  getTicket(): Ticket {
    return this.currentTicket;
  }

  // css getters and setters
  setDisplayStyleModal(newStyle: string): void{
    this.displayStyleModal = newStyle;
  }

  getDisplayStyleModal(): string {
    return this.displayStyleModal;
  }



}
