import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaygroundService } from 'src/app/services/playground.service';

@Component({
  selector: 'app-appointment-details-page',
  templateUrl: './appointment-details-page.component.html',
  styleUrls: ['./appointment-details-page.component.css'],
})
export class AppointmentDetailsPageComponent implements OnInit, OnDestroy {
  paramsSubscription?: Subscription;
  constructor(private activedRoute: ActivatedRoute) {
    console.log('snapshot', activedRoute.snapshot.params);
  }
  ngOnInit(): void {
    this.paramsSubscription = this.activedRoute.params.subscribe((p) =>
      console.log('subscribe', p)
    );
  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
