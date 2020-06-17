import DomManage from '@tools/DomManage'
import Util from '@utils/utils'
import { arrayTool } from 'mwutil'
export default class ViewEngine {
    constructor () {
        this._rootDom = null
        this._cssList = []
        this._jsList = []
        this._templateList = []
    }
    init(dom) {
        this._rootDom = dom
    }
    unBindCss () {
        this._cssList.forEach((item) => {
            Util.removeFile(item)
            this._cssList = arrayTool.removeItem(this._cssList, item)
        })
    }
    unBindScript () {
        this._jsList.forEach((item) => {
            Util.removeFile(item)
            this._jsList = arrayTool.removeItem(this._jsList, item)
        })
    }
    addView (view) {
        const domManage = new DomManage()
        domManage.appendDomFromFlie(this._rootDom, view)
        this._templateList.push(view)
    }
    addStyle (url) {
        // 卸载上一次
        this.unBindCss()
        Util.loadfile(url, 'css')
        this._cssList.push(url)
    }
    addScript (url) {
        // 卸载上一次
        this.unBindScript()
        Util.loadfile(url, 'js')
        this._jsList.push(url)
    }
}
