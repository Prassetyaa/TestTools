import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { UserDomain } from 'src/app/feature/user/domain/user.domain';
import { AuthState } from 'src/app/shared/auth/state/auth.state';
import { SchemeIso20022JsonService } from '../../service/scheme-iso20022-json.service';
import { ForkJoinHelper } from 'src/app/shared/utils/rxjs.utils';

@Component({
  selector: 'app-iso20022-json-details',
  templateUrl: './iso20022-json-details.component.html',
  styleUrls: ['./iso20022-json-details.component.css']
})
export class Iso20022JsonDetailsComponent implements OnInit, OnDestroy {
  @Select(AuthState.userData) userData$!: Observable<UserDomain>;

  private destroyer$ = new Subject();

  isLoading: boolean = false;
  activeIndex: number = 0;

  constructor(
    private router: Router,
    private iso20022JSONService: SchemeIso20022JsonService
  ) {}

  ngOnInit() {
    this.userData$.pipe(takeUntil(this.destroyer$)).subscribe((data) => {
      if (data != undefined) {
        this.isLoading = true;
        this.iso20022JSONService.onGetAllInformation((ctx) => {
          const id = Number(this.router.url.split('/').pop());
          ForkJoinHelper(
            [
              
              // ctx.dispatch(new TransParamGetById(id))
            ],
            this.destroyer$,
            () => {
              this.isLoading = false;
            }
          );
        });
      } else {
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy() {
    this.iso20022JSONService.onResetAllInformation((ctx) => {
      ForkJoinHelper(
        [],
        this.destroyer$,
        () => {
          this.destroyer$.next(true);
          this.destroyer$.complete();
        }
      );
    });
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }

  onLoading(stat: boolean) {
    this.isLoading = stat;
  }

  onTabChange(event: any) {
    this.activeIndex = event.index;
    const className = document.querySelector('.first-container');

    if (event.index != 0) {
      if (!className?.classList.contains('tab-fit')) {
        className?.classList.add('tab-fit');
      }
    } else {
      className?.classList.remove('tab-fit');
    }
  }
}
