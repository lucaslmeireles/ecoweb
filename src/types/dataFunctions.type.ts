export type GetWheaterType  = {
    latitude:string,
    longitude: string
}

export type  PostData = {
    id: number | string;
    title: string;
    content: string;
    tags: {
        name: string,
    }[];
    createdAt: string;
    updatedAt: string;
    cover_img:string;
    author: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        avatar: string;
    };
    small_text: string;

}
export type GridCardProps = {
    id: number | string;
    title: string;
    cover_img: string;
    status?: boolean;
    myposts?: boolean;
}

export type Tag = {
    name?: string
    value: string
    label:string
  }