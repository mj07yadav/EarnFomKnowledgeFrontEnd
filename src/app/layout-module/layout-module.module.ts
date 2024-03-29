//angular imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentComponent } from "./content/content.component";
import { LayoutComponent } from "./layout.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSidenavModule } from "@angular/material/sidenav";
import { Routes, RouterModule } from "@angular/router";
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatNavList,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatRadioModule,
  MatSnackBarModule
} from "@angular/material";

//typescript imports
import { QuizComponent } from "./quiz/quiz.component";
import { WalletComponent } from "./wallet/wallet.component";
import { ProfileComponent } from "./profile/profile.component";
import { CategoryModalComponent } from './category-modal/category-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ActivityCenterComponent } from './activity-center/activity-center.component';
import { FilterPipe } from './filter.pipe';


//routing configuration
const routes: Routes = [
  {
    path: "layout",
    component: LayoutComponent,
    children: [
      {
        path : "",
        component:ContentComponent,
        // data:{animation:'stepper'}
      },
      {
        path: "quiz/:quizid/:username",
        component: QuizComponent,
        // data:{animation:'stepper'}
      },
      {
        path: "wallet",
        component: WalletComponent,
        // data:{animation:'stepper'}
      },
      {
        path: "profile",
        component: ProfileComponent,
        // data:{animation:'stepper'}
      },
      {
        path: "activity",
        component: ActivityCenterComponent,
        // data:{animation:'stepper'}
      }
    ]
  }
];

@NgModule({
  declarations: [
    ContentComponent,
    LayoutComponent,
    QuizComponent,
    WalletComponent,
    ProfileComponent,
    CategoryModalComponent,
    FilterPipe,
    ActivityCenterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  entryComponents: [CategoryModalComponent],
  exports: [RouterModule, ContentComponent, LayoutComponent, MatToolbarModule]
})
export class LayoutModuleModule {}
