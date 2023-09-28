export default {
    name: 'daybook',
    component: () => import(/*webpackChunkName: "daybook*/ './../layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/*webpackChunkName: "daybook-no-entry*/ '@/modules/daybook/views/NoEntrySelected.vue'),
        }
    ]
}