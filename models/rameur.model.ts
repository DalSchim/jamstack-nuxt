import type {Meta} from "~/models/strapi.model";

export interface rameur {
    id: number
    name: string
    bateau: string
    rameurid: string
    created_at: Date
    updated_at: Date
    slug: string
    club: string

}
export interface RameursResponse {
    data : rameur[]
    meta: Meta
}


