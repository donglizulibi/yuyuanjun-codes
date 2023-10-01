// 在使用vue-cli创建项目的时候选择eslint standard标准化
// 就会在项目根目录下出现这个文件

// ESLint 配置文件遵循 commonJS 的导出规则，所导出的对象就是 ESLint 的配置对象
// 配置文档：https://zh-hans.eslint.org/docs/latest/use/configure/

module.exports = {
  // root表示.eslintrc.js这个文件的所在的文件夹，也就是项目的根目录
  // ESLint 规则将被限制到该目录下
  root: true,

  // env表示启用 ESLint 检测的环境, 这个配置中是属性是node
  // 表示在 node 环境下启动 ESlint 检测
  env: {
    node: true
  },

  // extends 表示 ESLint 中基础配置需要继承的配置
  // 比如在创建这个项目的时候，选择了standard标准化的eslint配置
  // 在这个选项中就会显示，ESLint 的基础配置会继承标准化的配置
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],

  // parserOptions表示eslint的解析器，表示要解析的内容
  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  // rules 表示需要修改的启动规则及其各自的错误级别
  // 其中“no-console” 和 “no-debugger” 表示需要修改的启动规则
  // 后面的三目运算的值的就是对应的错误级别

  /**
   * 错误级别分为三种
   * “off” 或者 0 -- 关闭规则，表示不会对这条规则进行校验
   * “warn” 或者 1 -- 开启规则，表示会校验，但是使用警告级别的错误：warn
   *                                （不会导致程序退出）
   *
   *
   *  “error” 或者 2 -- 开启规则，表示会校验，且使用错误级别的错误：error
   *                          （当被触发的时候，程序会退出）
   *
   * */

  // 在本例中，因为自动补齐工具prettier和eslint发生冲突，导致了
  // 单双引号、分号、以及对象中最后一个键值对是否添加逗号的问题会出现报错
  // 所以在rules这里
  // 将这三个属性都设置为off，也就是完全不报错，也可以设置为warn
  // 这样就会出现警告，但是项目仍然可以运行
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'off',
    'space-before-function-paren': 'off'

    // "semi" : "off",
    // "comma-dangle" : "off"
  }

  // 当然以上的做法是通过改变eslint的配置来符合prettier补齐规则
  // 如果要实现prettier来符合eslint的配置
  // 则需要在root目录下创建一个.prettierrc文件

  // 然后在这个文件中写入最基础的json配置
  // "singleQuote": true,     // 使用单引号代替双引号
  // "semi": false,           // 一行语句之后不添加分号
  // "trailingComma": "none"  // 对象中最后一个键值对不添加逗号

  // vscode - Settings - 搜索框输入save - Editor: Format On Save 勾选
  // 表示在保存页面的时候自动格式化代码

  // eslint标准中，希望点击tab按键，移动两个空格，而vscode中默认为四个空格
  // 可以在vscode - Settings - Editor: Tab Size 中改成两个

  // eslint和prettier之间还有一个冲突，在定义方法时候
  // prettier会把方法名和后面的小括号紧挨着，如果手动输入一个空格，也会自动消除
  // 而eslint的规则认为这之间应该有一个空格

  // 为了解决这个问题, 找到具体报错的位置，将错误的属性值space-before-function-paren
  // 复制到eslintrc的rules中，并设置为off或者0
  // 则表示eslintrc忽视这个问题，服从prettier的规则
}
