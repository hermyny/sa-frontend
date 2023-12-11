import { Ingredient } from "./ingredient";

export class Recipe {

    id?:number;
    name?: string;
    preparation?:string;
    duration?: string;
    difficulty?:string;
    budget?:string;
    image?:string;
    ingredients?: Ingredient[];
    

}
