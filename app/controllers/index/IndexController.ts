import Controller from 'candyjs/web/Controller';

export default class IndexController extends Controller {

    run(req, res) {
        this.getView().title = 'home page';
        this.getView().enableLayout = true;

        this.render('index', {
            content: 'Hello CandyJs With TypeScript.'
        });
    }

}
