import type { ResourceStatus, ResourceType } from "../types/resources";

export interface Resource {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: ResourceType  ;
  status: ResourceStatus ;
  tags: string[];
}