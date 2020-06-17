import EventPublish from '@utils/eventPublish'
export default class DomUtils {
    constructor () {
        // 将所有dom注入event方法
        this.$event = EventPublish
    }
}