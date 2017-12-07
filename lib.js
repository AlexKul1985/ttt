var arr_op = ['','-'];
function func(){
    var rand = Math.floor(Math.random()*2);
    return arr_op[rand];
}
///////////////////////////////////////
//////////////////////////////////////
/////////////////////////////////////
////////////////////////////////////
function getRandomNewNumber(number){
    
return Math.floor(Math.random()*number);    
} 
///////////////////////////////////////
function isValueToNewArray(valueX,valueY,arr){
    
    for(var j=0; j<arr.length; j++){
        if((arr[j].x == valueX) && (arr[j].y == valueY)){
            return true;

        }
    }
    return false;
}
////////////////////////////////////////
///////////////////////////////////////
////////////////////////////////////////
var randNumberForDef = [5,10,15,20];

function generateArrRandObjects(string,randNumberForDef){
    var number = string.length;
    var rand_x;
    var rand_y;
    var rand_def_x;
    var rand_def_y;
    var arr = [];
    if(number == 1){
        rand_def_x = getRandomNewNumber(randNumberForDef.length);
                rand_def_y = getRandomNewNumber(randNumberForDef.length);
                arr.push({
                x:func()+rand_x*randNumberForDef[rand_def_x],
                y:func()+rand_y*randNumberForDef[rand_def_y]
            });
                return arr;
    }
    if(arr.length == 0) {
        while(arr.length != 1){
            rand_x = getRandomNewNumber(number);
            rand_y = getRandomNewNumber(number);
            
            if(rand_x == 0 && rand_y == 0){
                continue;
            }
            else {
                rand_def_x = getRandomNewNumber(randNumberForDef.length);
                rand_def_y = getRandomNewNumber(randNumberForDef.length);
                arr.push({
                x:func()+rand_x*randNumberForDef[rand_def_x],
                y:func()+rand_y*randNumberForDef[rand_def_y]
            });
            }
            
        }
    
    }

    while(arr.length != number){
        rand_x = getRandomNewNumber(number);
        rand_y = getRandomNewNumber(number);
        rand_def_x = getRandomNewNumber(randNumberForDef.length);
        rand_def_y = getRandomNewNumber(randNumberForDef.length);
        if(!isValueToNewArray(rand_x*rand_def_x,rand_y*rand_def_y,arr)) {

        arr.push({
        x:func()+rand_x*randNumberForDef[rand_def_x],
        y:func()+rand_y*randNumberForDef[rand_def_y]
    });
        }
        else continue;

    }
  
  return arr;

}
/////////////////////////////////////////////////
        function WrapSpan(selector){
            var search = $(selector);
            var text = '';
            var result_text = '';
            var arr  = [];
            
            search.each(function(){
                if($(this).children() !='undefined') {
                    text = $(this).children().html();
                }
                else {
                    text = $(this).html();
                }
                // text = text.toString();
                for(var i = 0; i < text.length ; i++){
                if(text[i] == " ") result_text +='<span>&nbsp;</span>'; 
                else result_text +='<span>'+text[i]+'</span>';  
                }
                
                    
                arr.push(result_text);
                result_text = '';
            });
            search.children(a).html('');
            search.each(function(index){
                $(this).children().html(arr[index]);
            });
            

        }
    //////////////////////////////////////////////////