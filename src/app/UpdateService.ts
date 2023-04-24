import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter } from 'rxjs';
export class UpdateService{
    constructor(private swUpdate: SwUpdate, private snackbar: MatSnackBar){}
    checkForUpdates() {
        if (this.swUpdate.isEnabled) {
          this.swUpdate.available
            .pipe(
              filter(event => event.type === 'UPDATE_AVAILABLE')
            )
            .subscribe(event => {
              const snackbarRef = this.snackbar.open('Update available', 'Reload');
              snackbarRef.onAction().subscribe(() => {
                this.swUpdate.activateUpdate().then(() => document.location.reload());
              });
            });
        }
    }
}