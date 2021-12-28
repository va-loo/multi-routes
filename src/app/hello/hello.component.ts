import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {
  readonly user$ = this.route.data.pipe(pluck('user'));

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {
  }


  onClose(): void {
    this.router.navigate([{ outlets: { modal: null } }], { relativeTo: this.route.parent })
  }

}
