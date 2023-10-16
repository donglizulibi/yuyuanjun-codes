// 关于表单校验的三个关键点
// 1 为 el-form 绑定 model 属性
// 2 为 el-form 绑定 rules 属性
// 3 为 el-form-item 绑定 prop 属性

export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
