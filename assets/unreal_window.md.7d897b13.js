import{_ as a,c as s,o as n,b as l}from"./app.e27d6c9d.js";const b=JSON.parse('{"title":"Unreal Tab (Window)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6CE8\u518C\u7A97\u53E3 | Register Tab","slug":"\u6CE8\u518C\u7A97\u53E3-register-tab"},{"level":2,"title":"\u7A97\u53E3\u5C5E\u6027 | Tab Property","slug":"\u7A97\u53E3\u5C5E\u6027-tab-property"},{"level":2,"title":"\u5524\u8D77\u7A97\u53E3 | Invoke Tab","slug":"\u5524\u8D77\u7A97\u53E3-invoke-tab"},{"level":2,"title":"\u6CE8\u9500\u7A97\u53E3 | Unregister Tab","slug":"\u6CE8\u9500\u7A97\u53E3-unregister-tab"}],"relativePath":"unreal/window.md","lastUpdated":1658990715000}'),p={name:"unreal/window.md"},e=l(`<h1 id="unreal-tab-window" tabindex="-1">Unreal Tab (Window) <a class="header-anchor" href="#unreal-tab-window" aria-hidden="true">#</a></h1><blockquote><p>\u5728 Unreal Editor \u7684 UI \u6846\u67B6\u4E0B\uFF0CTab \u7684\u8BED\u4E49\u8FD1\u4F3C\u7B49\u540C\u4E8E\u4E00\u822C\u684C\u9762\u5E94\u7528\u4E2D\u7684 Window\uFF0C\u4E0E\u6D4F\u89C8\u5668\u7684\u9009\u9879\u5361\u6709\u7740\u7C7B\u4F3C\u7684\u884C\u4E3A\u3002\u672C\u6587\u4E3A\u4E86\u9610\u8FF0\u65B9\u4FBF\uFF0C\u9ED8\u8BA4\u4F7F\u7528 \u201C\u7A97\u53E3\u201D \u4E00\u8BCD\u4F5C\u4E3A Tab \u7684\u7FFB\u8BD1\uFF0C\u5728\u9700\u8981\u533A\u5206\u4E8C\u8005\u65F6\u4F7F\u7528\u82F1\u8BED\u3002\u8BF7\u4E0D\u8981\u5C06\u6B64 \u201C\u7A97\u53E3\u201D \u4E0E\u4E00\u822C\u5E94\u7528\u4E2D\u7684\u7A97\u53E3\u6DF7\u6DC6\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0CUnreal Editor \u4E2D\u7684\u6240\u6709\u7684\u7A97\u53E3\uFF08Window\uFF09\u90FD\u662F\u4EE5 Tab \u6216 Tab \u7EC4\u5408\u7684\u5F62\u5F0F\u5448\u73B0\u7684\u3002</p></blockquote><p>\u5728 Unreal Editor \u4E2D\uFF0C\u5355\u4F8B\u5BF9\u8C61 <code>FGlobalTabmanager</code> \u6D3E\u751F\u81EA <code>FTabManager</code> \uFF0C\u7BA1\u7406\u7740\u6240\u6709\u7F16\u8F91\u5668\u4E2D\u7684\u5168\u5C40 Tab\uFF0C\u8FD9\u6837\u505A\u7684\u597D\u5904\u6709\uFF1A</p><ul><li>\u4EFB\u4F55\u4E00\u4E2A Tab \u53EF\u5B9E\u73B0\u5728\u7A97\u53E3\u4E2D\u4EFB\u610F\u4F4D\u7F6E\u7684\u505C\u9760\uFF0C\u4FBF\u4E8E\u81EA\u5B9A\u4E49\u5E03\u5C40</li><li>\u826F\u597D\u7684\u591A Tab \u7A97\u53E3\u652F\u6301</li><li>Tab \u884C\u4E3A\u7684\u4E00\u81F4\u5316\uFF0C\u4FBF\u4E8E\u7BA1\u7406\u548C\u64CD\u4F5C</li></ul><h2 id="\u6CE8\u518C\u7A97\u53E3-register-tab" tabindex="-1">\u6CE8\u518C\u7A97\u53E3 | Register Tab <a class="header-anchor" href="#\u6CE8\u518C\u7A97\u53E3-register-tab" aria-hidden="true">#</a></h2><p><code>FTabManager</code> \u62E5\u6709\u4E24\u4E2A\u8BB0\u5F55 Tab \u4FE1\u606F\u7684\u6210\u5458\uFF1A</p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">FTabSpawner TabSpawner</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">TSharedRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">FTabSpawner</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> NomadTabSpawner</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u76F8\u5E94\u7684\uFF0C\u4E5F\u62E5\u6709\u4E24\u4E2A\u5C06 Tab \u6CE8\u518C\u5230 <code>FTabManager</code> \u7684\u65B9\u6CD5\uFF1A</p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">FGlobalTabmanager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">RegisterTabSpawner</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    TabName</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">           // Name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">FOnSpawnTab</span><span style="color:#89DDFF;">(),</span><span style="color:#676E95;font-style:italic;">     // Delegate: (const FSpawnTabArgs&amp;) -&gt; TSharedRef&lt;SDockTab&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">FCanSpawnTab</span><span style="color:#89DDFF;">()</span><span style="color:#676E95;font-style:italic;">     // Delegate: (const FSpawnTabArgs&amp;) -&gt; bool</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">FGlobalTabmanager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">RegisterNomadTabSpawner</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    TabName</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">           // Name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">FOnSpawnTab</span><span style="color:#89DDFF;">(),</span><span style="color:#676E95;font-style:italic;">     // Delegate: (const FSpawnTabArgs&amp;) -&gt; TSharedRef&lt;SDockTab&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">FCanSpawnTab</span><span style="color:#89DDFF;">()</span><span style="color:#676E95;font-style:italic;">     // Delegate: (const FSpawnTabArgs&amp;) -&gt; bool</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>\u4E8C\u8005\u7684\u6CE8\u518C\u884C\u4E3A\u57FA\u672C\u76F8\u540C\uFF0C\u4E3B\u8981\u5DEE\u5F02\u4F53\u73B0\u5728\uFF1A</p><ul><li><code>TabSpawner</code> \u4F7F\u7528\u539F\u751F\u6307\u9488\uFF0C\u91CD\u590D\u6CE8\u518C\u540C\u4E00 TabId \u65F6\u4F1A\u629B\u51FA\u5F02\u5E38</li><li><code>NomadTabSpawner</code> \u4F7F\u7528\u667A\u80FD\u6307\u9488\uFF0C\u91CD\u590D\u6CE8\u518C\u540C\u4E00 TabId \u65F6\u4F1A\u6CE8\u9500\u65E7\u5B9E\u4F8B</li></ul><p>\u66F4\u591A\u7EC6\u8282\u53EF\u53C2\u8003\uFF1A<code>Runtime\\Slate\\Private\\Framework\\Docking\\TabManager.cpp</code></p><p>\u5BF9\u4E8E\u4E00\u822C\u63D2\u4EF6\u5F00\u53D1\uFF0C\u6211\u4EEC\u5F80\u5F80\u9700\u8981\u6784\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684\u7A97\u53E3\u3002\u6B64\u65F6\u53EF\u4F18\u5148\u8003\u8651\u5C06\u63D2\u4EF6\u7684 Tab \u6CE8\u518C\u5230 <code>FGlobalTabmanager</code> \u7684 <code>NomadTabSpawner</code> \u4E2D\u3002\u5B9E\u9645\u4E0A\uFF0CUnreal \u63D0\u4F9B\u7684\u5B98\u65B9\u63D2\u4EF6\u5DE5\u7A0B\u6A21\u677F\u4E5F\u662F\u8FD9\u6837\u505A\u7684\u3002</p><h2 id="\u7A97\u53E3\u5C5E\u6027-tab-property" tabindex="-1">\u7A97\u53E3\u5C5E\u6027 | Tab Property <a class="header-anchor" href="#\u7A97\u53E3\u5C5E\u6027-tab-property" aria-hidden="true">#</a></h2><p>\u5728\u5B8C\u6210\u7A97\u53E3\u7684\u6CE8\u518C\u540E\uFF0C\u6CE8\u518C\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>FTabSpawnerEntry&amp;</code> \uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6B64 Entry \u8BBE\u7F6E\u7A97\u53E3\u7684\u5C5E\u6027\u3002\u4F8B\u5982\uFF1A</p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">FTabSpawnerEntry</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Entry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FGlobalTabmanager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">RegisterNomadTabSpawner</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SetDisplayName</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">LOCTEXT</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">TabTitle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">WindowPlugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">Entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SetMenuType</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ETabSpawnerMenuType</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">Hidden</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>\u6240\u6709 SetProperty \u51FD\u6570\u5747\u8FD4\u56DE\u5F53\u524D <code>FTabSpawnerEntry&amp;</code> \uFF0C\u6240\u4EE5\u4E5F\u53EF\u4F7F\u7528\u94FE\u5F0F\u64CD\u4F5C\uFF1A</p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">FGlobalTabmanager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">RegisterNomadTabSpawner</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span><span style="color:#82AAFF;">SetDisplayName</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">LOCTEXT</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">TabTitle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">WindowPlugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    .</span><span style="color:#82AAFF;">SetMenuType</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ETabSpawnerMenuType</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">Hidden</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>\u5168\u90E8\u53EF\u914D\u7F6E\u5C5E\u6027\u53C2\u8003\uFF1A<code>Runtime\\Slate\\Private\\Framework\\Docking\\TabManager.h</code></p><h2 id="\u5524\u8D77\u7A97\u53E3-invoke-tab" tabindex="-1">\u5524\u8D77\u7A97\u53E3 | Invoke Tab <a class="header-anchor" href="#\u5524\u8D77\u7A97\u53E3-invoke-tab" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u6CD5\u6765\u5524\u8D77\u4E00\u4E2A\u5DF2\u5728 <code>FGlobalTabmanager</code> \u4E2D\u6CE8\u518C\u7684\u5168\u5C40 Tab \uFF1A</p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">FGlobalTabmanager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">TryInvokeTab</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">FName</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">OutputLog</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7 <code>FTabManager::TryInvokeTab()</code> \u65B9\u6CD5\u5524\u8D77\u4E00\u4E2A\u7A97\u53E3\u7684\u89C4\u5219\u5982\u4E0B\uFF1A</p><ul><li>\u82E5 Tab \u5DF2\u5B9E\u4F8B\u5316\uFF1A <ul><li>Window \u5904\u4E8E\u6253\u5F00\u72B6\u6001\u65F6\uFF1A\u805A\u7126 Window</li><li>Window \u5904\u4E8E\u5173\u95ED\u72B6\u6001\u65F6\uFF1A\u805A\u7126 Window</li></ul></li><li>\u82E5 Tab \u672A\u5B9E\u4F8B\u5316\uFF1A <ul><li>\u6709\u5DF2\u5B9E\u4F8B\u5316\u7684\u540C\u7C7B Tab \u65F6\uFF1A\u5728\u540C\u7C7B Tab \u7684 Window \u4E2D\u6253\u5F00</li><li>\u65E0\u5DF2\u5B9E\u4F8B\u5316\u7684\u540C\u7C7B Tab \u65F6\uFF1A\u65B0\u5EFA Window \u5E76\u6253\u5F00</li></ul></li></ul><h2 id="\u6CE8\u9500\u7A97\u53E3-unregister-tab" tabindex="-1">\u6CE8\u9500\u7A97\u53E3 | Unregister Tab <a class="header-anchor" href="#\u6CE8\u9500\u7A97\u53E3-unregister-tab" aria-hidden="true">#</a></h2><p>\u6CE8\u9500\u7A97\u53E3\u65F6\uFF0C\u4F7F\u7528\u4E0E\u6CE8\u518C\u76F8\u5E94\u7684 API \u5373\u53EF\uFF1A</p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">FGlobalTabmanager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">UnregisterTabSpawner</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">TabName</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">FGlobalTabmanager</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">UnregisterNomadTabSpawner</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">TabName</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,27),o=[e];function t(r,c,F,D,y,i){return n(),s("div",null,o)}var A=a(p,[["render",t]]);export{b as __pageData,A as default};
