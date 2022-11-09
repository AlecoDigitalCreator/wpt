// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.object.update
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

var g = ctx.createLinearGradient(-100, 0, 200, 0);
g.addColorStop(0, '#f00');
g.addColorStop(1, '#f00');
ctx.fillStyle = g;
g.addColorStop(0.1, '#0f0');
g.addColorStop(0.9, '#0f0');
ctx.fillRect(0, 0, 100, 50);
_assertPixelApprox(canvas, 50,25, 0,255,0,255, 2);
t.done();

});
done();
