export default {
    routers: [
        {
            path: '/',
            view: '/src/view/page1.html',
            static: {
                css: ['/src/static/css/page1.css'],
                js: ['/src/static/js/page1.js'],
            }
        },
        {
            path: '/page2',
            view: '/src/view/page2.html',
            static: {
                css: ['/src/static/css/page2.css'],
                js: ['/src/static/js/page2.js'],
            }
        }
    ]
}