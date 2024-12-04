"use client";
import { useForm } from "react-hook-form";
import { AssignmentModel } from "../types/assignmentModel";

export default function useAssignmentForm() {
  const { register, ...formProps } = useForm<AssignmentModel>();
  return {
    ...formProps,
    register: {
      name: register("name", {
        required: "Name is required",
      }),
      email: register("email", {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      }),
      assignmentDescription: register("assignmentDescription", {
        required: "Assignment description is required",
        minLength: {
          value: 10,
          message: "Assignment description need to be at least 10 letters",
        },
      }),
      githubRepoUrl: register("githubRepoUrl", {
        required: "Github repo URL is required",
        pattern: {
          value: /^(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/.*)?$/,
          message: "Invalid email Github repo URL",
        },
      }),
      candidateLevel: register("candidateLevel", {
        required: "Candidate level is required",
      }),
    },
  };
}
