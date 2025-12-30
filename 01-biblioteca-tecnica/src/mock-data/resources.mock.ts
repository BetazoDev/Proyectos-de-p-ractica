import type { Resource } from "../interfaces/resource.interface";
import { ResourceStatus } from "../types/resources";


export const MOCK_RESOURCES: Resource[] = [
    {
          id: "127",
          title: "Luna de plutón",
          description: "Libro creado por Dross",
          url: "https://pdlibrosarg.cdnstatics2.com/usuaris/libros_contenido/arxius/31/30762_Luna%20de%20Pluton%20cap1.pdf",
          type: 'book' ,
          status: ResourceStatus.Completed ,
          tags: ["Libro", "Terror", "Cósmico" ],
    },
    {
          id: "200",
          title: "Luna putón",
          description: "Libro creado por Tu mamá",
          url: "https://pdlibrosarg.cdnstatics2.com/usuaris/libros_contenido/arxius/31/30762_Luna%20de%20Pluton%20cap1.pdf",
          type: 'article' ,
          status: ResourceStatus.Completed ,
          tags: ["Libro", "Terror", "Cósmico" ],
    },
    {
          id: "198",
          title: "Luna",
          description: "Video creado por Tu papá",
          url: "https://pdlibrosarg.cdnstatics2.com/usuaris/libros_contenido/arxius/31/30762_Luna%20de%20Pluton%20cap1.pdf",
          type: 'video' ,
          status: ResourceStatus.Backlog ,
          tags: ["Libro", "Terror", "Cósmico" ],
    },
    {
          id: "17",
          title: "El vídeo perfecto",
          description: "Video de programación ",
          url: "https://pdlibrosarg.cdnstatics2.com/usuaris/libros_contenido/arxius/31/30762_Luna%20de%20Pluton%20cap1.pdf",
          type: 'video' ,
          status: ResourceStatus.Completed ,
          tags: ["Libro", "Terror", "Cósmico" ],
    },
    {
          id: "12",
          title: "Un artículo",
          description: "Artículo sobre los megas",
          url: "https://pdlibrosarg.cdnstatics2.com/usuaris/libros_contenido/arxius/31/30762_Luna%20de%20Pluton%20cap1.pdf",
          type: 'article' ,
          status: ResourceStatus.InProgress ,
          tags: ["Mega ", "descargas", "algo" ],
    },
    {
          id: "1029",
          title: "Luna maldito",
          description: "Libro de hechiceros",
          url: "https://pdlibrosarg.cdnstatics2.com/usuaris/libros_contenido/arxius/31/30762_Luna%20de%20Pluton%20cap1.pdf",
          type: 'book' ,
          status: ResourceStatus.InProgress ,
          tags: ["Libro", "Terror", "Cósmico" ],
    },

]