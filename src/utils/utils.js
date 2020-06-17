import EventPublish from '@utils/eventPublish'
const tools = {
    isFunction(func) {
        return typeof func === "function"
    },
    _event: EventPublish,
    _idSeed: {
        id: 9999,
        newId: () => {
            return tools._idSeed.id++
        }
    },
    loadfile(filename, filetype) {
        //如果文件类型为 .js ,则创建 script 标签，并设置相应属性
        if (filetype == "js") {
            var fileref = document.createElement('script');
            $(fileref).attr("type", "text/javascript");
            $(fileref).attr("src", filename);
            $(fileref).attr("__tag", filename);
        }
        //如果文件类型为 .css ,则创建 script 标签，并设置相应属性
        else if (filetype == "css") {
            var fileref = document.createElement("link");
            $(fileref).attr("rel", "stylesheet");
            $(fileref).attr("type", "text/css");
            $(fileref).attr("href", filename);
            $(fileref).attr("__tag", filename);
        }
        if (typeof fileref != "undefined") {
            $('head').eq(0).append(fileref);
        }
    },
    removeFile(filename) {
        $('head').eq(0).find('[__tag="' + filename + '"]').remove()
    }
}
export default tools