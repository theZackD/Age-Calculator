let DayInput = document.querySelector('#DD')
let MonthInput = document.querySelector('#MM')
let YearInput = document.querySelector('#YY')

let DayError = document.getElementById('DayError')
let MonthError = document.getElementById('MonthError')
let YearError = document.getElementById('YearError')

let DayLabel = document.getElementById('DayLabel')
let MonthLabel = document.getElementById('MonthLabel')
let YearLabel = document.getElementById('YearLabel')

let CalcButton = document.getElementById('arrow')

let DayDisplay = document.getElementById('DispDays')
let MonthDisplay = document.getElementById('DispMonths')
let YearDisplay = document.getElementById('DispYears')

NUMREG = /^(\s*[0-9]+\s*)+$/

let ValidDay = function(Day){
    if(Day <= 31 && Day > 0){
        return true
    } else {
        return false
    }
}

let ValidMonth = function(Month){
    if(Month <= 12 && Month > 0){
        return true
    } else {
        return false
    }
}   

let ValidYear = function(Year){
    return Year <= new Date().getFullYear()
}

// MonthInput.value + '/' + DayInput.value + '/' + YearInput.value

let ValidDate = function(FullDate){
    if(new Date(FullDate).toLocaleDateString('en-us', { month:"2-digit",day:"2-digit",year:"numeric"}) == FullDate){
        return true
    } else {
        return false
    }
}

let AgeCalc = function(BirthDate){
    const day = BirthDate.getDate();
    const month = BirthDate.getMonth() + 1;
    const year = BirthDate.getFullYear();

    const currday = new Date().getDate();
    const currmonth = new Date().getMonth() + 1;
    const curryear = new Date().getFullYear();

    if (currmonth < month){
        if(currday < day){
            return [currday, 12 + currmonth - month - 1, curryear - year - 1]

        } else {
            return [currday - day, 12 + currmonth - month, curryear - year - 1]
        }
        
    } else {
        if(currday < day){
            return [currday, currmonth - month - 1, curryear - year]
        } else {
            return [currday - day, currmonth - month, curryear - year]
        }
    }
}


let DateValidation = function(){

    if(DayInput.value == ""){

        DayError.innerHTML = "This field is required";
        DayInput.className = "errorinput";
        DayLabel.classList.add("Labelred");
    
    } else if(!ValidDay(DayInput.value)){

        DayError.innerHTML = "Must be a valid day";
        DayInput.className = "errorinput";
        DayLabel.classList.add("Labelred");
    }

    else if(MonthInput.value == ""){

        DayError.innerHTML = "";
        DayInput.className = "";
        DayLabel.classList.remove("Labelred");

        MonthError.innerHTML = "This field is required";
        MonthInput.className = "errorinput";
        MonthLabel.classList.add("Labelred");

    } else if(!ValidMonth(MonthInput.value)){

        MonthError.innerHTML = "Must be a valid month";
        MonthInput.className = "errorinput";
        MonthLabel.classList.add("Labelred");
    } 

    else if(YearInput.value == ""){

        MonthError.innerHTML = "";
        MonthInput.className = "";
        MonthLabel.classList.remove("Labelred");

        YearError.innerHTML = "This field is required";
        YearInput.className = "errorinput";
        YearLabel.classList.add("Labelred");
    
    } else if(!ValidYear(YearInput.value)){

        YearError.innerHTML = "Must be in the past";
        YearInput.className = "errorinput";
        YearLabel.classList.add("Labelred");
    } 
    
    else if(!ValidDate(MonthInput.value + '/' + DayInput.value + '/' + YearInput.value)){

        YearError.innerHTML = "";

        DayError.innerHTML = "Must be a valid date";
        DayInput.className = "errorinput";
        DayLabel.classList.add("Labelred");
        MonthInput.className = "errorinput";
        MonthLabel.classList.add("Labelred");
        YearInput.className = "errorinput";
        YearLabel.classList.add("Labelred");
    } else {

        DayError.innerHTML = "";
        MonthError.innerHTML = "";
        YearError.innerHTML = "";
        DayInput.className = "";
        DayLabel.classList.remove("Labelred");
        MonthInput.className = "";
        MonthLabel.classList.remove("Labelred");
        YearInput.className = "";
        YearLabel.classList.remove("Labelred");
        
        let InputDate = new Date(MonthInput.value + '/' + DayInput.value + '/' + YearInput.value)

        let Age = AgeCalc(InputDate)

        DayDisplay.innerHTML = Age[2]
        MonthDisplay.innerHTML = Age[1]
        YearDisplay.innerHTML = Age[0]
    }
}

CalcButton.addEventListener('click', DateValidation)
