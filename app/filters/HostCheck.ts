import ActionEvent from 'candyjs/core/ActionEvent';
import ActionFilter from 'candyjs/core/ActionFilter';
import Request from 'candyjs/http/Request';

/**
 * 过滤器示例 请勿直接应用到项目中
 *
 * 检查请求 host 是否被允许
 */
export default class HostCheck extends ActionFilter {
    /**
     * 允许的 host
     */
    allowedHosts: string[] = null;

    public beforeAction(actionEvent: ActionEvent): void {
        let allowedHosts = this.allowedHosts;
        if(null === allowedHosts) {
            return;
        }

        let r = new Request(actionEvent.request);
        let host = r.getHeaders().get('host', '');

        for(let i=0; i<allowedHosts.length; i++) {
            if( host.startsWith(allowedHosts[i]) ) {
                return;
            }
        }

        // 阻止下一个过滤器执行
        actionEvent.valid = false;

        actionEvent.response.end('can only access with 127.0.0.1');
    }
}
