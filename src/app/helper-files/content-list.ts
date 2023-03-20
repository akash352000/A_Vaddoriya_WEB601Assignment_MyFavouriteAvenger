export class ContentList {
    private content!: Array<Content>;
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
