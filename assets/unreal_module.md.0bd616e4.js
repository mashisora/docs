import{_ as s,c as a,o as n,b as l}from"./app.e27d6c9d.js";const D=JSON.parse('{"title":"Unreal Module","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6A21\u5757\u63A5\u53E3 | Module Interface","slug":"\u6A21\u5757\u63A5\u53E3-module-interface"}],"relativePath":"unreal/module.md","lastUpdated":1658990715000}'),o={name:"unreal/module.md"},e=l(`<h1 id="unreal-module" tabindex="-1">Unreal Module <a class="header-anchor" href="#unreal-module" aria-hidden="true">#</a></h1><p><code>IMPLEMENT_MODULE(&lt;My Module Class&gt;, &lt;Module name string&gt;)</code> \u58F0\u660E Unreal Module</p><h2 id="\u6A21\u5757\u63A5\u53E3-module-interface" tabindex="-1">\u6A21\u5757\u63A5\u53E3 | Module Interface <a class="header-anchor" href="#\u6A21\u5757\u63A5\u53E3-module-interface" aria-hidden="true">#</a></h2><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">IModuleInterface</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">virtual</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">~IModuleInterface</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	// Called after the module has been loaded and the module object has been created</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">virtual</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">StartupModule</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	// Called before the module has been unloaded</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">virtual</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">PreUnloadCallback</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	// Called after the module has been reloaded</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">virtual</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">PostLoadCallback</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	// Called before the module is unloaded, right before the module object is destroyed.</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">virtual</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ShutdownModule</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	// Whether the module supports shutdown separate from the rest of the engine.</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">virtual</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SupportsDynamicReloading</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">true;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	// Whether the module supports shutdown on application exit</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">virtual</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">SupportsAutomaticShutdown</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">true;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	// True for &quot;gameplay modules&quot;, or false for engine code modules, plugins, etc.</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#C792EA;">virtual</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">IsGameModule</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">false;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,4),p=[e];function t(r,c,y,F,i,d){return n(),a("div",null,p)}var h=s(o,[["render",t]]);export{D as __pageData,h as default};
