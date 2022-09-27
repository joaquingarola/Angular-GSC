import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './event.service';
import { EventDetailsComponent } from './event-details/event-details.component';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsGuard implements CanActivate, CanDeactivate<EventDetailsComponent> {

  constructor (private eventService: EventService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const id = route.paramMap.get("id");
      if (!id) {
        return false;
      }
      return !!this.eventService.getById(id);
  }

  canDeactivate(
    component: EventDetailsComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot | undefined
    ): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      
      return component.reviewed;
    }
}
