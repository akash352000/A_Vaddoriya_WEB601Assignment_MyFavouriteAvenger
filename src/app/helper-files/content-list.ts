import { Content } from "./content-interface";

export class ContentList {
    static find(arg0: (content: any) => boolean): any {
        throw new Error("Method not implemented.");
    }
     content!: Array<Content>;
    constructor(con? : any){
        this.content = [];
    }
    
    public get contents(){
        return this.content;
    }
    
}
function addContent(this: any) {
    this.content.push(101,"Thor","God Of the Thunder", "Stan Lee", "", "God", "");
}

function countContent(this: any){
   this.content.length;
}