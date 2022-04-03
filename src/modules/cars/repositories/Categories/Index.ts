import { Category } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./Interface";

// DTO => Data Transfer Object

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    };

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    };

    list(): Category[] {
        return this.categories;
    };

    findByName(name: string): Category {
        const categoryExists = this.categories.find((category) =>
            category.name === name
        );
        return categoryExists;
    };
};

export { CategoriesRepository };