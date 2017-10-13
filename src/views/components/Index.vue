<template>
	<IArcicle>
		 <h1>安装</h1>
            <Anchor title="CDN 引入" h2></Anchor>
            <p>通过 <a href="https://unpkg.com/iview/" target="_blank">unpkg.com/iview</a> 可以看到 iView 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：</p>
            <i-code lang="html" bg> {{code.html}}  </i-code>
            <Anchor title="示例" h3></Anchor>
            <p>通过 CDN 可以快速使用 iView 写出一个示例，您可以复制下面代码或<a href="http://output.jsbin.com/libihed" target="_blank">在线预览</a>。</p>
            <i-code lang="auto" bg>{{code.preview}}</i-code>
            <Anchor title="NPM 安装" h2></Anchor>
            <p>推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，我们也推荐使用 ES2015。</p>
            <i-code lang="auto" bg> import vue from 'vue'</i-code>
            <p>如果您使用了 NPM 安装，并使用 webpack 作为构建工具，请继续阅读快速上手章节。</p>
	</IArcicle>
</template>
<script>
import IArcicle from '../../components/arcicle.vue'
   import iCode from '../../components/code.vue';
   import Anchor from '../../components/anchor.vue';
   import code from '../../code';
  export default {
  	components:{
	 IArcicle,
      iCode,
      Anchor
  	},
  	data () {
  		return {
            code:code
  		}
  	}
  }
</script>