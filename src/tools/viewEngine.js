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
        // 卸载style
        this.unBindCss()
        // 卸载 js
        this.unBindScript()
        const domManage = new DomManage()
        domManage.appendDomFromFlie(this._rootDom, view)
        this._templateList.push(view)
    }
    addStyle (url) {
        Util.loadfile(url, 'css')
        this._cssList.push(url)
    }
    addScript (url) {
        Util.loadfile(url, 'js')
        this._jsList.push(url)
    }
}
