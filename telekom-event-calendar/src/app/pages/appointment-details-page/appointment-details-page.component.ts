import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
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

  constructor(
    fb: FormBuilder,
    private activedRoute: ActivatedRoute,
    private appointmentService: AppointmentService
  ) {
    this.meineFormGruppe = fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
      ],
      start: [new Date(), [createFutureDateValidator()]],
      end: [undefined],
      description: [''],
    });

    this.meineFormGruppe.valueChanges.subscribe((data) => {
      console.log('values changed', data);
    });
    this.meineFormGruppe.statusChanges.subscribe((status) => {
      console.log('status changes', status);
    });
  }
  ngOnInit(): void {
    this.paramsSubscription = this.activedRoute.params.subscribe((p) => {
      const id = p['appointmentId'] ?? '';
      this.appointmentService.appointmentList$.subscribe((list) => {
        const foundAppointment = list?.find((item) => item.id === id);
        // @ts-ignore
        this.meineFormGruppe.patchValue(foundAppointment);
      });
    });
  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
