import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Content } from "./content-interface";
import { ContentList } from "./content-list";
export class AvengerService{
    private contentUrl = "./assets/contentDb.json";

    constructor(private http: HttpClient){}

    getContent(){
        return this.http.get<Content[]>(this.contentUrl);
    }

    getContentById(id: number){
        return this.http.get<Content[]>(this.contentUrl).pipe(
            map(contents => contents.find(content => content.id == id))
        )
    }
}