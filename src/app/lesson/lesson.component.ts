import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// import { AuthService } from './auth.service';

import { takeWhile, map } from 'rxjs/operators';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromLesson from './state';
import * as lessonActions from './state/lesson.actions';
import * as fromRoot from '../state/app.state';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, OnDestroy {

  //
  lesson: Lesson[];
  // lesson$: Observable<Lesson[]>;
  lessons$: Observable<Lesson[]>;
  maskTitle: string;

  constructor(private store: Store<fromRoot.State>,
    private router: Router,
    private lessonService: LessonService) { }

  ngOnInit(): void {


debugger;
    this.store.dispatch(new lessonActions.Load());
    this.lessons$ = this.store.pipe(select(fromLesson.getLessons));
    // Observable
  //  this.lesson$ = this.lessonService.getProducts();

    // no Observable

    // this.lessonService.getProducts().pipe(
    //   map(res => res)
    //   )
    //   .subscribe(res => {

    //     console.log(res);
    //     this.lesson=res;

    //   });



    this.store.pipe(
      select(fromLesson.getTitle),
    ).subscribe(
      title => this.maskTitle = title
    );


  }


  MyClick(ok): void {
    this.store.dispatch(new lessonActions.MaskTitle(ok));
  }

  ngOnDestroy(): void {
    //   this.componentActive = false;
  }

}
