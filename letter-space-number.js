function letterSpaceNumber(str){
    return str.match(/[a-aZ-Z]\d(?![a-zA-Z])/g)||[];
}