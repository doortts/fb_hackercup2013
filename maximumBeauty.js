/**
 * Author: doortts
 * Date: 13. 1. 27
 */


// 캐릭터 코드를 찾아냄
exports.getPos = getPos = function(char){
    return char.toUpperCase().charCodeAt(0) - 65;
}

// 알파벳 이외는 제외, 성능을 위해 정규식을 쓰지 않음. 최대한 memoization
exports.getCharCountedArray = getCharCountedArray = function(word){
    var calc = [];
    var result = [];
    var word_length = word.length;
    for(var idx=0; idx<word_length; idx++){
        var pos = getPos(word[idx]);
        if( pos<0 || pos > 25 ) continue;
        calc[pos] = ++calc[pos] || 1;
    }
    var calc_length = calc.length;
    for(var jdx=0; jdx<calc_length; jdx++ ){
        var counter = calc[jdx];
        if( counter !== undefined ) result.push(counter);
    }
    return result.sort(function(a,b){
        return (b-a);
    });
}

exports.main = exports.getMaximumBeauty = getMaximumBeauty = function(word){
    var occurrences = getCharCountedArray(word);
    var occurrences_length = occurrences.length;
    var maxValue = 26;
    var maximumBeauty = 0;
    for(var idx=0; idx<occurrences_length; idx++){
        maximumBeauty += maxValue * occurrences[idx];
        maxValue--;
    }
    return maximumBeauty;
}