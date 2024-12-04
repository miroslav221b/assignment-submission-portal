import { AssignmentModel } from "@/features/assignments/types/assignmentModel";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AssignmentsDataState {
  lastAssignments: AssignmentModel[];
}

const initialState: AssignmentsDataState = {
  lastAssignments: [],
};

export const assignmentsSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<AssignmentModel>) => {
      state.lastAssignments.push(action.payload);
    },
  },
});

export const { addAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
