"use client";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { AssignmentModel } from "../types/assignmentModel";

export function AssignmentSuccess() {
  const lastAssignments = useSelector(
    (state: RootState) => state.assignment.lastAssignments
  );
  const lastAssignment: AssignmentModel =
    lastAssignments[lastAssignments.length - 1];
  return lastAssignment ? (
    <div className="h-screen w-screen grid">
      <div className="text-center items-center sm:items-start sm:text-left  place-self-start sm:place-self-center flex flex-col  gap-5 p-20 pt-[20px]">
        <h1 className="text-[30px] leading-[30px] sm:text-[40px] sm:leading-[40px]  xl:text-[70px] xl:leading-[70px] tracking-wider pb-2">
          Thanks {lastAssignment.name} <br />
          for your assignment
        </h1>
        <h3 className="text-[15px] sm:text-[20px] xl:text-[20px] text-muted-foreground">
          We have received your details and will get back to you shortly.
          <br />
          Email will be sent to {lastAssignment.email}.
        </h3>
        <Button className="w-fit" asChild>
          <Link href={"/"}>Back to form</Link>
        </Button>
      </div>
    </div>
  ) : (
    <></>
  );
}
