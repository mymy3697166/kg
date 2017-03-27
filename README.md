# KG运动
### 目录结构
- __test__ 单元测试文件目录
- android android原生项目文件目录
- ios ios原生项目文件目录
- src react-native文件目录
    - assets 资源文件目录
    - config 项目配置文件目录
    - controllers 控制器文件目录
    - models 模型文件目录
    - utils 公共模块文件目录
    - views jsx视图文件目录

### 文件说明
Constants.js：常量定义文件，系统中所用到的常量都放在这个文件中，包括http请求地址、颜色字符串、数值等等。  
Db.js：realm数据库定义文件，该文件中定义了一个数据库接口，只需要导出db对象就可以直接使用，示例：
```
import { db } from './src/config/Db.js'
```