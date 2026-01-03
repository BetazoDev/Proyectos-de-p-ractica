import type { ResourceType } from "../types/resources";
import { ResourceCard } from "./ResourceCard";
import { useResources } from "../Hooks/useResources";

const ResourceList = () => {
  const {
    resourcesList,
    search,
    setSearch,
    selectedType,
    setSelectedType,
    filteredResources,
  } = useResources();
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Mi Biblioteca Técnica
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          value={search} // El valor depende del estado
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por título..."
          className="flex-1 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value as ResourceType)}
          className="p-2 border rounded-lg bg-white shadow-sm outline-none"
        >
          <option value=""> Todos los tipos </option>
          <option value="book"> Libros </option>
          <option value="video"> Videos </option>
          <option value="article"> Artículos </option>
        </select>
      </div>
      <div className="grid gap-4">
        {filteredResources.length > 0 ? (
          filteredResources.map((res) => (
            <ResourceCard key={res.id} resource={res} />
          ))
        ) : (
          <p className="text-center text-gray-500 py-10">
            No se encontraron recursos que coincidan con tu búsqueda.
          </p>
        )}
      </div>
    </div>
  );
};

export default ResourceList;
