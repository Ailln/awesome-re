# Awesome Re

![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

📥常见正则表达式收集

> 由于不同语言的正则语法略有区别，本项目仅在 `Python` 和 `JavaScript` 上做了测试，其他语言请自行测试后使用。

## 正则表达式

### 1 手机号

1. 常见的 11 位中国手机号

    ```
    "1[3-9]\\d{9}"
    ```

### 2 身份证

1. 常见的 18 位身份证号

    ```
    "[1-9]\\d{5}(19|(2\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]"
    ```

2. 老的 15 位身份证号

    ```
    "[1-9]\\d{5}\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{2}"
    ```

## 使用方法

> 以常见的 11 位中国手机号的匹配举例。

### 在 Python 中

```python
import re

pattern = re.compile("1[3-9]\\d{9}")
input_text = "我的手机号是13111111111。"

result = re.search(pattern, input_text)
if result:
    print("匹配到的手机号为：" + result.group())
else:
    print("没有找到手机号！")
```

### 在 JavaScript 中

```javascript
const pattern = RegExp("1[3-9]\\d{9}")
const inputText = "我的手机号是13111111111。"

const result = inputText.match(pattern)
if (result) {
    console.log("匹配到的手机号为：" + result[0])
} else {
    console.log("没有找到手机号！")
}
```

## 测试

```bash
git clone https://github.com/HaveTwoBrush/awesome-re.git
cd awesome-re

# Python 测试
python ./test/python.py

# JavaScript 测试
node ./test/javascript.js
```

## 资料

- [MDN: 正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Python: Regular expression operations](https://docs.python.org/3.7/library/re.html)

## 许可证

[![](https://award.dovolopor.com?lt=License&rt=MIT&rbc=green)](./LICENSE)