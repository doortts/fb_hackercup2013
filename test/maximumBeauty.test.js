/**
 * Author: doortts
 * Date: 13. 1. 27
 */

var assert = require('assert');
var util = require('util');
var app = require('../maximumBeauty.js');

describe("Beautiful strings", function() {
    describe("getPos() - 대소문자 구분없이 알파벳의 ascii 순서대로 position을 정하기", function() {
        it(":A", function() {
            //Given
            var target = "A";

            //When
            //Then
            assert.equal(app.getPos(target), 0);
        });
        it(":a", function() {
            //Given
            var target = "a";

            //When
            //Then
            assert.equal(app.getPos(target), 0);
        });
        it(": C", function() {
            //Given
            var target = "C";

            //When
            //Then
            assert.equal(app.getPos(target), 2);
        });
    });

    describe("getCharCountedArray() - 배열의 특정 위치에 알파벳 출현 횟수를 기록한다", function() {
        it("ABbCcc", function() {
            //Given
            var target = "ABbCcc";

            //When
            //Then
            assert.deepEqual(app.getCharCountedArray(target), [3,2,1]);
        });
        it("Z BbCcc", function() {
            //Given
            var target = "Z BbCcc";

            //When
            //Then
            assert.deepEqual(app.getCharCountedArray(target), [3,2,1]);
        });
    });

    describe("getCharCountedArray() - 배열의 특정 위치에 알파벳 출현 횟수를 기록한다", function() {
        it("ABbCcc", function() {
            //Given
            var target = "ABbCcc";

            //When
            //Then
            assert.deepEqual(app.getCharCountedArray(target), [3,2,1]);
        });
        it("Z BbCcc", function() {
            //Given
            var target = "Z BbCcc";

            //When
            //Then
            assert.deepEqual(app.getCharCountedArray(target), [3,2,1]);
        });
    });
    describe("getMaximumBeauty()", function() {
        it("ABbCcc", function() {
            //Given
            var target = "ABbCcc";

            //When
            //Then
            assert.deepEqual(app.getMaximumBeauty(target), 152);
        });
        it("Good luck in the Facebook Hacker Cup this year!", function() {
            //Given
            var target = "Good luck in the Facebook Hacker Cup this year!";

            //When
            //Then
            assert.deepEqual(app.getMaximumBeauty(target), 754);
        });
        it("Ignore punctuation, please :)", function() {
            //Given
            var target = "Ignore punctuation, please :)";

            //When
            //Then
            assert.deepEqual(app.getMaximumBeauty(target), 491);
        });
    });
});



