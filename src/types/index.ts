export interface Brand {
    id: number;
    name: string;
    country: string;
}

export interface Car {
    id: number;
    model: string;
    brandId: number;
    year: number;
}