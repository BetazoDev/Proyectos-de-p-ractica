import { ResourceStatus } from "../types/resources";
import { type Resource } from "../interfaces/resource.interface";

const statusStyles: Record<ResourceStatus, string> = {
  [ResourceStatus.Backlog]: "border-gray-400 bg-gray-50",
  [ResourceStatus.InProgress]: "border-blue-500 bg-blue-50",
  [ResourceStatus.Completed]: "border-green-500 bg-green-50",
};

export const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <div
      className={`p-4 border-l-8 rounded-lg shadow-sm mb-4 ${
        statusStyles[resource.status]
      }`}
    >
      <div className="flex justify-between items-start">
        <h1 className="text-xl font-bold text-gray-800"> {resource.title} </h1>
        <div className="px-2 py-1 text-xs font-semibold uppercase bg-white border rounded">
          {" "}
          {resource.type}{" "}
        </div>
      </div>

      {resource.description && (
        <p className="mt-2 text-gray-600 italic">{resource.description}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {resource.tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Ver Recurso
        </a>
      </div>
    </div>
  );
};
