import{_ as s,c as n,o as a,b as l}from"./app.e27d6c9d.js";const d=JSON.parse('{"title":"Unreal Slate UI","description":"","frontmatter":{},"headers":[{"level":2,"title":"Slate \u57FA\u7C7B | Slate Base Class","slug":"slate-\u57FA\u7C7B-slate-base-class"},{"level":2,"title":"Slate \u5E03\u5C40 | Slate Layout","slug":"slate-\u5E03\u5C40-slate-layout"},{"level":2,"title":"\u58F0\u660E Slate Widget","slug":"\u58F0\u660E-slate-widget"}],"relativePath":"unreal/slate-ui.md","lastUpdated":1658990715000}'),p={name:"unreal/slate-ui.md"},o=l(`<h1 id="unreal-slate-ui" tabindex="-1">Unreal Slate UI <a class="header-anchor" href="#unreal-slate-ui" aria-hidden="true">#</a></h1><h2 id="slate-\u57FA\u7C7B-slate-base-class" tabindex="-1">Slate \u57FA\u7C7B | Slate Base Class <a class="header-anchor" href="#slate-\u57FA\u7C7B-slate-base-class" aria-hidden="true">#</a></h2><p><code>SLeafWidget</code> : \u65E0 <code>Slot()</code> \u6210\u5458\uFF0C\u4E0D\u5305\u542B\u5B50 <code>Widget</code></p><p><code>SCompoundWidget</code> : \u6709 <code>Slot()</code> \u6210\u5458\uFF0C\u53EF\u5305\u542B\u4E00\u4E2A\u5B50 <code>Widget</code></p><p><code>SPanel</code> : \u901A\u8FC7\u5B50\u7C7B\u5B9E\u73B0 <code>Slot()</code> \u7ED3\u6784\uFF0C\u53EF\u5305\u542B\u591A\u4E2A\u5B50 <code>Widget</code></p><h2 id="slate-\u5E03\u5C40-slate-layout" tabindex="-1">Slate \u5E03\u5C40 | Slate Layout <a class="header-anchor" href="#slate-\u5E03\u5C40-slate-layout" aria-hidden="true">#</a></h2><p>\u6C34\u5E73\u548C\u5782\u76F4\u5E03\u5C40 <code>SScrollBox</code> <code>SVerticalBox</code> <code>SHorizontalBox</code></p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">SNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SScrollBox</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SScrollBox</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Slot</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">SNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SVerticalBox</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SVerticalBox</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Slot</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">SNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SHorizontalBox</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SHorizontalBox</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Slot</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u6805\u683C\u5E03\u5C40 <code>SUniformGridPanel</code></p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">SNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SUniformGridPanel</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SUniformGridPanel</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Slot</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SUniformGridPanel</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Slot</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u5C42\u53E0\u5E03\u5C40 <code>SOverlay</code></p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">SNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SOverlay</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SOverlay</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Slot</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u56FA\u5B9A\u5C3A\u5BF8 <code>SBox</code></p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">SNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SBox</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">HeightOverride</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">WidthOverride</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>\u6D41\u5E03\u5C40 <code>SWrapBox</code></p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">SNew</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SWrapBox</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#FFCB6B;">SWrapBox</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Slot</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="\u58F0\u660E-slate-widget" tabindex="-1">\u58F0\u660E Slate Widget <a class="header-anchor" href="#\u58F0\u660E-slate-widget" aria-hidden="true">#</a></h2><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// SMyCompoundWidget.h</span></span>
<span class="line"><span style="color:#82AAFF;">DECLARE_DELEGATE_OneParam</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">FMyEvent</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> FString</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">EXSLATE_API</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">SMyCompoundWidget</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">public</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">SCompoundWidget</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">SLATE_BEGIN_ARGS</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">SMyCompoundWidget</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_AttributeOne</span><span style="color:#89DDFF;">(false)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">_AttributeTwo</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">SLATE_NAMED_SLOT</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">FArguments</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">FSimpleSlot</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">SLATE_ATTRIBUTE</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">bool</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> AttributeOne </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">SLATE_ATTRIBUTE</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> AttributeTwo </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">SLATE_EVENT</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> FOnClicked</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> OnClicked </span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">SLATE_EVENT</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;"> FMyEvent</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> MyEvent </span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">SLATE_END_ARGS</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">SMyCompoundWidget</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">void</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#82AAFF;">~SMyCompoundWidget</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Construct</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">FArguments</span><span style="color:#C792EA;">&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">InArgs</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#F07178;">}</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// SMyCompoundWidget.cpp</span></span>
<span class="line"><span style="color:#FFCB6B;">SMyCompoundWidget</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">SMyCompoundWidget</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#FFCB6B;">SMyCompoundWidget</span><span style="color:#89DDFF;">::~</span><span style="color:#82AAFF;">SMyCompoundWidget</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SMyCompoundWidget</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Construct</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FArguments</span><span style="color:#C792EA;">&amp;</span><span style="color:#A6ACCD;"> InArgs</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ChildSlot</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,19),e=[o];function c(t,F,r,y,D,i){return a(),n("div",null,e)}var C=s(p,[["render",c]]);export{d as __pageData,C as default};
