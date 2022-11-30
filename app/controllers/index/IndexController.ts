import Controller from 'candyjs/web/Controller';

export default class IndexController extends Controller {

    public behaviors(): any[] {
        return [
            [
                'hostCheck',
                {
                    classPath: 'app/filters/HostCheck',
                    allowedHosts: [
                        '127.0.0.1'
                    ]
                }
            ]
        ];
    }

    run(req, res) {
        this.getView().title = 'home page';
        this.getView().enableLayout = true;

        this.render('index', {
            title: 'Hello CandyJs With TypeScript.'
        });
    }

}
