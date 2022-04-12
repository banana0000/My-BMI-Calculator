function calculateBMI() {
	
    var weight = prompt('What is your weight? /kg/');	
    var height = prompt('What is your height? !');
    
    
    var BMI = weight / (height * height) * 10000;
    alert('Your BMI is ' + Math.round(BMI) + '.');
    //window.alert(typeof BMI);
    }
    
    
    