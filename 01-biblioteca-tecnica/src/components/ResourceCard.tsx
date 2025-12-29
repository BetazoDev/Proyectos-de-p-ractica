import { ResourceStatus, type Resource } from "../types/resources";

const mapa = {
  [ResourceStatus.Backlog]: "border-gray-500",
  [ResourceStatus.InProgress]: "border-blue-500",
  [ResourceStatus.Completed]: "border-green-500",
};

export const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <div>
      <h1> {resource.title} </h1>
      <div> {resource.type} </div>
      <div> {resource.tags.map(tag)} </div>
    </div>
  );
};
