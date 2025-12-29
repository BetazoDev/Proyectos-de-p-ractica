export enum ResourceStatus {
  Backlog = "BACKLOG",
  InProgress = "IN PROGRESS",
  Completed = "COMPLETED",
}

export type ResourceType = "book" | "video" | "article";

export interface Resource {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: ResourceType;
  status: ResourceStatus;
  tags: string[];
}

export type ResourceUpdate = Partial<Resource> & Pick<Resource, "id">;
