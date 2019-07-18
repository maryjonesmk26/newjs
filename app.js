let name = 'Amrutha';
const age =39;
const job ='web developer';
const city = 'london';
let html;
let html1;
/*
html = '<ul><li> Name:' + name +
        '</li><li> age:' + age +
        '</li><li> job:' + job +
        '</li><li> city:' + city + 
        '</li></ul>';
        */


        html1= '<ul><li> Name: ${name}  </li></ul>';
function hello(){
    return 'Amrutha';
}

document.body.innerHTML= html1;
       
//document.body.innerHTML = html;