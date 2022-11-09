// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.pattern.basic.nocontext
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

var offscreenCanvas2 = new OffscreenCanvas(100, 50);
var pattern = ctx.createPattern(offscreenCanvas2, 'no-repeat');
ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 1,1, 0,255,0,255);
_assertPixel(canvas, 98,1, 0,255,0,255);
_assertPixel(canvas, 1,48, 0,255,0,255);
_assertPixel(canvas, 98,48, 0,255,0,255);
t.done();

});
done();
