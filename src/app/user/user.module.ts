import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthModalComponent], // exporting it so that it can be used in the app.module
})
export class UserModule {}
