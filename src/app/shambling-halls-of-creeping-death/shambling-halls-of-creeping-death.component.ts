import { Component, OnInit } from '@angular/core';
import { ScreamingIntoTheVoidService } from '../screaming-into-the-void.service';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Step } from '../step.model';
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-shambling-halls-of-creeping-death',
  templateUrl: './shambling-halls-of-creeping-death.component.html',
  styleUrls: ['./shambling-halls-of-creeping-death.component.css'],
  providers: [ScreamingIntoTheVoidService]
})
export class ShamblingHallsOfCreepingDeathComponent implements OnInit {
  steps: FirebaseListObservable<any[]>;
  stepToDisplay;
  stepId = 0;

  constructor(private screamingIntoTheVoidService: ScreamingIntoTheVoidService) { }

  nextChoice() {
    var selectValue = jQuery('#choiceSelection').val()
    this.stepToDisplay = this.screamingIntoTheVoidService.getStepById(selectValue)
  }

  ngOnInit() {
    this.stepToDisplay = this.screamingIntoTheVoidService.getStepById(this.stepId);
    console.log(this.stepToDisplay)
  }

}
