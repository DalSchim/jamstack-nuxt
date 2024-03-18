import type {Image} from "~/models/strapi.model";

export interface rameur {
    id: number
    name: string
    bateau: string
    first_name: string
    last_name: string
    created_at: Date
    updated_at: Date
    course:[]
    club: Image
}