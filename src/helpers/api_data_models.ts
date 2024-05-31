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
