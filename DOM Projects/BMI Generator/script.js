let btn = document.getElementById('btn');
let output = document.getElementById('bmi')
btn.addEventListener('click',function(b){
    b.preventDefault();
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    if(height==="" || Number(height)===NaN ||Number(weight)===NaN|| height<=0 || weight<=0)
        {
            output.innerHTML ="Please enter a valid height & weight!"
    }
    else
    {
        let bmi_calc = Number(weight)/(Number(height)**2);
        output.innerHTML ="BMI = "+bmi_calc;
    }
})