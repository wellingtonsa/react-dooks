export function interpolate(percentage:number, output:Array<number>){
    
    if(output.length === 0 || output.length > 2) throw new Error('Output values invalid! You just need set two values');
    
    const [start, end] = output;
    return start + ((( end - start) * percentage)/100);
}