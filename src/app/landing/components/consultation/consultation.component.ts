import type { ElementRef, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';
import { catchError, debounceTime, delay, finalize, of, Subject, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BACKEND_ROOT } from '@app/app.config';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

interface Consultation {
  nameFF: string;
  projectFF: string;
  telFF: string;
  contactFF: string;
}

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgxMask()],
  imports: [MainButtonDirective, ReactiveFormsModule, NgxMaskDirective],
})
export class ConsultationComponent implements OnInit {
  protected successMsg = viewChild<ElementRef<HTMLSpanElement>>('successMsg');
  protected submitBtn = viewChild<ElementRef<HTMLButtonElement>>('submitBtn');

  protected submitClick = new Subject<void>();
  protected form: FormGroup;

  private destroyRef = inject(DestroyRef);
  private formBuilder = inject(FormBuilder);
  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameFF: new FormControl(null, Validators.required),
      projectFF: new FormControl(null, Validators.required),
      telFF: new FormControl(null, [Validators.required]),
      contactFF: new FormControl(null, Validators.required),
    } as Record<keyof Consultation, FormControl>);

    const successMsgEl = this.successMsg().nativeElement;
    const submitBtnEl = this.submitBtn().nativeElement;

    this.submitClick
      .pipe(
        tap(() => submitBtnEl.classList.add('loading')),
        debounceTime(500),
        switchMap(() => {
          const value = this.form.getRawValue() as Consultation;

          successMsgEl.classList.remove('opacity-100');

          return this.httpClient.post(BACKEND_ROOT + '/sendMail', { ...value, telFF: '+7' + value.telFF }).pipe(
            tap(() => successMsgEl.classList.add('opacity-100')),
            delay(10000),
            tap(() => successMsgEl.classList.remove('opacity-100')),
          );
        }),
        catchError(() => {
          successMsgEl.innerText = 'Ошибка при отправке запроса!';
          successMsgEl.classList.add('opacity-100');

          return of(false);
        }),
        finalize(() => submitBtnEl.classList.remove('loading')),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
