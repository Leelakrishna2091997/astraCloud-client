import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { UserValidateComponent } from './user-validate/user-validate.component';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTreeModule } from '@angular/material/tree';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { DepositComponent } from './deposit/deposit.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DenominationComponent } from './denomination/denomination.component';
import { SummaryComponent } from './sumary/summary.component';
import { OtpVDialogComponent } from './otpVerification/otpV-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    DepositComponent,
    DenominationComponent,
    SummaryComponent,
    UserValidateComponent,
    OtpVDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatTreeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    DragDropModule,
    MatSelectModule,
    MatRadioModule,
    MatTooltipModule,
    MatTabsModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatNativeDateModule,
    NgxQRCodeModule,
    MatSliderModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
