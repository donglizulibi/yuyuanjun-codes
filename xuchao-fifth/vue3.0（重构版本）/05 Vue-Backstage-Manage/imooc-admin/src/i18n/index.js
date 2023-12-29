import { createI18n } from 'vue-i18n'
const messages = {
  en: {
    msg: {
      test: 'hello world'
    }
  },
  zh: {
    msg: {
      test: '你好世界'
    }
  }
}

const locale = 'zh'

const i18n = createI18n({
  // 使用composition api
  legacy: false,

  // 全局使用 t 函数
  globalInjection: true,
  locale,
  messages
})

export default i18n
