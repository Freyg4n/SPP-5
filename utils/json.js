const fs = require('fs');

module.exports.readToJSON = function(path,userId,isAll) {
    let data = fs.readFileSync(path, "utf8")
    let parsedJSON = JSON.parse(data)

    let p=[]
    if (path == 'data.json'&& !isAll) {
        for (let i = 0; i < parsedJSON['tasks'].length; i++) {
            if (parsedJSON['tasks'][i].userId == userId) {
                p.push(parsedJSON['tasks'][i])
            }
        }
        console.log(JSON.parse(JSON.stringify(Object.assign({}, {'tasks':p}))))
      //  console.log(parsedJSON)
        return JSON.parse(JSON.stringify(Object.assign({}, {'tasks':p})))

    }
    return parsedJSON
}

module.exports.writeToJSON = function(path, obj) {
    const data = JSON.stringify(obj, null, 2);
    fs.writeFileSync(path, data);
    return data;
}