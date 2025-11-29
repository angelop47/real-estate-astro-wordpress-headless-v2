export interface Property {
    id: number;
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

export const properties: Property[] = [
    {
        id: 1,
        title: "Villa Moderna con Vista al Mar",
        location: "Costa del Sol, España",
        price: "€2,500,000",
        beds: 5,
        baths: 4,
        area: "450 m²",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
        tag: "Venta",
        description: "Esta impresionante villa moderna ofrece vistas panorámicas al mar Mediterráneo. Diseñada con los más altos estándares de calidad, cuenta con espacios abiertos, luz natural abundante y una piscina infinita que se funde con el horizonte. La propiedad incluye un amplio salón con chimenea, cocina gourmet totalmente equipada, y una suite principal con terraza privada. El jardín paisajístico ofrece privacidad y tranquilidad, ideal para disfrutar del clima soleado de la Costa del Sol.",
        features: [
            "Piscina Infinita",
            "Vista al Mar",
            "Jardín Privado",
            "Garaje para 3 coches",
            "Sistema de Domótica",
            "Seguridad 24/7",
            "Gimnasio",
            "Cine en casa"
        ],
        images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1000&auto=format&fit=crop"
        ],
        agent: {
            name: "Carlos Rodríguez",
            role: "Agente Senior",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
            phone: "+34 600 123 456",
            email: "carlos@luxeestate.com"
        }
    },
    {
        id: 2,
        title: "Penthouse de Lujo en el Centro",
        location: "Madrid, España",
        price: "€1,800,000",
        beds: 3,
        baths: 3,
        area: "280 m²",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
        tag: "Venta",
        description: "Exclusivo penthouse situado en el corazón de Madrid. Este apartamento de lujo combina elegancia clásica con comodidades modernas. Disfruta de una terraza de 100m² con vistas a la ciudad, perfecta para entretenimiento. El interior cuenta con acabados de mármol, techos altos y una cocina de diseño. Ubicado a pasos de las mejores tiendas y restaurantes de la ciudad.",
        features: [
            "Terraza Panorámica",
            "Ubicación Premium",
            "Conserje 24h",
            "Ascensor Privado",
            "Suelo Radiante",
            "Acabados de Mármol",
            "Domótica",
            "Trastero"
        ],
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
        ],
        agent: {
            name: "Sofia Martínez",
            role: "Especialista en Lujo",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
            phone: "+34 600 789 012",
            email: "sofia@luxeestate.com"
        }
    },
    {
        id: 3,
        title: "Mansión Clásica Renovada",
        location: "Barcelona, España",
        price: "€3,200,000",
        beds: 6,
        baths: 5,
        area: "600 m²",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
        tag: "Destacado",
        description: "Una obra maestra arquitectónica en la zona alta de Barcelona. Esta mansión histórica ha sido meticulosamente restaurada para ofrecer el máximo confort sin perder su encanto original. Rodeada de jardines maduros, cuenta con una casa de invitados independiente, bodega y biblioteca. Los interiores espaciosos y elegantes son perfectos para una vida familiar de alto nivel.",
        features: [
            "Jardines Maduros",
            "Casa de Invitados",
            "Bodega",
            "Biblioteca",
            "Piscina Climatizada",
            "Garaje Doble",
            "Chimeneas Originales",
            "Privacidad Total"
        ],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop"
        ],
        agent: {
            name: "Alejandro Ruiz",
            role: "Director de Ventas",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
            phone: "+34 600 345 678",
            email: "alejandro@luxeestate.com"
        }
    }
];
