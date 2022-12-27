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

  constructor(private http: HttpClient) { }
  baseUrl: string = "https://localhost:7176/api";

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

  getEquipsByAreaId = (areaId: number): Observable<Equipment[]> => {
    return this.http.get<Equipment[]>(
      this.baseUrl + '/Equipment/getEquipByAreaId/' + areaId
    );
  };

  createAndAddNewTicket(ticketObj: Ticket){
    return this.http.post<Ticket>(`https://localhost:7176/api/Ticket`, ticketObj);
  }


}
