# 低代码平台 页面最小粒子的  JSON Schema

（这是我参考 [amis](https://github.com/baidu/amis) 整理出来的，但是和 amis 的 json 差异很大，如果你也正在做低代码平台，那么请帮忙完善这个 json。）

## 实例

```json
[{
  "name": "Button",
  "package": "antd-mobile",
  "props": [{
    "name": "style",
    "required": false,
    "value": "{}"
  }, {
    "name": "className",
    "required": false,
    "value": "btn"
  }, {
    "name": "onClick",
    "required": false,
    "value": "()=>{}"
  }],
  "description": "按钮",
  "description.en": "Button",
  "uuid": "23",
  "children": []
}]
```

项目中使用 validator 做校验

```tsx
import { validator } from '@alitajs/ajs';

console.log(validator(data));
// true || false
```