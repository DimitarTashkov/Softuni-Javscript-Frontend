function circleArea(number){
    let justANumber = 3;
    if(typeof(number) != typeof(justANumber)){
        console.log(`We can not calculate the circle area, because we receive a ${typeof(number)}.`);
    }else{
        const result = (number*number)*Math.PI
        console.log(result.toFixed(2));
    } 
}
circleArea(5);
circleArea('name');