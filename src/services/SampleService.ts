class SampleService {
    
    constructor(a:number,b:number){

    }
    
    fib(a:number, b:number):number[] {
        const vals:number[]=[];
        for(let i=0;i<=b;i++){
            if (i<2){
                vals[i] = 1;
            } else {
                vals[i] = vals[i-1] + vals[i-2];
            }
        }
        return vals.slice(a,b);
    }
}

module.exports = {
    SampleService:SampleService
}