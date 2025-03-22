import{_ as n,c as a,b as i,o as e}from"./app-CYQbWjt5.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="第二章进阶篇" tabindex="-1"><a class="header-anchor" href="#第二章进阶篇"><span>第二章进阶篇</span></a></h1><p>前言：在上一篇中，我们已经认识了什么是鸿蒙开发，并且已经能够独自开发一个简单的静态页面，</p><p>那么在本篇的内容中，我们将学习较深入的知识。</p><h1 id="_1-内置组件" tabindex="-1"><a class="header-anchor" href="#_1-内置组件"><span>1. 内置组件</span></a></h1><h2 id="_1-1-swiper-轮播组件" tabindex="-1"><a class="header-anchor" href="#_1-1-swiper-轮播组件"><span>1.1 Swiper 轮播组件</span></a></h2><p><code>Swiper</code> 是一个容器组件，当设置了多个子组件后，可以对这些子组件进行轮播显示。（文字，图片）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 结构</span></span>
<span class="line"><span>Swiper() {</span></span>
<span class="line"><span>    // 轮播内容</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 设置尺寸（内容会自动拉伸）</span></span>
<span class="line"><span>.width(&#39;100%&#39;)</span></span>
<span class="line"><span>.height(100)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用属性：</strong></p><table><thead><tr><th>属性方法</th><th>传值</th><th>作用</th><th>默认值</th></tr></thead><tbody><tr><td>loop</td><td>boolean</td><td>是否开启循环</td><td>true</td></tr><tr><td>autoPlay</td><td>boolean</td><td>是否自动播放</td><td>false</td></tr><tr><td>interval</td><td>number</td><td>自动播放的时间间隔（ms）</td><td>3000</td></tr><tr><td>vertical</td><td>boolean</td><td>纵向滑动轮播</td><td>false</td></tr></tbody></table><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 例子 - 轮播图设置小圆点</span></span>
<span class="line"><span>Swiper() {</span></span>
<span class="line"><span>    ……略</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.indicator (</span></span>
<span class="line"><span>	Indicator.dot() // 小圆点</span></span>
<span class="line"><span>	 .itemWidth(20) // 默认的宽</span></span>
<span class="line"><span>	 .itemHeight(20) // 默认的高</span></span>
<span class="line"><span>	 .color(Color.Black) // 默认颜色</span></span>
<span class="line"><span>	 .selectedItemWidth() // 选中时的宽</span></span>
<span class="line"><span>	 .selectedItemHeight() // 选中时的高</span></span>
<span class="line"><span>	 .selectedColor(Color.White) // 选中时的颜色</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-2-scroll-滚动容器" tabindex="-1"><a class="header-anchor" href="#_1-2-scroll-滚动容器"><span>1.2 Scroll 滚动容器</span></a></h2><p>当子组件的布局尺寸超过 <code>Scroll</code> 的尺寸时，内容可以滚动</p><ol><li>Scroll 设置尺寸</li><li>设置溢出的子组件（只支持一个子组件）</li><li>滚动方向（支持横向或者纵向，默认纵向）</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 结构</span></span>
<span class="line"><span>Scroll() {</span></span>
<span class="line"><span>    // 支持一个子组件</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>        // 内容放在内部</span></span>
<span class="line"><span>        // 尺寸超过Scroll尺寸可以滚动</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.width(&#39;100%&#39;)</span></span>
<span class="line"><span>.height(100)</span></span>
<span class="line"><span>.scrollable(ScrollDirection.xxx)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用属性：</strong></p><table><thead><tr><th>名称</th><th>参数类型</th><th>描述</th></tr></thead><tbody><tr><td>scrollable</td><td>ScrollDirection</td><td>设置滚动方向<br>ScrollDirection.Vertical 纵向<br>ScrollDirection.Horizontal 横向</td></tr><tr><td>scrollBar</td><td>BarState</td><td>设置滚动条状态</td></tr><tr><td>scrollBarColor</td><td>string | number | Color</td><td>设置滚动条颜色</td></tr><tr><td>ScrollBarWidth</td><td>string | number</td><td>设置滚动条宽度</td></tr><tr><td>edeEffect</td><td>value:EdgeEffect</td><td>设置边缘滑动效果<br>EdgeEffect.None 无<br>EdgeEffect.Spring 弹簧<br>EdgeEffect.Fade 阴影</td></tr></tbody></table><h3 id="_1-2-1-scroll-事件" tabindex="-1"><a class="header-anchor" href="#_1-2-1-scroll-事件"><span>1.2.1 Scroll 事件</span></a></h3><p><code>Scroll</code> 组件提供了一些事件，让开发者可以在适当的时候添加逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Scroll() {</span></span>
<span class="line"><span>    // 内容略</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.onScroll((x, y) =&gt; {</span></span>
<span class="line"><span>    // 滚动时，一直触发</span></span>
<span class="line"><span>    // 可以结合 scroller的 currentOffset方法 获取滚动距离</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-tabs-容器组件" tabindex="-1"><a class="header-anchor" href="#_1-3-tabs-容器组件"><span>1.3 Tabs 容器组件</span></a></h2><p>当内容过多时，可以使用 <code>Tabs</code> 组件分类展示</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 例子</span></span>
<span class="line"><span>Tabs() {</span></span>
<span class="line"><span>    TabContent() {</span></span>
<span class="line"><span>        Text(&#39;我是首页&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .tabBar(&#39;首页&#39;)</span></span>
<span class="line"><span>    TabContent() {</span></span>
<span class="line"><span>        Text(&#39;我是分类&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .tabBar(&#39;分类&#39;)</span></span>
<span class="line"><span>    TabContent() {</span></span>
<span class="line"><span>        Text(&#39;我是推荐&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .tabBar(&#39;推荐&#39;)</span></span>
<span class="line"><span>    TabContent() {</span></span>
<span class="line"><span>        Text(&#39;我是我的&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .tabBar(&#39;我的&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用属性：</strong></p><ul><li><code>barPosition:</code> 调整位置 开头 或 结尾 （参数）</li><li><code>vertical:</code> 调整导航 水平 或 垂直</li><li><code>scrollable:</code> 调整是否 手势滑动 切换</li><li><code>animationDuration:</code> 点击滑动动画时间</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// BarPOsition.Start 起始</span></span>
<span class="line"><span>// BarPOsition.End 结尾</span></span>
<span class="line"><span>Tabs({ barPOsition: BarPosition.End }) {</span></span>
<span class="line"><span>    // 内容略</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.vertical(true) // 垂直导航 true / 水平 false</span></span>
<span class="line"><span>.scrollable(true) // 允许滑动 true / 不允许 false</span></span>
<span class="line"><span>.animationDuration(0) // 切换动画的时间，毫秒</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-1-自定义-tabbar" tabindex="-1"><a class="header-anchor" href="#_1-3-1-自定义-tabbar"><span>1.3.1 自定义 TabBar</span></a></h3><p><code>TabBar</code> 在底部，一般会显示图形和文字，甚至有特殊的图标</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 结构</span></span>
<span class="line"><span>Tabs() {</span></span>
<span class="line"><span>    TabContent() {</span></span>
<span class="line"><span>        // 内容略</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .tabBar(this.tabBarBuilder())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Builder () {</span></span>
<span class="line"><span>	// 自定义的Tabbar结构   </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>TabBar - 高亮切换：</strong></p><p><strong>思路：</strong></p><ol><li>监听切换事件 ——&gt; 得到索引值，记录高亮的索引</li><li>给每个<code>tabBar</code> 起个标记，0，1，2</li><li>在<code>tabBar</code> 内部比较标记 == 记录的索引 ? 高亮 : 不高亮</li></ol><table><thead><tr><th>名称</th><th>功能切换</th></tr></thead><tbody><tr><td>onChange(event: (index: number) =&gt; void)</td><td>Tab页签切换后触发的事件<br>- index：当前显示的index索引，索引从0开始计算</td></tr><tr><td>onTabClick(event: (index: number) =&gt; void)10+</td><td>Tab页签点击后触发的事件<br>- index：被点击的index索引，索引从0开始计算</td></tr></tbody></table><h1 id="_2-样式与结构重用" tabindex="-1"><a class="header-anchor" href="#_2-样式与结构重用"><span>2. 样式与结构重用</span></a></h1><h2 id="_2-1-extend-扩展组件-样式、事件" tabindex="-1"><a class="header-anchor" href="#_2-1-extend-扩展组件-样式、事件"><span>2.1 @Extend: 扩展组件（样式、事件）</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Swiper() {</span></span>
<span class="line"><span>    Text(&#39;1&#39;)</span></span>
<span class="line"><span>     .textAlign(TextAlign.Center)</span></span>
<span class="line"><span>     .backgroundColor(Color.Red)</span></span>
<span class="line"><span>     .fontColor(Color.White)</span></span>
<span class="line"><span>     .fontSize(30)</span></span>
<span class="line"><span>     .onClick(() =&gt; {</span></span>
<span class="line"><span>         AlerDialog.sho({</span></span>
<span class="line"><span>             message: &#39;轮播图1&#39;</span></span>
<span class="line"><span>         })</span></span>
<span class="line"><span>     })</span></span>
<span class="line"><span>     Text(&#39;2&#39;)</span></span>
<span class="line"><span>     .textAlign(TextAlign.Center)</span></span>
<span class="line"><span>     .backgroundColor(Color.Orange)</span></span>
<span class="line"><span>     .fontColor(Color.White)</span></span>
<span class="line"><span>     .fontSize(30)</span></span>
<span class="line"><span>     .onClick(() =&gt; {</span></span>
<span class="line"><span>         AlerDialog.sho({</span></span>
<span class="line"><span>             message: &#39;轮播图2&#39;</span></span>
<span class="line"><span>         })</span></span>
<span class="line"><span>     })</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述的代码除了背景颜色和弹框内容不一样，其余都一模一样，那么我们就可以用 <code>@Extend</code> 来抽离相同的代码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Extend(Text) // 括号里写的是你要基于什么类型的组件复用</span></span>
<span class="line"><span>function textExtend(color: ResoureColor, txt: string) {</span></span>
<span class="line"><span>    .textAlign(TextAlign.Center)</span></span>
<span class="line"><span>     .backgroundColor(color)</span></span>
<span class="line"><span>     .fontColor(Color.White)</span></span>
<span class="line"><span>     .fontSize(30)</span></span>
<span class="line"><span>     .onClick(() =&gt; {</span></span>
<span class="line"><span>         AlerDialog.sho({</span></span>
<span class="line"><span>             message: txt</span></span>
<span class="line"><span>         })</span></span>
<span class="line"><span>     })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Siper() {</span></span>
<span class="line"><span>    Text(&#39;1&#39;)</span></span>
<span class="line"><span>     .textExtend(Color.Red, &#39;轮播图1&#39;)</span></span>
<span class="line"><span>    Text(&#39;2&#39;)</span></span>
<span class="line"><span>     .textExtend(Color.Orange, &#39;轮播图2&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-styles-抽取通用属性、事件" tabindex="-1"><a class="header-anchor" href="#_2-2-styles-抽取通用属性、事件"><span>2.2 @Styles: 抽取通用属性、事件</span></a></h2><p><code>@Extend</code> 侧重组件，而 <code>@Styles</code> 侧重样式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Text(this.message)</span></span>
<span class="line"><span> .width(100)</span></span>
<span class="line"><span> .height(100)</span></span>
<span class="line"><span> .backgroundColor(this.bgColor)</span></span>
<span class="line"><span> .onClick(() =&gt; {</span></span>
<span class="line"><span>     this.bgColor = Color.Orange</span></span>
<span class="line"><span> })</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>Button(&#39;按钮&#39;)</span></span>
<span class="line"><span> .width(100)</span></span>
<span class="line"><span> .height(100)</span></span>
<span class="line"><span> .backgroundColor(this.bgColor)</span></span>
<span class="line"><span> .onClick(() =&gt; {</span></span>
<span class="line"><span>     this.bgColor = Color.Orange</span></span>
<span class="line"><span> })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Column(){}</span></span>
<span class="line"><span> .width(100)</span></span>
<span class="line"><span> .height(100)</span></span>
<span class="line"><span> .backgroundColor(this.bgColor)</span></span>
<span class="line"><span> .onClick(() =&gt; {</span></span>
<span class="line"><span>     this.bgColor = Color.Orange</span></span>
<span class="line"><span> })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述这样的代码中，他们的组件名都不一样，<code>@Extend</code> 是用不了的，那么我们可以使用 <code>@Styles</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Styles function commonStyles() {</span></span>
<span class="line"><span>    .width(100)</span></span>
<span class="line"><span>    .height(100)</span></span>
<span class="line"><span>    .onClick(()=&gt; {</span></span>
<span class="line"><span>        //……</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct FancyDemo {</span></span>
<span class="line"><span>    @Styles setBg() {</span></span>
<span class="line"><span>        .backgroundColor(Color.Red)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    builder() {</span></span>
<span class="line"><span>    	Text()</span></span>
<span class="line"><span>    	 .commonStyles()</span></span>
<span class="line"><span>    	 .setBg()</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark><strong>注意：</strong></mark> <code>@Styles</code> 不支持传参</p><h2 id="_2-3-builder-自定义构建函数-结构、样式、事件" tabindex="-1"><a class="header-anchor" href="#_2-3-builder-自定义构建函数-结构、样式、事件"><span>2.3 @Builder: 自定义构建函数（结构、样式、事件）</span></a></h2><p><code>@Builder</code> 除了能封装样式和事件，还能封装结构</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Row() {</span></span>
<span class="line"><span>    Column({ space: 10 }) {</span></span>
<span class="line"><span>    	Text(&#39;阿里拍卖&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .width(&#39;25%&#39;)</span></span>
<span class="line"><span>    .onClick(() =&gt; {</span></span>
<span class="line"><span>        AlertDialog.showw({</span></span>
<span class="line"><span>            message: &#39;点了 阿里拍卖&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Column({ space: 10 }) {</span></span>
<span class="line"><span>    	Text(&#39;菜鸟&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .width(&#39;25%&#39;)</span></span>
<span class="line"><span>    .onClick(() =&gt; {</span></span>
<span class="line"><span>        AlertDialog.showw({</span></span>
<span class="line"><span>            message: &#39;点了 菜鸟&#39;</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>@Builder</code> 优化之后代码</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 全局 Builder</span></span>
<span class="line"><span>function navItem(text: string) {</span></span>
<span class="line"><span>    Column({ space: 10 }) {</span></span>
<span class="line"><span>        Text(text)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    .idth(&#39;25&#39;)</span></span>
<span class="line"><span>    .onClick(() =&gt; {</span></span>
<span class="line"><span>        AlertDialog.showw({</span></span>
<span class="line"><span>            message: &#39;点了 &#39; + text</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Row() {</span></span>
<span class="line"><span>    navItem(&#39;阿里拍卖&#39;)</span></span>
<span class="line"><span>    navItem(&#39;菜鸟&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-class-类" tabindex="-1"><a class="header-anchor" href="#_3-class-类"><span>3. Class 类</span></a></h1><p>类是用来创建对象的模板。同时类声明也会引入一个新类型，可定义其实力属性、方法和构造函数</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 类名 首字母大写（规范）</span></span>
<span class="line"><span>class 类型 {</span></span>
<span class="line"><span>    // 1. 实例属性（字段）</span></span>
<span class="line"><span>    // 2. 构造函数</span></span>
<span class="line"><span>    // 3. 方法</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用类 实例化对象 基于类 创建对象</span></span>
<span class="line"><span>const p:类名 = new 类名()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-1-class-类-实例属性-字段" tabindex="-1"><a class="header-anchor" href="#_3-1-class-类-实例属性-字段"><span>3.1 Class 类 - 实例属性（字段）</span></a></h2><p>通过实例属性（字段），可以保存各种类型的数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 类</span></span>
<span class="line"><span>class 类型 {</span></span>
<span class="line"><span>    // 字段名、类名、初始值</span></span>
<span class="line"><span>    字段名1: 类型 = &#39;xxx&#39;</span></span>
<span class="line"><span>    // 可选字段可以不设置初始值</span></span>
<span class="line"><span>    字段名2?: 类型</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可选字段在使用时需要配合 可选链操作符 避免出错</span></span>
<span class="line"><span>const p:类名 = new 类名()</span></span>
<span class="line"><span>p.字段名1</span></span>
<span class="line"><span>p?.字段名2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-class-类-构造函数" tabindex="-1"><a class="header-anchor" href="#_3-2-class-类-构造函数"><span>3.2 Class 类 - 构造函数</span></a></h2><p>不同实例，将来需要有不同的字段初始值，就需要通过构造函数实现</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class 类{</span></span>
<span class="line"><span>    字段A: 类型</span></span>
<span class="line"><span>    字段B: 类型</span></span>
<span class="line"><span>    constructor(参数…) {</span></span>
<span class="line"><span>        // 通过 new 实例化的时候 会调用 constructor</span></span>
<span class="line"><span>        // 通过关键字 this 可以获得实例对象</span></span>
<span class="line"><span>        this.字段名A = 参数</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const 实例1 = new 类(参数…)</span></span>
<span class="line"><span>const 实例2 = new 类(参数…)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3-class-类-定义方法" tabindex="-1"><a class="header-anchor" href="#_3-3-class-类-定义方法"><span>3.3 Class 类 - 定义方法</span></a></h2><p>类中可以定义方法，并且在内部编写逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class 类名 {</span></span>
<span class="line"><span>    方法名(参数…): 返回值类型 {</span></span>
<span class="line"><span>        // 逻辑…</span></span>
<span class="line"><span>        // 可以通过 this 获取实例对象</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 例子</span></span>
<span class="line"><span>class Student {</span></span>
<span class="line"><span>	name: string</span></span>
<span class="line"><span>	age: number</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    constructor(name: string, age: number) {</span></span>
<span class="line"><span>        this.name = name</span></span>
<span class="line"><span>        this.age = age</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    dance(name: string): void {</span></span>
<span class="line"><span>        console.log(&#39;输出&#39;, \`\${name}和\${this.name}在跳舞\`)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const stu1 = new Student(&#39;Amy&#39;, 18)</span></span>
<span class="line"><span>stu1.dance(&#39;Jack&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>静态属性 和 静态方法：</strong></p><p>类还可以添加静态属性、方法，后续访问需要通过类来完成</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 定义</span></span>
<span class="line"><span>class 类 {</span></span>
<span class="line"><span>    static 字段: 类型</span></span>
<span class="line"><span>    static 方法() {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>类.字段</span></span>
<span class="line"><span>类.方法()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-继承-extends-和-super-关键字" tabindex="-1"><a class="header-anchor" href="#_3-4-继承-extends-和-super-关键字"><span>3.4 继承 extends 和 super 关键字</span></a></h2><p>类可以通过继承快速的获得另一个类的字段和方法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class 父类 {</span></span>
<span class="line"><span>    // 字段</span></span>
<span class="line"><span>    // 方法</span></span>
<span class="line"><span>    // 构造函数</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class 子类 extends 父类 {</span></span>
<span class="line"><span>    // 自己的字段</span></span>
<span class="line"><span>    // 自己的方法</span></span>
<span class="line"><span>    // 可以重写父类的方法</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-class-类-instanceof" tabindex="-1"><a class="header-anchor" href="#_3-5-class-类-instanceof"><span>3.5 Class 类 - instanceof</span></a></h2><p><code>instanceof</code> 运算符可以用来检测某个对象是否是某个类的实例</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>实例对象 instanceof Class</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>typeof 表达式</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-6-class-类-修饰符" tabindex="-1"><a class="header-anchor" href="#_3-6-class-类-修饰符"><span>3.6 Class 类 - 修饰符</span></a></h2><p>类的方法和属性都可以通过修饰符来限制访问</p><p>修饰符包括：<code>readonly</code> 、<code>private</code> 、<code>protected</code> 、<code>public</code> 。默认为<code>public</code></p><ul><li><code>readonly</code> 只可以取值，不可以修改</li><li><code>private</code> 不能在声明该成员的类之外访问，包括子类</li><li><code>protected</code> 和<code>private</code> 类似，不同的在于它允许在子类中访问</li><li><code>public</code> 在程序的任何可访问该类的地方都是可见的（默认）</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>class 类 {</span></span>
<span class="line"><span>    readonly 属性: 类型</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-进阶小知识" tabindex="-1"><a class="header-anchor" href="#_4-进阶小知识"><span>4. 进阶小知识</span></a></h1><h2 id="_4-1-剩余参数" tabindex="-1"><a class="header-anchor" href="#_4-1-剩余参数"><span>4.1 剩余参数</span></a></h2><p>剩余参数的语法，我们将函数或方法中一个不定数量的参数表示为一个数组</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function sum(参数1，参数2，参数3) {</span></span>
<span class="line"><span>    return 参数1 + 参数2 + 参数3</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>const res = sum (10, 20, 30)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;他们的和是&#39;, res)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向上述这样的代码，如果我们想求四个或者五个数字的和，那么我们需要重写这个方法，这样太过繁琐</p><p>而剩余参数是以<code>...剩余参数数组</code> 的形式来表示多个数字，并且剩余参数只能写在最后一位</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function sum (num1: number, ...argsArr: number[]) {</span></span>
<span class="line"><span>  for (let arg of argsArr)</span></span>
<span class="line"><span>    num1 += arg</span></span>
<span class="line"><span>  return num1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;输出：&#39;, sum(1, 2))</span></span>
<span class="line"><span>console.log(&#39;输出：&#39;, sum(1, 2, 3, 4))</span></span>
<span class="line"><span>console.log(&#39;输出：&#39;, sum(1, 2, 3, 4, 5, 6))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-展开运算符" tabindex="-1"><a class="header-anchor" href="#_4-2-展开运算符"><span>4.2 展开运算符</span></a></h2><p>用于展开数组里面的数字</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>const arr1: number[] = [1, 2, 3, 4, 5]</span></span>
<span class="line"><span>const arr2: number[] = [11, 22, 33, 44, 55]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这里用展开运算符快速合并两个数组</span></span>
<span class="line"><span>const arr3: number[] = [...arr1, ...arr2]</span></span>
<span class="line"><span>console.log(&#39;合并结果：&#39;, arr3)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-接口补充知识" tabindex="-1"><a class="header-anchor" href="#_4-3-接口补充知识"><span>4.3 接口补充知识</span></a></h2><h3 id="_4-3-1-接口继承" tabindex="-1"><a class="header-anchor" href="#_4-3-1-接口继承"><span>4.3.1 接口继承</span></a></h3><p>接口的继承和类的继承如出一辙，也是为了帮助我们简化代码</p><p>接口继承使用的关键字 <code>extends</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>interface 接口1 {</span></span>
<span class="line"><span>    属性1: 类型</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface 接口2 extends 接口1 {</span></span>
<span class="line"><span>    属性2: 类型</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-2-接口实现" tabindex="-1"><a class="header-anchor" href="#_4-3-2-接口实现"><span>4.3.2 接口实现</span></a></h3><p>可以通过接口结合 <code>implements</code> 来限制类必须要有某些属性和方法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>interface 接口名 {</span></span>
<span class="line"><span>    ……略</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class 类名 implements 接口名 {</span></span>
<span class="line"><span>    ……略</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-4-泛型" tabindex="-1"><a class="header-anchor" href="#_4-4-泛型"><span>4.4 泛型</span></a></h2><p>泛型可以让函数等，与多种不同的类型一起工作，灵活可复用通俗一点就是：类型是<mark>可变</mark>的</p><p>按照原来的方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function fn1 (temp: string): string{</span></span>
<span class="line"><span>	return temp </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function fn2 (temp: number): number{</span></span>
<span class="line"><span>	return temp </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function fn3 (temp: boolean): boolean{</span></span>
<span class="line"><span>	return temp </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用泛型之后：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function fn4 &lt;Type&gt;(temp: Type): Type{</span></span>
<span class="line"><span>	return temp </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fn4&lt;string&gt;(&#39;123&#39;)</span></span>
<span class="line"><span>fn&lt;number&gt;(100)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-1-泛型约束" tabindex="-1"><a class="header-anchor" href="#_4-4-1-泛型约束"><span>4.4.1 泛型约束</span></a></h3><p>之前的类型参数， 可以传递任何类型，没有限制。</p><p>如果希望有限制 ——&gt; 泛型约束</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 结构</span></span>
<span class="line"><span>interface 接口 {</span></span>
<span class="line"><span>    属性：类型</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>function 函数&lt;Type extends 接口&gt; () {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 例子</span></span>
<span class="line"><span>interface ILength {</span></span>
<span class="line"><span>    length: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function fn&lt;T extends ILenght&gt;(param: T) {</span></span>
<span class="line"><span>    console.log(&#39;&#39;, param.length)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-2-多个泛型参数" tabindex="-1"><a class="header-anchor" href="#_4-4-2-多个泛型参数"><span>4.4.2 多个泛型参数</span></a></h3><p>日常开发的时候，如果有需要，可以添加多个类型变量</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>function funcA&lt;T, T2&gt;(param1: T, param2: T2) {</span></span>
<span class="line"><span>    console.log(&#39;参数 1&#39;, params1)    </span></span>
<span class="line"><span>    console.log(&#39;参数 2&#39;, params2)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>funcA&lt;string, number&gt;(&#39;小红&#39;, 998)</span></span>
<span class="line"><span>funcA&lt;string[], boolean[]&gt;([&#39;小明&#39;], [false])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-3-泛型接口" tabindex="-1"><a class="header-anchor" href="#_4-4-3-泛型接口"><span>4.4.3 泛型接口</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>interface IdFunc&lt;Type&gt; {</span></span>
<span class="line"><span>    id: (value: Type) =&gt; Type</span></span>
<span class="line"><span>    ids: () =&gt; Type[]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let obj: IdFunc&lt;number&gt; = {</span></span>
<span class="line"><span>    id(value) {return value},</span></span>
<span class="line"><span>    ids() {return [1, 3, 5]}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-4-泛型类" tabindex="-1"><a class="header-anchor" href="#_4-4-4-泛型类"><span>4.4.4 泛型类</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 定义</span></span>
<span class="line"><span>class Person &lt;T&gt; {</span></span>
<span class="line"><span>    id: T</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    constructor(id: T) {</span></span>
<span class="line"><span>        this.id = id</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    getId(): T {</span></span>
<span class="line"><span>        return this.id</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 使用</span></span>
<span class="line"><span>let p = new Person&lt;number&gt;(10)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-状态管理-state补充" tabindex="-1"><a class="header-anchor" href="#_4-5-状态管理-state补充"><span>4.5 状态管理 - @State补充</span></a></h2><p><mark><strong>注意：</strong></mark> 不是所有的状态变量在更改之后都会重新渲染。只有被有能被框架观察到的修改才会重新渲染UI</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 例子</span></span>
<span class="line"><span>@State message: string = &#39;Hello World&#39;</span></span>
<span class="line"><span>@State person: Person = {</span></span>
<span class="line"><span>    name: &#39;jack&#39;,</span></span>
<span class="line"><span>    dog: {</span></span>
<span class="line"><span>        name: &#39;柯基&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Button(&#39;修改title外层属性&#39;)</span></span>
<span class="line"><span> .onClick(() =&gt; {</span></span>
<span class="line"><span>     this.person.name = &#39;666&#39;</span></span>
<span class="line"><span> })</span></span>
<span class="line"><span>Button(&#39;修改title嵌套属性&#39;)</span></span>
<span class="line"><span> .onClick(() =&gt; { </span></span>
<span class="line"><span>     this.person.dog = {</span></span>
<span class="line"><span>         name = &#39;阿拉斯加&#39;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-6-数据传递" tabindex="-1"><a class="header-anchor" href="#_4-6-数据传递"><span>4.6 数据传递</span></a></h2><h3 id="_4-6-1-prop-父传子" tabindex="-1"><a class="header-anchor" href="#_4-6-1-prop-父传子"><span>4.6.1 @Prop - 父传子</span></a></h3><p><code>@Prop</code> 装饰的变量可以和父组件建立单向的同步关系</p><p><code>@Prop</code> 装饰的变量是可变的，但是变化不会同步回其父组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Entry</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>struct Index {</span></span>
<span class="line"><span>  @State info: string = &#39;你好&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  build () {</span></span>
<span class="line"><span>    Column() {</span></span>
<span class="line"><span>      Text(this.info)</span></span>
<span class="line"><span>      SonCom({</span></span>
<span class="line"><span>        info: this.info,</span></span>
<span class="line"><span>        changeInfo: (newInfo: string) =&gt; {</span></span>
<span class="line"><span>          this.info = newInfo</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>struct SonCom {</span></span>
<span class="line"><span>  @Prop info: string</span></span>
<span class="line"><span>  changeInfo = (newInfo: string) =&gt; {}</span></span>
<span class="line"><span>  build() {</span></span>
<span class="line"><span>    Button(&#39;info:&#39; + this.info)</span></span>
<span class="line"><span>      .onClick(() =&gt; {</span></span>
<span class="line"><span>        this.changeInfo(&#39;修改了&#39;)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-2-link双向同步" tabindex="-1"><a class="header-anchor" href="#_4-6-2-link双向同步"><span>4.6.2 @Link双向同步</span></a></h3><p>使用 <code>@Link</code> 可以实现父组件和子组件的双向<mark>同步</mark>：</p><p><strong>使用步骤：</strong></p><ol><li>将父组件的状态属性传递给子组件</li><li>子组件通过 <code>@Link</code> 修饰即可</li></ol><h3 id="_4-6-3-provide、-consume后代组件" tabindex="-1"><a class="header-anchor" href="#_4-6-3-provide、-consume后代组件"><span>4.6.3 @Provide、@Consume后代组件</span></a></h3><p>将数据传递给后代，和头的数据进行双向同步</p><p><strong>使用步骤：</strong></p><ol><li>将父组件的状态属性使用 <code>@Provide</code> 修饰</li><li>子组件通过 <code>@Consume</code> 修饰</li></ol><h3 id="_4-6-4-observed-objectlink-嵌套对象数组-属性变化" tabindex="-1"><a class="header-anchor" href="#_4-6-4-observed-objectlink-嵌套对象数组-属性变化"><span>4.6.4 @Observed &amp; @ObjectLink 嵌套对象数组 属性变化</span></a></h3><p><strong>说明：</strong> 装饰器仅能观察到 <mark>第一层</mark> 的变化。对于多层嵌套的情况，比如 <mark>对象数组</mark> 等。</p><p>他们的第二层的属性变化是无法观察到的。这就引出了 <code>@Observed &amp; @ObjectLink</code> 装饰器。</p><p><strong>作用：</strong> 用于在 <mark>涉及嵌套对象或数组</mark> 的场景中进行 <mark>双向数据同步</mark></p><p><strong>注意：</strong> <code>ObjectLink</code> 修饰符不能用在 <mark>Entry</mark>修饰的组件中</p><h1 id="_5-模块化语法" tabindex="-1"><a class="header-anchor" href="#_5-模块化语法"><span>5. 模块化语法</span></a></h1><p><strong>模块化基本的认知：</strong> 模块化就是把一个大文件拆分成若干的小的文件，在通过特点的语法，能够进行任意的组合。</p><p><code>ArtTS</code>中每个 <code>ets</code> 文件，都可以看成一个模块。</p><h2 id="_5-1-默认导入和导出" tabindex="-1"><a class="header-anchor" href="#_5-1-默认导入和导出"><span>5.1 默认导入和导出</span></a></h2><p>默认导出：指一个模块，只能默认导出一个 <mark>值</mark> 或 <mark>对象</mark>。使用时，可以 <mark>自定义</mark> 导入名称。</p><p>使用步骤：</p><ol><li>当前模块中 <mark>导出模块</mark></li><li>需要使用的地方 <mark>导入模块</mark></li></ol><p><code>export default 需要导出的内容</code></p><p><code>import xxx from &#39;模块路径&#39;</code></p><h2 id="_5-2-按需导入和导出" tabindex="-1"><a class="header-anchor" href="#_5-2-按需导入和导出"><span>5.2 按需导入和导出</span></a></h2><p>按需导出：指一个模块，可以按照需要，导出多个特性</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 逐个导出单个特性</span></span>
<span class="line"><span>export let num1 = 100, num2 = 200, ……, ……</span></span>
<span class="line"><span>export function FunctinName() {……}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export {name1, name2, ……,nameN}</span></span>
<span class="line"><span>// ----------------------------</span></span>
<span class="line"><span>// 导入</span></span>
<span class="line"><span>import { name1, name2, name3 as 别名 } from &#39;module-name&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-3-全部导入" tabindex="-1"><a class="header-anchor" href="#_5-3-全部导入"><span>5.3 全部导入</span></a></h2><p>将所有的按需导入，全部导入进来 ——&gt; 导出部分不需要调整，调整导入的语法即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 通过 Utils，即可获取 utils模块中导出的所有内容</span></span>
<span class="line"><span>import * as Utils from &#39;./utils&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-自定义组件" tabindex="-1"><a class="header-anchor" href="#_6-自定义组件"><span>6. 自定义组件</span></a></h1><h2 id="_6-1-自定义组件的基本使用" tabindex="-1"><a class="header-anchor" href="#_6-1-自定义组件的基本使用"><span>6.1 自定义组件的基本使用</span></a></h2><p><strong>概念：</strong> 由框架直接提供的称为 <mark>系统组件</mark>，由开发者定义的称为<mark>自定义组件</mark></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 结构</span></span>
<span class="line"><span>@component</span></span>
<span class="line"><span>strcut HelloComponent {</span></span>
<span class="line"><span>    // 状态变量</span></span>
<span class="line"><span>    @State message: string = &#39;&#39;</span></span>
<span class="line"><span>    build() {</span></span>
<span class="line"><span>        // ...描述UI</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-builerparams-传递-ui" tabindex="-1"><a class="header-anchor" href="#_6-2-builerparams-传递-ui"><span>6.2 BuilerParams 传递 UI</span></a></h2><p>利用 <code>BuilderParams</code> 构建函数，可以让自定义的组件 <mark>允许外部传递UI</mark></p><p>类似我们在 <code>vue</code> 中学到的 <code>slot</code> 插槽</p><h1 id="_7-路由" tabindex="-1"><a class="header-anchor" href="#_7-路由"><span>7. 路由</span></a></h1><p>页面路由指的是在应用程序中实现 不同页面之间的跳转，传输数据。</p><h2 id="_7-1-创建页面" tabindex="-1"><a class="header-anchor" href="#_7-1-创建页面"><span>7.1 创建页面</span></a></h2><ol><li>右键<code>pages</code> 文件夹，选择<code>new</code> ——&gt; <code>page</code> ——&gt; <code>Empty Page</code></li><li>右键<code>pages</code> 文件夹，选择<code>new</code> ——&gt; <code>page</code> ——&gt; <code>ArkTS file</code></li></ol><p>第二种方法我需要配置 <code>json</code> 文件，右键 <code>resources</code> 文件夹，选择 <code>base</code> ——&gt; <code>profile</code> ——&gt; <code>main_pages.json</code> ，</p><p>在里面添加，例如新建的 <code>ets</code> 文件叫 <code>Home</code> ，那么就在 <code>src</code> 数组中添加 <code>&quot;pages/Home&quot;</code></p><h2 id="_7-2-路由跳转" tabindex="-1"><a class="header-anchor" href="#_7-2-路由跳转"><span>7.2 路由跳转</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 导入</span></span>
<span class="line"><span>import router from &#39;@ohos.router&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1.调用方法 - 普通跳转（可以返回）</span></span>
<span class="line"><span>router.pushUrl({</span></span>
<span class="line"><span>    url: &#39;页面地址&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2.调用方法 - 替换跳转（无法返回）</span></span>
<span class="line"><span>router.replaceUrl({</span></span>
<span class="line"><span>    url: &#39;页面地址&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3.调用方法 - 返回（）</span></span>
<span class="line"><span>router.back()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-页面栈" tabindex="-1"><a class="header-anchor" href="#_7-3-页面栈"><span>7.3 页面栈</span></a></h2><p>页面栈是用来存储程序运行时页面的一种<mark>数据结构</mark>，遵循<mark>先进后出</mark>的原则</p><p>页面栈的最大容量为<mark>32</mark>个页面</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 获取页面栈长度</span></span>
<span class="line"><span>router.getLength()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//清空页面栈</span></span>
<span class="line"><span>router.clear()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-4-路由模式" tabindex="-1"><a class="header-anchor" href="#_7-4-路由模式"><span>7.4 路由模式</span></a></h2><p>路由提供了两种不同的跳转模式</p><ol><li><code>Standard:</code> 无论之前是否添加过，都往栈顶累加页面路由。（默认常用）</li><li><code>Single:</code> 先判断路由栈中是否有该路由页面，如果有则将已有的路由放到栈顶。（看情况使用）</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// 在第二个参数设置【路由模式】</span></span>
<span class="line"><span>router.pushUrl(options, mode)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_8-生命周期" tabindex="-1"><a class="header-anchor" href="#_8-生命周期"><span>8. 生命周期</span></a></h1><p><mark>组件</mark> 和 <mark>页面</mark> 在创建、显示、销毁的这一整个过程中，会自动执行一系列的 <mark>【生命周期钩子】</mark></p><p>其实也就是一系列的==【函数】== ，让开发者有机会在<mark>特定的阶段运行自己的代码</mark></p><p>我们可以通过 <code>@Entry</code> 来区分，如果代码块带有 <code>@Entry</code> 的，那么他就是页面，反之组件。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>// aboutToAppear: 创建组件实例化后执行，可以修改状态变量</span></span>
<span class="line"><span>// aboutToDisappear: 组件实例销毁前执行，不允许修改状态变量</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**下面这些仅@Entry修饰的页面组件生效</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>onPageShow: 页面每次显示触发（路由过程、应用进入前后台）</span></span>
<span class="line"><span>onPageHide: 页面每次显示触发（路由过程、应用进入前后台）</span></span>
<span class="line"><span>onBackPress: 点击返回触发（return true 阻止返回键默认返回效果）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_9-stage模型" tabindex="-1"><a class="header-anchor" href="#_9-stage模型"><span>9. Stage模型</span></a></h1><h2 id="_9-1-配置图标和标题" tabindex="-1"><a class="header-anchor" href="#_9-1-配置图标和标题"><span>9.1 配置图标和标题</span></a></h2><h2 id="_9-2-uiability组件" tabindex="-1"><a class="header-anchor" href="#_9-2-uiability组件"><span>9.2 UIAbility组件</span></a></h2><h2 id="_9-3-同模块ability拉起" tabindex="-1"><a class="header-anchor" href="#_9-3-同模块ability拉起"><span>9.3 同模块Ability拉起</span></a></h2><h2 id="_9-4-跨模块ability拉起" tabindex="-1"><a class="header-anchor" href="#_9-4-跨模块ability拉起"><span>9.4 跨模块Ability拉起</span></a></h2>`,182)]))}const r=n(l,[["render",p]]),t=JSON.parse('{"path":"/article/8y5ug9fd/","title":"鸿蒙教程进阶篇","lang":"zh-CN","frontmatter":{"title":"鸿蒙教程进阶篇","tags":["移动端","鸿蒙"],"createTime":"2025/03/20 11:17:25","permalink":"/article/8y5ug9fd/"},"headers":[],"readingTime":{"minutes":13.19,"words":3956},"git":{"updatedTime":1742564161000,"contributors":[{"name":"8848TI","username":"8848TI","email":"3022926092@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/8848TI?v=4","url":"https://github.com/8848TI"}]},"filePathRelative":"移动端/鸿蒙教程进阶篇.md","categoryList":[{"id":"c95e74","sort":10005,"name":"移动端"}]}');export{r as comp,t as data};
