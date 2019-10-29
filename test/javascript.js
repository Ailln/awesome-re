const fs = require('fs')
const assert = require('assert')

const inputData = JSON.parse(fs.readFileSync("./data/input.json", "utf-8"))

inputData["items"].forEach(ele => {
    const outputName = ele["name"] + ": " + ele["rePattern"]
    console.log(outputName + " 开始测试...")

    const pattern = RegExp(ele["rePattern"])
    
    ele["trueData"].forEach(tureEle => {
        assert(pattern.test(tureEle) === true, tureEle)
    })

    ele["falseData"].forEach(falseEle => {
        assert(pattern.test(falseEle) === false, falseEle)
    })

    console.log(outputName + " 测试通过！\n")
});
