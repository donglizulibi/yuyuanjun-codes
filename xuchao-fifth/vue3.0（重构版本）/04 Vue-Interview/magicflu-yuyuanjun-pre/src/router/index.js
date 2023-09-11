import { createRouter, createWebHistory } from "vue-router";
import Front from "@/views/Front.vue";
import Member from "@/views/Member.vue";
import weekTable from "@/views/weekTable.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: "/",
            component: Front,
            name: "front",
        },
        {
            path: "/member",
            component: Member,
            name: "member",
        },

        {
            path: "/weekTable",
            component: weekTable,
            name: "weekTable",
        },
    ],
});

export { router };