// section 1
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Tutorial} from '../models/tutorial';

// section 2 --> defining the type of action, which is in the form of a string constant.
export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

// section 3  --> creating a class for each action with a constructor that allows us to pass in the payload.
// This isn't a required step, but it does provide you with strong typing.
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {
  }
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {
  }
}

// section 4  -->  exporting all of our action classes for use within our upcoming reducer.
export type Actions = AddTutorial | RemoveTutorial;


