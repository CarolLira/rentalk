import { Specification } from "../../model/Specification";
import {
    ISpecificationRepository,
    ICreateSpecificationDTO
} from "./Interface";

class SpecificationsRepository implements ISpecificationRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    };

    findByName(name: string): Specification {
        const specificationExists = this.specifications.find((specification) =>
            specification.name === name
        );
        return specificationExists;
    };
};

export { SpecificationsRepository };