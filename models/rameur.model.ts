import type {Meta} from "~/models/strapi.model";
import type {club} from "~/models/club.model";

export interface rameur {
    id: number
    name: string
    bateau: string
    rameurid: string
    created_at: Date
    updated_at: Date
    slug: string
    club: club

}
export interface RameurResponse {
    data : rameur
}
export interface RameursResponse {
    data : rameur[]
    meta: Meta
}


