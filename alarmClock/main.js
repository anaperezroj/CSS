import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 12,
  curvePoints: 60,
  curveLerp: 0.5,
  radius1: 0,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 0,
  sleepRadiusY: 0,
  sleepTimeCoefX: 0.0005,
  sleepTimeCoefY: 0.0005,
});