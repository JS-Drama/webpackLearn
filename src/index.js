/*
 * @Author: JS-Drama
 * @Date: 2020-05-07 15:04:10
 * @LastEditTime: 2020-05-07 17:19:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pj-h5-webd:\myCode\webpackLearn\src\index.js
 */
import {
    cube
} from './math.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());