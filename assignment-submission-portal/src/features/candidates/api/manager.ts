import { axiosConfig } from "@/api/configs/axiosConfig";

export const candidateLevelsApiManager = {
  get() {
    return axiosConfig.get<{ levels: string[] }>(
      "/api/tools/candidates/levels"
    );
  },
};
