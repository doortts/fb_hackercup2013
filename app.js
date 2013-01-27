/**
 * Author: doortts
 * Date: 13. 1. 27
 */

var fs = require('fs');
var util = require('util');
var lineReader = require('line-reader');
var main = require('./maximumBeauty').main;

var writer = fs.createWriteStream("./outputs");
var lineCounter = 0;
var totalLine = 0;
var inputs = './inputs';

var run = function(runner){
    lineReader.eachLine(inputs, function(line) {
        var result = "";
        var sum = [];
        if( lineCounter == 0) {
            totalLine = +line;
            console.log("total line: " + totalLine);
            lineCounter++;
            return;
        }
        result = "Case #" + lineCounter + ": " + runner(line) + "\n";
        util.print(result);
        writer.write(result);
        lineCounter++;
    }).then(function () {
            writer.end();
            console.log("====== end ======");
        });
}

run(main);