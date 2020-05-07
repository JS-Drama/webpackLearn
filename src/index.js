/*
 * @Author: JS-Drama
 * @Date: 2020-05-07 15:04:10
 * @LastEditTime: 2020-05-07 18:38:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pj-h5-webd:\myCode\webpackLearn\src\index.js
 */
import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');
    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.addEventListener("click", function () {
        // es6 草案中的语法， 用jsonp实现动态加载文件, 需要插件@babel/plugin-syntax-dynamic-import
        import( /* webpackChunkName: "print" */ './print').then(function (module) {
            // promise对象
            var print = module.default;
            print();
        });
    });
    return element;
}
document.body.appendChild(component());