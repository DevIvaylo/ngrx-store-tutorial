import {Tutorial} from './models/tutorial';

// We will import this file within the components that we wish to access ngrx.

export interface AppState {
  readonly tutorial: Tutorial[];
}
