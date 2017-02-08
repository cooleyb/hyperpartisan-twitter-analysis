var chart = c3.generate({
    bindto: '#container2',
    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '09-12-2016 16:51:15 ', '09-12-2016 16:51:17 ', '09-12-2016 16:51:25 ', '09-12-2016 16:51:31 ', '09-12-2016 16:51:36 ', '09-12-2016 16:51:40 '],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 340, 200, 500, 250, 350]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:%M:%S'
            }
        }
    }
});