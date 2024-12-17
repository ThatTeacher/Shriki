const validShriki = ['shriki','ori','אורי', 'שריקי']
const shriki = {
    isShriki: (obj)=>{
        let str = String(obj).trim().toLowerCase().split(" ")
        let length = str.length
        let result = str.map((value)=> validShriki.findIndex((some)=> some === value)).filter((value)=> value >= 0).length
        return result === length
    }
}

module.exports = shriki;