import { Component, OnInit } from '@angular/core';
import { Event, EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event: Event | undefined;
  public reviewed: boolean = false;

  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
		this.event = this.eventService.getById(id!);
  }

  returnToEvents(): void {
		this.router.navigateByUrl("/events");
	}

  reviewedChange() {
		this.reviewed = !this.reviewed;
	}

}
