import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import 'hammerjs';
import { HttpClientModule } from "@angular/common/http";
import { MyNavComponent} from "./my-nav/my-nav.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewFeedbackComponent } from './new-feedback/new-feedback.component';
import { SingleFeedbackComponent } from './single-feedback/single-feedback.component';
import { RequestFeedbackComponent } from './request-feedback/request-feedback.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'feedback', component: NewFeedbackComponent},
  {path: 'feedback/:id', component: SingleFeedbackComponent},
  {path: 'request', component: RequestFeedbackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    DashboardComponent,
    NewFeedbackComponent,
    SingleFeedbackComponent,
    RequestFeedbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
