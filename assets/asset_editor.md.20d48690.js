import{_ as s,c as a,o as n,a as o}from"./app.43496e99.js";const A=JSON.parse('{"title":"资产编辑器","description":"","frontmatter":{},"headers":[],"relativePath":"asset/editor.md","lastUpdated":1660026515000}'),p={name:"asset/editor.md"},e=o(`<h1 id="资产编辑器" tabindex="-1">资产编辑器 <a class="header-anchor" href="#资产编辑器" aria-hidden="true">#</a></h1><p>编写中...</p><p>前文提到 <code>Actions</code> 定义了该资产类型适用何种资产编辑器。实际上</p><p>在 <code>FAssetTypeActions_Base</code> 中，实现了为资产创建默认的资产编辑器</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FAssetTypeActions_Custom</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">OpenAssetEditor</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TArray</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">UObject</span><span style="color:#89DDFF;">*&gt;</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">InObjects</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">TSharedPtr</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IToolkitHost</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">EditWithinLevelEditor</span></span>
<span class="line"><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">FSimpleAssetEditor</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">CreateEditor</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">EToolkitMode</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">Standalone</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> EditWithinLevelEditor</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> InObjects</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>当需要自定义资产编辑器时，需要重写该方法。</p><p>可以继承 <code>FAssetEditorToolkit</code> 类设计自定义资产编辑器。</p>`,7),t=[e];function l(c,r,i,F,y,D){return n(),a("div",null,t)}const C=s(p,[["render",l]]);export{A as __pageData,C as default};