function createSearchParams(init) {
    if (init === void 0) {
        init = "";
    }
    init = init.replace('?', '').split("&")
    return init.reduce((obj, ele) => {
        const [key, value] = ele.split("=")
        if(key&&value){

            obj[key] = value;
        }
        return obj
    }, {})
}
export default createSearchParams;