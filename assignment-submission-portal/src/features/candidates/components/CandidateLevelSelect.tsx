"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import React, { LegacyRef } from "react";
import { candidateLevelsApiManager } from "../api/manager";

export default function CandidateLevelSelect({
  ref,
  ...props
}: React.ComponentProps<typeof Select> & {
  className?: string;
  ref?: LegacyRef<HTMLSpanElement>;
}) {
  const levelsQuery = useQuery({
    queryFn: candidateLevelsApiManager.get,
    queryKey: ["get-candidates-levels"],
    select: (data) => data.data.levels,
  });
  return (
    <Select {...props}>
      <SelectTrigger className={props.className}>
        {props.value !== undefined ? (
          <SelectValue placeholder="Candidate level" ref={ref} />
        ) : (
          <div className="w-full" />
        )}
      </SelectTrigger>
      <SelectContent>
        {levelsQuery.data?.map((level) => (
          <SelectItem value={level} key={level}>
            {level}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
