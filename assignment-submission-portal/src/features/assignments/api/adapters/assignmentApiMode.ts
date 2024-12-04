import { AssignmentModel } from "../../types/assignmentModel";
import { AssignmentApiModel } from "../types/assignmentApiModel";

export function assignmentApiModelAdapter(
  model: AssignmentModel
): AssignmentApiModel {
  return {
    name: model.name,
    email: model.email,
    assignment_description: model.assignmentDescription,
    github_repo_url: model.githubRepoUrl,
    candidate_level: model.candidateLevel,
  };
}
