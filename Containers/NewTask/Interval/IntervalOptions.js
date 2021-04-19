import moment from 'moment';

const toMili = (interval) => moment.duration(1, interval).valueOf()


export default [
    { label: 'Days', value: toMili("days") },
    { label: 'Weeks', value: toMili("weeks") },
    { label: 'Months', value: toMili("months") },
    { label: 'Months', value: toMili("years") },
]