export default {
    props: ['data'],
    // data() {
    //     return {
    //         todo: 'asdf'
    //     }
    // },
    template: `<div style="width:200px;background-color:green;margin-bottom:10px;padding:10px;color:white;" @click='cli'>{{data.title}}</div>`,
    methods: {
        cli(e) {
            console.log(e.target.innerHTML)
        }
    },
}