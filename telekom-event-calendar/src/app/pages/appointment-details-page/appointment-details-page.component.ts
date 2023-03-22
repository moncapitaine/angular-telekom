import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, of, Subscription, switchMap } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PlaygroundService } from 'src/app/services/playground.service';
import { createFutureDateValidator } from 'src/app/validators/createFutureDateValidator';
import { Appointment } from 'src/domain/appointment';

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
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    this.meineFormGruppe = fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
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
      console.log('errors', this.meineFormGruppe.get('name')?.errors);
    });
  }
  ngOnInit(): void {
    this.paramsSubscription = this.activedRoute.params
      .pipe(map((p) => p['appointmentId'] as string | undefined | null))
      .pipe(filter((appointmentId) => !!appointmentId))
      .pipe(
        switchMap((appointmentId) =>
          this.appointmentService.appointmentList$.pipe(
            map((list) => list?.find((item) => item.id === appointmentId))
          )
        )
      )
      .pipe(filter((appointment) => !!appointment))
      .subscribe({
        next: (foundAppointment) => {
          this.meineFormGruppe.patchValue(foundAppointment as Appointment);
        },
        error: (err) => console.error(err),
        complete: () => console.log('subscription completed'),
      });
  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  onSubmit() {
    const appointmentId = this.activedRoute.snapshot.params['appointmentId'];
    this.appointmentService.update(appointmentId, this.meineFormGruppe.value, {
      onSuccess: () => this.router.navigateByUrl('/'),
      onError: (err) => alert(err),
    });
  }
}
