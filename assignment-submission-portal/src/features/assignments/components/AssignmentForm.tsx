import React from "react";
import CandidateLevelSelect from "@/features/candidates/components/CandidateLevelSelect";
import useAssignmentForm from "../hooks/useAssignmentForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller, SubmitHandler } from "react-hook-form";
import Label from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AssignmentModel } from "../types/assignmentModel";

export default function AssignmentForm({
  onSubmit,
  className,
  disabled = false,
}: {
  onSubmit: SubmitHandler<AssignmentModel>;
  className?: string;
  disabled?: boolean;
}) {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    control,
  } = useAssignmentForm();

  return (
    <Card className={className}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Create Assignment</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 flex-col">
          <Label id="name" text="Name" errorText={errors.name?.message}>
            <Input inputMode="text" {...register.name} disabled={disabled} />
          </Label>
          <Label id="email" text="Email" errorText={errors.email?.message}>
            <Input inputMode="email" {...register.email} disabled={disabled} />
          </Label>
          <Label
            id="description"
            text="Description"
            errorText={errors.assignmentDescription?.message}
          >
            <Textarea
              inputMode="text"
              {...register.assignmentDescription}
              className="h-[100px] max-h-[200px] "
            />
          </Label>
          <Label
            id="githubUrl"
            text="Github repo url"
            errorText={errors.githubRepoUrl?.message}
          >
            <Input
              inputMode="url"
              {...register.githubRepoUrl}
              disabled={disabled}
            />
          </Label>
          <Label
            id="candidate-level"
            text="Candidate level"
            errorText={errors.candidateLevel?.message}
          >
            <Controller
              name="candidateLevel"
              control={control}
              render={({ field: { onChange, ...fieldProps } }) => (
                <CandidateLevelSelect
                  {...fieldProps}
                  onValueChange={onChange}
                />
              )}
            />
          </Label>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            type="reset"
            onClick={() => reset()}
            disabled={disabled}
          >
            Clear
          </Button>
          <Button disabled={disabled} type="submit">
            Upload
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
