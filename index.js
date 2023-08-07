var resultfield = $("#result");
function insertNumber(number){
    var existNumber = resultfield.val(); 
    resultfield.val(existNumber + number);
}

function clearResult(){
    resultfield.val('');
}
function calculate(){
   var result = eval(resultfield.val());
   resultfield.val(result);
}

function deleteLast(){
    var presentNumbers= resultfield.val();
    if(presentNumbers!=''){
        resultfield.val(presentNumbers.slice(0,-1));
    }
}

function percentage(){
    var presentNumbers = resultfield.val();
    if(presentNumbers !=''){
        resultfield.val(presentNumbers/100);
    }
}
function toggleSign(){
    var presentNumbers = resultfield.val();
    if(presentNumbers !=''){
        resultfield.val(-presentNumbers);
    }
}
