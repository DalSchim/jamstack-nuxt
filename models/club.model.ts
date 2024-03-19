import type {Image, Meta} from "~/models/strapi.model"

export interface club{
    id: number
    name: string
    slug: string
    created_at: Date
    updated_at: Date
    image: Image
}
export interface ClubsResponse {
    data : club[]
    meta: Meta
}
