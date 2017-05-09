import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ScreamingIntoTheVoidService {
  steps: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.steps = database.list('/steps');
  }

  getSteps() {
    return this.steps;
  }

  getStepById(stepId) {
    return this.database.object('steps/' + stepId);
  }

}
