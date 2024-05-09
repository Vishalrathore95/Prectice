var a = new Date()
var day = a.getDay();
var daylist =["sunday","monday","tuesday","thuesday","friday","saturday"];

console.log("today is " + daylist[day]+".");
var hour = a.getHours();
var minute = a.getMinutes();
var second = a.getSeconds();
 var prepand  =(hour >=12)? "PM":"AM";

hour =(hour >=12)? hour -12 :hour;

if(hour===0 && prepand==="PM"){
    if(minute===0 && second===0){
        hour = 12;
        prepand ="Noon";

    }
    else{
        hour = 12;
        prepand ="PM";
    }
}

console.log("current time is " + hour+":"+ minute+" "+prepand);
