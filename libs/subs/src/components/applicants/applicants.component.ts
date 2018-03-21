import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { Person } from "../../models";
import { Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { SubsState, getSubApplicantsEntities } from "../../+state/subs.interfaces";
import * as fromSubsActions from "../../+state/subs.actions";

@Component({
  selector: 'applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent implements OnInit {
  applicants$: Observable<Array<Person>>
  subId: number

  constructor(private store: Store<SubsState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.applicants$ = this.store.select(getSubApplicantsEntities);
    this.route.paramMap.subscribe(route => this.subId = parseInt(route["params"].subId, 10))
  }

  acceptApplicant(applicantId) {
    const payload = { subId: this.subId, applicantId: applicantId };
    this.store.dispatch(new fromSubsActions.AcceptApplicant(payload));
  }

  rejectApplicant(applicantId) {
    const payload = { subId: this.subId, applicantId: applicantId };
    this.store.dispatch(new fromSubsActions.RejectApplicant(payload));
  }
}