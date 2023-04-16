import { Content } from "./content-interface";

export class contentDb {
    content!: Array<Content>;
   constructor(con? : any){
       this.content = [];
   }
   
   public get contents(){
       return this.content;
   }
}