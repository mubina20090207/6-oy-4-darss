class Brand {
    id: number;
    name: string;
    country: string;

    constructor(id: number, name: string, country: string) {
        this.id = id;
        this.name = name;
        this.country = country;
    }

    static createBrand(id: number, name: string, country: string): Brand {
        return new Brand(id, name, country);
    }

    updateBrand(name: string, country: string): void {
        this.name = name;
        this.country = country;
    }

    static deleteBrand(brand: Brand): void {
        // Logic to delete the brand
    }
}

export default Brand;