export default {
    props: ['mid'],
    template: `<div style='width:300px;border:2px solid grey'>{{content}}</div>
                <div style='margin-bottom:10px'>{{mid}}</div>
                `,
    data() {
        return {
            content: '我是来凑数的子组件'
        }
    },
}