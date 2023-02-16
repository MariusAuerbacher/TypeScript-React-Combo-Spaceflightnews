import { NewsSite } from "./NewsSite";
import { Launch } from "./Launch";

 interface INew {
    id:          number;
    title:       string;
    url:         string;
    imageUrl:    string;
    newsSite:    NewsSite;
    summary:     string;
    publishedAt: Date;
    updatedAt:   Date;
    featured:    boolean;
    launches:    Launch[];
    events:      any[];
}


export default INew
