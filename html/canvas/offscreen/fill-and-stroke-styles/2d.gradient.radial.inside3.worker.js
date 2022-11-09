// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.radial.inside3
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

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
var g = ctx.createRadialGradient(50, 25, 200, 50, 25, 100);
g.addColorStop(0, '#f00');
g.addColorStop(0.993, '#f00');
g.addColorStop(1, '#0f0');
ctx.fillStyle = g;
ctx.fillRect(0, 0, 100, 50);
_assertPixel(canvas, 1,1, 0,255,0,255);
_assertPixel(canvas, 50,1, 0,255,0,255);
_assertPixel(canvas, 98,1, 0,255,0,255);
_assertPixel(canvas, 1,25, 0,255,0,255);
_assertPixel(canvas, 50,25, 0,255,0,255);
_assertPixel(canvas, 98,25, 0,255,0,255);
_assertPixel(canvas, 1,48, 0,255,0,255);
_assertPixel(canvas, 50,48, 0,255,0,255);
_assertPixel(canvas, 98,48, 0,255,0,255);
t.done();

});
done();
