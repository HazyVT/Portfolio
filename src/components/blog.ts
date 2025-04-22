class Post {
    id: number;
    content: string;
    date: Date;

    constructor(id: number, content: string, date: string) {
        this.id = id;
        this.content = content;
        this.date = new Date(date);
    }
}

export default Post;