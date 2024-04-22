function solve(grade){
    const result = formatGrade(grade);

    console.log(result);
}
function formatGrade(grade){
    let formattedGrade = '';
    if(grade < 3){
        formattedGrade = `Fail (2)`;
    } else if (grade < 3.5){
        formattedGrade = `Poor (${grade.toFixed(2)})`;
    } else if (grade < 4.50){
        formattedGrade = `Good (${grade.toFixed(2)})`;
    } else if (grade < 5.50){
        formattedGrade = `Very good (${grade.toFixed(2)})`;
    } else if (grade >=  5.50){
        formattedGrade = `Excellent (${grade.toFixed(2)})`;
    }
    return formattedGrade;
}
solve(3.33);