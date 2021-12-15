// .vuepress/config.js
module.exports = {
    title: '欣农组件库',
    base: '/xinnongUI/',
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/',
            },
            {
                text: 'Github',
                link: 'https://github.com/liuzeqian/xinnongUI',
            },
            //https://www.npmjs.com/package/xinnong-ui
            {
                text: 'npm',
                link: 'https://www.npmjs.com/package/xinnong-ui',
            },
        ],
        sidebar: ['/', '/componentsDocs/card'],
    },
}