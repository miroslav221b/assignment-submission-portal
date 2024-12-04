class ApiHosts {
  host: string;

  constructor() {
    this.host =
      process.env.NEXT_PUBLIC_HOST ?? this.throwError("NEXT_PUBLIC_HOST");
  }

  private throwError(variableName: string) {
    throw new Error(`Environment variable ${variableName} is not set.`);
    return "";
  }
}

export const api = new ApiHosts();
