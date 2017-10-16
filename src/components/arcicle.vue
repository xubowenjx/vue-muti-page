<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :activeKey="activeKey"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="20">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
    import Navigate from './Navigate.vue';
    import navigate from '../config/navigate';
    import navMenu from './menu.vue';

    export default {
        components: {
            Navigate,
            navMenu
        },
        data () {
            return {
                list: [],
                donate: false,
                ask: false,
                activeKey: '',
                lang: this.$lang
            }
        },
        methods: {
            handleModalClose () {
                this.donate = false;
            },
            handleAskClose () {
                this.ask = false;
            },
            updateActiveNav () {
                const route = this.$route.path;

                if (route.indexOf('component') > -1 ) {
                    this.activeKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.activeKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.activeKey = 'live';
                }  else {
                    this.activeKey = 'guide';
                }
                 
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            }
        },
        created () {
            this.lang = this.$lang;
        },
        mounted () {
            this.updateActiveNav();
        }
    }
</script>