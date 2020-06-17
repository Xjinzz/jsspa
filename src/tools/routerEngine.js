import { stringTool } from 'mwutil'
import Utils from '@utils/utils'
import Define from '@tools/define'
export default class RouterEngine {
    constructor () {
        this._router = null
    }
    init (router) {
        this._router = this.dealRouter(router)
        this.registerListenHelper()
    }
    // 处理router数据
    dealRouter (router) {
        const _d = {}
        router.map (item => {
            if (!item.path) {
                throw Error('缺少path')
            }
            if (!item.view) {
                throw Error('缺少view')
            }
            _d[item.path] = item
        })
        return _d
    }
    // 获取当前hash值
    getCurrentHash (hashStr = window.location.hash) {
        let hash = hashStr
        if(!hash || hash == "#/" || hash == "#"){
            return "/";
        }
        const num = stringTool.findIndex(hash, '?', 0)
        if (num != -1) {
           return hash.substring(1, num)
        }
        return hash.substring(1)
    }
    switchRouter () {
        Utils._event.broadcast(Define.VIEW.RENDERVIEW, this._router[this.getCurrentHash()])
    }
    registerListenHelper () {
        window.addEventListener('load', (e) => {
            this.switchRouter()
        })
        window.addEventListener('popstate', (e) => {
            this.switchRouter()
        })
    }
}