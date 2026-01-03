import React, { useEffect, useMemo, useState } from "react";
import type { ResourceStatus, ResourceType } from "../types/resources";
import { MOCK_RESOURCES } from "../mock-data/resources.mock";
import type { Resource } from "../interfaces/resource.interface";

export const useResources = () => {
  const [resourcesList, setResourcesList] = useState<Resource[]>([]);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<ResourceType | "">("");

  const [isLoading, setIsLoading] = useState(Boolean);

  useEffect(() => {
    const fetchResources = async () => {
      setIsLoading(true);
      try {
        // Simulamos latencia de red
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setResourcesList(MOCK_RESOURCES);
      } catch (err) {
        console.error("Error cargando recursos", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResources();
  }, []); //

  const filteredResources = useMemo(() => {
    return resourcesList.filter((res) => {
      const matchesSearch = res.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesType = selectedType === "" || res.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [search, selectedType, resourcesList]);

  const addResource = (newResourceData: Omit<Resource, "id">) => {
    const newResource: Resource = {
      ...newResourceData,
      id: crypto.randomUUID(),
    };
    setResourcesList((prev) => [...prev, newResource]);
  };

  const updateStatus = (id: string, newStatus: ResourceStatus) => {
    setResourcesList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const deleteResource = (id: string) => {
    setResourcesList((prev) => prev.filter((item) => item.id !== id));
  };

  console.log(search);

  return {
    search,
    setSearch,
    selectedType,
    setSelectedType,
    filteredResources,
    addResource,
    updateStatus,
    deleteResource,
    resourcesList,
  };
};
