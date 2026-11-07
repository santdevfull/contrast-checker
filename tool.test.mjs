import test from 'node:test';
import assert from 'node:assert/strict';
import {compute} from './tool.mjs';
test('sample behavior',()=>{const result=compute({"foreground": "#ffffff", "background": "#000000"});for(const [key,value] of Object.entries({"ratio": 21, "aaNormal": true, "aaaNormal": true}))assert.deepStrictEqual(result[key],value,key)});
