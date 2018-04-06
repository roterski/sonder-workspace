import { Action } from "@ngrx/store";

export const LOAD_SUGGESTED_PARTIES = "[Groups] Load Suggested Groups";
export const SUGGESTED_PARTIES_LOADED = "[Groups] Suggested Groups Loaded";

export const LOAD_ACCEPTED_PARTIES = "[Groups] Load Accepted Groups";
export const ACCEPTED_PARTIES_LOADED = "[Groups] Accepted Groups Loaded";

export const CREATE_PARTY = "[Groups] Create Group";
export const PARTY_CREATED = "[Groups] Group Created";

export const APPLY_TO_PARTY = "[Groups] Apply To Group";
export const PARTY_APPLIED_TO = "[Groups] Group Applied To";

export const DISMISS_PARTY = "[Groups] Dismiss Group";
export const PARTY_DISMISSED = "[Groups] Group Dismissed";

export const LEAVE_PARTY = "[Groups] Leave Group";
export const PARTY_LEFT = "[Groups] Group Left";

export const LOAD_APPLICANTS = "[Groups] Load Applicants";
export const APPLICANTS_LOADED = "[Groups] Applicants Loaded";

export const ACCEPT_APPLICANT = "[Groups] Accept Applicant";
export const APPLICANT_ACCEPTED = "[Groups] Applicant Accepted";

export const REJECT_APPLICANT = "[Groups] Reject Applicant";
export const APPLICANT_REJECTED = "[Groups] Applicant Rejected";

export const LOAD_FEED = "[Groups] Load Feed";
export const FEED_LOADED = "[Groups] Feed Loaded";

export const CREATE_POST = "[Groups] Create Post";
export const POST_CREATED = "[Groups] Post Created";

export class LoadSuggestedGroups implements Action {
  readonly type = LOAD_SUGGESTED_PARTIES;
}

export class SuggestedGroupsLoaded implements Action {
  readonly type = SUGGESTED_PARTIES_LOADED;
  constructor(public payload: any) {}
}

export class LoadAcceptedGroups implements Action {
  readonly type = LOAD_ACCEPTED_PARTIES;
}

export class AcceptedGroupsLoaded implements Action {
  readonly type = ACCEPTED_PARTIES_LOADED;
  constructor(public payload: any) {}
}

export class CreateGroup implements Action {
  readonly type = CREATE_PARTY;
  constructor(public payload: any) {}
}

export class GroupCreated implements Action {
  readonly type = PARTY_CREATED;
  constructor(public payload: any) {}
}

export class ApplyToGroup implements Action {
  readonly type = APPLY_TO_PARTY;
  constructor(public payload: any) {}
}

export class GroupAppliedTo implements Action {
  readonly type = PARTY_APPLIED_TO;
  constructor(public payload: any) {}
}

export class DismissGroup implements Action {
  readonly type = DISMISS_PARTY;
  constructor(public payload: any) {}
}

export class GroupDismissed implements Action {
  readonly type = PARTY_DISMISSED;
  constructor(public payload: any) {}
}

export class LeaveGroup implements Action {
  readonly type = LEAVE_PARTY;
  constructor(public payload: any) {}
}

export class GroupLeft implements Action {
  readonly type = PARTY_LEFT;
  constructor(public payload: any) {}
}

export class LoadApplicants implements Action {
  readonly type = LOAD_APPLICANTS;
  constructor(public groupId: number) { }
}

export class ApplicantsLoaded implements Action {
  readonly type = APPLICANTS_LOADED;
  constructor(public data: any, public groupId: number) { }
}

export class AcceptApplicant implements Action {
  readonly type = ACCEPT_APPLICANT;
  constructor(public payload: any) { }
}

export class ApplicantAccepted implements Action {
  readonly type = APPLICANT_ACCEPTED;
  constructor(public payload: any) { }
}

export class RejectApplicant implements Action {
  readonly type = REJECT_APPLICANT;
  constructor(public payload: any) { }
}

export class ApplicantRejected implements Action {
  readonly type = APPLICANT_REJECTED;
  constructor(public payload: any) { }
}

export class LoadFeed implements Action {
  readonly type = LOAD_FEED;
  constructor(public groupId: number) {}
}

export class FeedLoaded implements Action {
  readonly type = FEED_LOADED;
  constructor(public data: any, public groupId: number) {}
}

export class CreatePost implements Action {
  readonly type = CREATE_POST;
  constructor(public payload: any, public groupId: number) {}
}

export class PostCreated implements Action {
  readonly type = POST_CREATED;
  constructor(public payload: any, public groupId: number) {}
}
export type GroupsAction =
  | LoadSuggestedGroups
  | SuggestedGroupsLoaded
  | LoadAcceptedGroups
  | AcceptedGroupsLoaded
  | CreateGroup
  | GroupCreated
  | ApplyToGroup
  | GroupAppliedTo
  | DismissGroup
  | GroupDismissed
  | LeaveGroup
  | GroupLeft
  | LoadApplicants
  | ApplicantsLoaded
  | AcceptApplicant
  | ApplicantAccepted
  | RejectApplicant
  | ApplicantRejected
  | LoadFeed
  | FeedLoaded
  | CreatePost
  | PostCreated;