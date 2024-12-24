export class BrandController {
    private brands: Brand[] = [];

    public addBrand(name: string, country: string): Brand {
        const newBrand = { id: this.brands.length + 1, name, country };
        this.brands.push(newBrand);
        return newBrand;
    }

    public updateBrand(id: number, name: string, country: string): Brand | null {
        const brand = this.brands.find(b => b.id === id);
        if (brand) {
            brand.name = name;
            brand.country = country;
            return brand;
        }
        return null;
    }

    public deleteBrand(id: number): boolean {
        const index = this.brands.findIndex(b => b.id === id);
        if (index !== -1) {
            this.brands.splice(index, 1);
            return true;
        }
        return false;
    }
}