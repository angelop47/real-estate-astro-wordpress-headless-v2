export interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    area: string;
    image: string;
    tag: string;
    description: string;
    features: string[];
    images: string[];
    agent: {
        name: string;
        role: string;
        image: string;
        phone: string;
        email: string;
    };
}

export interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    area: string;
    image: string;
    tag: string;
    description: string;
    features: string[];
    images: string[];
    agent: {
        name: string;
        role: string;
        image: string;
        phone: string;
        email: string;
    };
}

interface GraphQLResponse {
    data: {
        propiedadesCPT: {
            nodes: GraphQLPropertyNode[];
        };
    };
}

interface GraphQLPropertyNode {
    id: string;
    title: string;
    content: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
        };
    };
    author: {
        node: {
            name: string;
            avatar: {
                url: string;
            };
            agentes: {
                cargo: string;
                telefono: string;
            };
        };
    };
    propiedadesACF: {
        ciudad: string[];
        departamento: string[];
        operacion: string;
        precio: number;
        habitaciones: number;
        banos: number;
        area: number;
        galeria: {
            fullFileUrl: string;
        }[] | null;
    };
}

export async function fetchProperties(): Promise<Property[]> {
    const query = `
    query GetProperties {
  propiedadesCPT {
    nodes {
      id
      title
      content
 featuredImage {
            node {
              sourceUrl
            }
          }
      author {
        node {
          name
          avatar {
            url
          }
          ... on WithAcfAgentes {
            agentes {
              cargo
              telefono
            }
          }
        }
      }
      ... on WithAcfPropiedadesACF {
        propiedadesACF {
          ciudad
          departamento
          operacion
          precio
          habitaciones
          banos
          area
          galeria {
            fullFileUrl
          }
        }
      }
    }
  }
}
    `;

    try {
        const response = await fetch(import.meta.env.GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch properties: ${response.statusText}`);
        }

        const json: GraphQLResponse = await response.json();

        return json.data.propiedadesCPT.nodes.map(node => {
            const acf = node.propiedadesACF;
            const location = `${acf.ciudad?.[0] || ''}, ${acf.departamento?.[0] || ''}`;
            const price = acf.precio ? `$${acf.precio.toLocaleString('es-ES')}` : 'Consultar';
            const area = acf.area ? `${acf.area} m²` : '';

            const galleryImages = acf.galeria?.map(img => img.fullFileUrl) || [];
            const featuredImg = node.featuredImage?.node?.sourceUrl;

            // Use gallery images if available, otherwise fallback to featured image
            const images = galleryImages.length > 0 ? galleryImages : (featuredImg ? [featuredImg] : []);

            // Main image priority: Featured Image -> First Gallery Image -> Placeholder
            const mainImage = featuredImg || galleryImages[0] || 'https://via.placeholder.com/800x600?text=No+Image';

            return {
                id: node.id,
                title: node.title,
                location: location,
                price: price,
                beds: acf.habitaciones || 0,
                baths: acf.banos || 0,
                area: area,
                image: mainImage,
                tag: acf.operacion || 'Venta',
                description: node.content,
                features: [], // Not available in current query
                images: images,
                agent: {
                    name: node.author.node.name,
                    role: node.author.node.agentes.cargo,
                    image: node.author.node.avatar.url,
                    phone: node.author.node.agentes.telefono,
                    email: "" // Not available
                }
            };
        });
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
}

export const properties: Property[] = []; // Keep empty array for fallback or type compatibility if needed temporarily
