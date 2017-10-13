<style>
  .wrapper-header{
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
    position: fixed;
    z-index: 999;
    width: 100%; 
}
   .wrapper-header-nav{
        width: 90%;
    height: 80px;
    margin: 0 auto; 
    }
    .wrapper-header .ivu-menu-horizontal{
         height: 80px;
    }
.wrapper-header-nav-logo{
   height: 50px;
    margin-top: 15px;
    float: left;
}
.wrapper-header-nav-logo img {
    height: 100%;
    line-height: 50px;
}
.wrapper-header-nav-search{
        float: left;
    margin-left: 100px;
}
    .wrapper-header-nav .ivu-menu-item i{
       /*  margin-right: 6px; */
    }
    .wrapper-header .ivu-menu{
        z-index: 901;
    }
    .wrapper-header-nav-list {
    height: inherit;
    float: right;
}
.wrapper-header .ivu-menu-horizontal {
    height: 80px;
    line-height: 80px;
}
.wrapper-header .ivu-menu-item-group-title{
    text-align: left;
    padding-left: 20px;
}
 
</style>
<template>
<div >
    <Menu mode="horizontal"  @on-select="handleSelect" :active-name="activeKey">
        <div class="wrapper-header-nav">
            <router-link to="/" class="wrapper-header-nav-logo">
                <img src="../assets/logo.vue.png">
            </router-link>
            <div class="wrapper-header-nav-search">
                
            </div>
            <div class="wrapper-header-nav-list">
                <Menu-item name="guide">
                    <Icon type="ios-navigate"></Icon>
                    {{ $t('index.guide') }}
                </Menu-item>
                <Menu-item name="component">
                    <Icon type="ios-keypad"></Icon>
                    {{ $t('index.component') }}
                </Menu-item>
                <Menu-item name="live" >
                    <Badge :dot="liveDot">
                        <Icon type="ios-videocam"></Icon>
                        {{ $t('index.live') }}
                    </Badge>
                </Menu-item>
                <Menu-item name="practice">
                    <Icon type="ios-analytics"></Icon>
                    {{ $t('index.practice') }}
                </Menu-item>
                <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                 {{ $t('index.statistic') }}
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
                <Button type="ghost" size="small" @click="handleChangeLang" >
                    <template v-if="lang === 'zh-CN'">EN</template>
                    <template v-else>中文</template>
                </Button>
            </div>
        </div>
    </Menu>
    </div>
</template>
<script>
  import navigate from '../config/navigate';  
    export default {
        props:{
            activeKey:[String,Number]
        },
        data () {
            return {
                 lang:  window.localStorage.getItem('language'),
                 liveDot: false
            }
        },
        methods:{
            handleChangeLang(){
                this.lang = this.lang=='zh-CN'?'en-US':'zh-CN';
                window.localStorage.setItem('language',  this.lang);
                window.location.href = this.$route.path;
            },
            handleSelect(type){
                   const pathSuffix = '';
                if (type === 'donate') {
                    
                } else if (type === 'github') {
                    window.open('https://github.com/iview/iview');
                } else if (type === 'guide') {
                    this.$router.push(navigate.guide[0].path + pathSuffix);
                } else if (type === 'component') {
                    this.$router.push(navigate.beforeComponents[0].path + pathSuffix);
                } else if (type === 'practice') {
                    this.$router.push(navigate.practice[0].path + pathSuffix);
                } else if (type === 'cli') {
                    this.$router.push('/cli' + pathSuffix);
                } else if (type === 'live') {
                    this.$router.push('/live');
                } else if (type === 'iview-loader') {
                    this.$router.push('/guide/iview-loader' + pathSuffix);
                }
                this.$nextTick(() => {
                    this.updateActiveNav();
                });
            },
             updateActiveNav () {
                const componentList = [
                    '/guide/install',
                    '/guide/start',
                    '/guide/i18n',
                    '/guide/theme',
                    '/guide/iview-loader',
                    '/overview',
                    '/guide/update'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.currentActiveKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.currentActiveKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.currentActiveKey = 'live';
                } else {
                    this.currentActiveKey = 'guide';
                }
            },
        },
        mounted () {
        }
    }
</script>