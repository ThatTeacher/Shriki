const validShriki = ['shriki','ori','אורי', 'שריקי']
const shriki = {
    isShriki: (obj)=>{
        let str = String(obj).trim().toLowerCase() 
        for(let variation of validShriki){
            if(str === variation){
                return true
            }
        }
        return false
    }
}

module.exports = shriki;