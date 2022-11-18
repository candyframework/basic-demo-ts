/**
 * @see https://candyframework.github.io/candyjs-guide/
 */
import '@candyjs/tswrapper';

import Candy from 'candyjs/Candy';
import CandyJs from 'candyjs';
import App from 'candyjs/web/Application';

Candy.setPathAlias('@n_m', __dirname + '/node_modules');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',
    // 使用别名路径指定使用的模板引擎
    'defaultView': 'n_m/@candyjs/template-hbs/index'

})).listen(2333, () => {
    console.log('listen on 2333');
});
