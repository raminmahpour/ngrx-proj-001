import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/lesson.reducer';
import { EffectsModule } from '@ngrx/effects';
// import { ProductEffects } from './state/product.effects';
import { LessonComponent } from './lesson.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LessonEffects } from './state/lesson.effects';
// import { LessonData } from './lesson-data';

const lessonRoutes: Routes = [
  { path: '', component: LessonComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(lessonRoutes),
    StoreModule.forFeature('lessons', reducer),
    EffectsModule.forFeature(
      [ LessonEffects ]
    ),
    // HttpClientInMemoryWebApiModule.forRoot(LessonData),

  ],
  declarations: [
    LessonComponent,
  ]
})
export class LessonModule { }
