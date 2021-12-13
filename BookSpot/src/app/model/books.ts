class img {
    smallThumbnail = "";
    thumbnail = "";
}

export class Books {
    id = "";
    title = "";
    description = "";
    publisher = "";
    pageCount!: number;
    categories!: any;
    imageLinks!: img;
    authors!: any;
    items!: any;
}
