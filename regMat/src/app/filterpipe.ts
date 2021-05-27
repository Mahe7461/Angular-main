import{Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:'myfilter',
    
})
export class MyfilterPipe implements PipeTransform{
    transform(item:any,questionData:string):any{
        
        const array:any[]=[];
        for(let i=0;i<=item.length;i++){
            let Question:string=item[i]
            if(Question===questionData){
                array.push(item[i])
            }
        }
        return array;
    
    }

}