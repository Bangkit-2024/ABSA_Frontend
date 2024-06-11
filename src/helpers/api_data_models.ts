export interface dataAspectReview {
    id:string,
    aspect:string,
    sentiment:number|string
}

export interface dataReview {
    id?:string,
    review_text: string,
    company?: string
    review_aspect?: dataAspectReview[]
}

export interface UserProfile{
    first_name? : string,
    last_name? : string,
    email? : string,
    username? : string,
    user_id? : string,
    created_date?: string,
    bio?:string,
    phone?:string,   
    photo?:string|ArrayBuffer | null | File 

}
