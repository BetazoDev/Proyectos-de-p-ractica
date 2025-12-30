import type { Resource } from "../interfaces/resource.interface";

export enum ResourceStatus {
  Backlog = "BACKLOG",
  InProgress = "IN PROGRESS",
  Completed = "COMPLETED",
}

export type ResourceType = "book" | "video" | "article";


export type ResourceUpdate = Partial<Resource  > & Pick<Resource, "id">;
