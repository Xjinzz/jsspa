export default class DomManage {
  constructor(){}
  appendDomFromFlie(dom, file) {
    $(dom).html('').load(file)
  }
}