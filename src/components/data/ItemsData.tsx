export interface Item {
    stock: number;
    name: string;
    description: string;
    sku: string;
    price: string;
    imageUrl: string;
}

export const itemsData: Item[] = [
    {
      stock: 10,
      name: "Acme Widgets",
      description: "High-quality widgets for all your widget needs.",
      sku: "123456",
      price: "$49.99",
      imageUrl: "/placeholder.svg"
    },
    {
      stock: 5,
      name: "Acme Gizmos",
      description: "Innovative gizmos to make your life easier.",
      sku: "654321",
      price: "$99.99",
      imageUrl: "/placeholder.svg"
    }
    // Add more items as needed
];
  