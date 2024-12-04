import { AssignmentApiModel } from "./assignmentApiModel";

export type PostAssignmentSuccessResponseType = {
  status: string;
  message: string;
  data: AssignmentApiModel;
};
