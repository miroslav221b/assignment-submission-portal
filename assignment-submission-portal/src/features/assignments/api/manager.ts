import { axiosConfig } from "@/api/configs/axiosConfig";
import { AssignmentModel } from "../types/assignmentModel";
import { assignmentApiModelAdapter } from "./adapters/assignmentApiMode";
import { ServerErrorType } from "@/api/types/serverErrorType";
import { PostAssignmentSuccessResponseType } from "./types/postAssignmentResponseModel";

export const assignmentApiManager = {
  post(assignment: AssignmentModel) {
    return axiosConfig.post<PostAssignmentSuccessResponseType, ServerErrorType>(
      "/api/tools/candidates/assignments",
      assignmentApiModelAdapter(assignment)
    );
  },
};
