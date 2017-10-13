// 定义左侧导航

const list = {
    guide: [
        {
            title: '介绍',
            titleEn: 'Introduction',
            path: '/guide/introduce'
        },
        {
            title: '设计原则',
            titleEn: 'Design Principles',
            path: '/guide/design'
        },
        {
            title: '布局',
            titleEn: 'Navigation Examples',
            path: '/guide/layout'
        },
        {
            title: '参与贡献',
            titleEn: 'Contributing Guide',
            path: '/guide/standard'
        }
    ],
    beforeComponents: [
        {
            title: '安装',
            titleEn: 'Installation',
            path: '/component/install'
        },
        {
            title: '快速上手',
            titleEn: 'Quick Start',
            path: '/guide/start'
        },
        {
            title: '国际化',
            titleEn: 'Internationalization',
            path: '/guide/i18n'
        },
        {
            title: '定制主题',
            titleEn: 'Customize Theme',
            path: '/guide/theme'
        },
        {
            title: 'iView Loader',
            titleEn: 'iView Loader',
            path: '/guide/iview-loader'
        },
        {
            title: '概览',
            titleEn: 'Overview',
            path: '/overview'
        },
        {
            title: '更新日志',
            titleEn: 'Change Log',
            path: '/guide/update'
        }
    ],
    components: [
        {
            type: 'Basic',
            title: '基础',
            list: [
                {
                    title: 'Grid 栅格',
                    path: '/components/grid',
                    img: 'grid.png',
                    icon: 'ios-grid-view-outline'
                }
                
            ]
        },
        {
            type: 'Form',
            title: '表单',
            list: [
                {
                    title: 'Input 输入框',
                    path: '/components/input',
                    img: 'input.png',
                    icon: 'ios-compose-outline'
                } 
            ]
        },
        {
            type: 'View',
            title: '视图',
            list: [
                {
                    title: 'Alert 警告提示',
                    path: '/components/alert',
                    img: 'alert.png',
                    icon: 'alert'
                } 
            ]
        },
        {
            type: 'Navigation',
            title: '导航',
            list: [
                {
                    title: 'Menu 导航菜单',
                    path: '/components/menu',
                    img: 'menu.png',
                    icon: 'navicon-round'
                } 
            ]
        },
        {
            type: 'Chart',
            title: '图表',
            list: [
                {
                    title: 'Circle 进度环',
                    path: '/components/circle',
                    img: 'circle.png',
                    icon: 'ios-circle-outline'
                }
            ]
        },
        {
            type: 'Other',
            title: '其它',
            list: [
                {
                    title: 'Affix 图钉',
                    path: '/components/affix',
                    img: 'affix.png',
                    icon: 'pin'
                },
                {
                    title: 'BackTop 返回顶部',
                    path: '/components/back-top',
                    img: 'back-top.png',
                    icon: 'ios-arrow-up'
                },
                {
                    title: 'Spin 加载中',
                    path: '/components/spin',
                    img: 'spin.png',
                    icon: 'load-d'
                }
            ]
        }
    ],
    practice: [
        {
            title: '实践案例',
            titleEn: 'Practical Cases',
            path: '/practice/case'
        },
        {
            title: 'iView Logo 设计思路',
            titleEn: 'iView Logo Design',
            path: '/practice/logo'
        }
    ],
    live: [
        {
            title: '最新课程',
            path: '/live'
        }
    ]
};

export default list;
