import re
import json

with open("./data/input.json", "r") as f_json:
    input_data = json.loads(f_json.read())

for ele in input_data["items"]:
    outputName = ele["name"] + ": " + ele["rePattern"]
    print(outputName + " 开始测试...")

    pattern = re.compile(ele["rePattern"])
    
    for true_ele in ele["trueData"]:
        assert re.search(pattern, true_ele) != None

    for false_ele in ele["falseData"]:
        assert re.search(pattern, false_ele) == None

    print(outputName + " 测试通过！\n")