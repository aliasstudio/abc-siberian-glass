import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { MainButtonDirective } from '@app/shared/directives/main-button.directive';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BACKEND_ROOT } from '@app/app.config';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNgxMask()],
  imports: [MainButtonDirective, ReactiveFormsModule, NgxMaskDirective],
})
export class ConsultationComponent implements OnInit {
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
    });

    this.submitClick
      .pipe(
        debounceTime(2000),
        switchMap(() => this.httpClient.post(BACKEND_ROOT + '/sendMail', this.form.getRawValue())),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
