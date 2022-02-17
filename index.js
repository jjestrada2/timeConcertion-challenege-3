'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
   /* 
    const arrayTime= [...s];
    
    var hours=arrayTime.slice(0,2).join('');
    var minutes=arrayTime.slice(3,5).join('');
    var seconds=arrayTime.slice(6,8).join('');
    var noche=arrayTime[8]=='A' ? false : true;
    if(noche){
            var militaryHour= hours!=12 ? parseInt(hours,10)+12 : "12";
        
    }else if(hours){
    var militaryHour=hours!=12 ? hours : "00";
    }
    
   militaryHour.toString();
   minutes.toString();
   seconds.toString();
    
    return(militaryHour.toString() + ":" + minutes.toString() + ":" + seconds.toString());
*/
    const format = s.substring(s.length - 2);
    let hour = s.substring(0, 2);
    const minusSecond = s.substring(2, 8);
    if (format == "AM") {
        hour = hour == 12 ? '00' : hour;
    }
    if (format == "PM") {
        hour = +hour + 12 < 24 ? +hour + 12 : '12';
    }
    return hour + "" + minusSecond;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
