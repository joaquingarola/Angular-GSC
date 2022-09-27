import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {

  public events!: Event[];

  constructor(private EventService: EventService) { }

  ngOnInit() {
    this.events = this.EventService.getAll();
  }
}
