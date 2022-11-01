import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  eventForm = this.fb.group({
		name: ['', Validators.required],
		date: ['', Validators.required],
		time: ['', Validators.required],
		location: this.fb.group({ 
      address: ['', Validators.required], 
      city: ['', Validators.required], 
      country: ['', [Validators.pattern("^(.*?[A-Z]){2,}.*$"), , Validators.required]]
    })
	});

  constructor(private eventService: EventService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
  }

  saveEvent() {
		this.eventService.saveEvent(this.eventForm.value);
    console.log(this.eventForm.value);
		this.router.navigate(["/events"]);
	}

  cancel() {
    this.router.navigate(['/events']);
  }

  isControlValid(control: string) {
    return this.eventForm.get(control)!.errors?.['required'] && this.eventForm.get(control)?.touched
  }

  isCountryValid(control: string){
    return this.eventForm.get(control)!.errors?.['pattern'] && this.eventForm.get(control)?.touched
  }
}
