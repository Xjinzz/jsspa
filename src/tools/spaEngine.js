import Utils from '@utils/utils'
import RouterEngine from '@tools/routerEngine'
import ViewEngine from '@tools/viewEngine'
import Define from '@tools/define'
export default class SpaEngine {
    constructor () {
        this._router = new RouterEngine()
        this._view = new ViewEngine()
        this._pageList = []
    }
    bindRootDom (domClass) {
        this._view.init($(domClass))
    }
    run (config) {
        // 注入全局前置函数
        if (Utils.isFunction(config.beforeInit)) {
            config.beforeInit(this)
        }
        this.registerEvent()
        this._router.init(config.router)
        // 注入全局后置函数
        if (Utils.isFunction(config.afterInit)) {
            config.afterInit(this)
        }
        return {
            $bind: (domClass) => {
                this.bindRootDom(domClass)
            }
        }
    }
    // 定义全局eventpublish
    registerEvent () {
        Utils._event.on(Define.VIEW.RENDERVIEW, (currentRoute) => {
            currentRoute.static.css.forEach((item) => {
                this._view.addStyle(item)
            })
            currentRoute.static.js.forEach((item) => {
                this._view.addScript(item)
            })
            // TODO: 需要等待全部资源加载完毕，暂时用timeout
            setTimeout(() => {
                this._view.addView(currentRoute.view)
            }, 100)
        })
    }
}