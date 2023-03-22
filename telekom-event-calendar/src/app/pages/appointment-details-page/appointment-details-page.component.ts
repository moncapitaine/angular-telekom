import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaygroundService } from 'src/app/services/playground.service';
import { createFutureDateValidator } from 'src/app/validators/createFutureDateValidator';

@Component({
  selector: 'app-appointment-details-page',
  templateUrl: './appointment-details-page.component.html',
  styleUrls: ['./appointment-details-page.component.css'],
})
export class AppointmentDetailsPageComponent implements OnInit, OnDestroy {
  paramsSubscription?: Subscription;
  meineFormGruppe: FormGroup;
  constructor(fb: FormBuilder, private activedRoute: ActivatedRoute) {
    console.log('snapshot', activedRoute.snapshot.params);
    this.meineFormGruppe = fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
      ],
      start: [new Date(), [createFutureDateValidator()]],
      end: [undefined],
      description: [''],
    });
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
