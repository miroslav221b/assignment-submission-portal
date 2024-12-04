"use client";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { assignmentApiManager } from "../api/manager";
import { SubmitHandler } from "react-hook-form";
import { AssignmentModel } from "../types/assignmentModel";
import AssignmentForm from "../components/AssignmentForm";
import { Separator } from "@/components/ui/separator";
import { useDispatch } from "react-redux";
import { addAssignment } from "../store/assignmentsSlice";
import { useRouter } from "next/navigation";

export function CreateAssignment() {
  const dispatch = useDispatch();
  const router = useRouter();
  const assignmentMutation = useMutation({
    mutationKey: ["post-assignment"],
    mutationFn: assignmentApiManager.post,
    onSuccess(data, variables) {
      dispatch(addAssignment(variables));
      router.push("/thanks-you");
    },
  });
  const onSubmit: SubmitHandler<AssignmentModel> = (data) => {
    assignmentMutation.mutate(data);
  };
  return (
    <div className="h-screen w-screen grid">
      <main className="flex gap-10  font-semibold place-self-start sm:place-self-center">
        <AssignmentForm
          disabled={assignmentMutation.isPending}
          onSubmit={onSubmit}
          className="w-screen border-0 shadow-none  sm:border sm:max-w-[450px] sm:shadow h-fit"
        />
        <Separator
          orientation="vertical"
          className="h-[540px] hidden lg:block"
        />
        <div className="flex-col  gap-10 pt-[20px] hidden lg:flex">
          <h1 className=" text-[70px] tracking-wider leading-[70px]">
            Assignment <br />
            portal
          </h1>
          <h3 className=" text-[20px] text-muted-foreground">
            Submit your assignments <br />
            through ease form.
          </h3>
        </div>
      </main>
    </div>
  );
}
