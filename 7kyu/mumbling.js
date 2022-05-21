function accum(s) {

    let mumbleStr = ""
	
    for (let i = 0; i < s.length; i++) {
        mumbleStr = mumbleStr.concat(s[i].toUpperCase())
        
        for (let j = 0; j < i; j++) {
            mumbleStr = mumbleStr.concat(s[i].toLowerCase())
        }

        mumbleStr = mumbleStr.concat("-")

    }

    return mumbleStr.slice(0,-1)

}