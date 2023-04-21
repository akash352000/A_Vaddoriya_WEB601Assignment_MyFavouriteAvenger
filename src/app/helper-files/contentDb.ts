import { HttpClient } from "@angular/common/http";
import { Content } from "./content-interface";
import { Observable } from "rxjs";

export class contentDb {
    content!: Array<Content>;
    private baseUrl = "http://localhost:4200/";
   constructor(private http: HttpClient){
       this.content = [];
   }
   getContentList(): Observable<Content[]>{
        return this.http.get<Content[]>(this.baseUrl);
   }
   addContent(content: Content){
    return this.http.post<Content>(this.baseUrl,content);
   }
   
}