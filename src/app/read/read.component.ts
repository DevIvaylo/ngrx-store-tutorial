import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Tutorial} from '../models/tutorial';
import {AppState} from '../app.state';
import * as TutorialActions from './../actions/tutorial.actions';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // section 1 -->  defining an observable named tutorials which we will later display in the template.
  tutorials: Observable<Tutorial[]>;

  // section 2 -->  We're accessing the store from ngrx within the constructor, and then selecting
  // tutorial which is defined as a the property from app.module.ts in StoreModule.forRoot({}).
  // This calls the tutorial reducer and returns the tutorial state.
  constructor(private store: Store<AppState>) {
    this.tutorials = this.store.select('tutorial');
  }


  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  ngOnInit() {
  }

}
