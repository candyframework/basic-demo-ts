/**
 * @see https://candyframework.github.io/candyjs-guide/
 */
import '@candyjs/tswrapper';

import Candy from 'candyjs/Candy';
import CandyJs from 'candyjs';
import App from 'candyjs/web/Application';

Candy.setPathAlias('@npm', __dirname + '/node_modules');

new CandyJs(new App({
    'id': 1,
    'debug': true,
    'appPath': __dirname + '/app',
    // alias path of template engine
    'defaultView': 'npm/@candyjs/template-hbs/index'

})).listen(2333, () => {
    console.log('listen on 2333');
});
