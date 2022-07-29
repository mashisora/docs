import{_ as s,c as n,o as a,a as l}from"./app.1f85bf8a.js";const d=JSON.parse('{"title":"Unreal Editor Menus","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BA4\u8BC6\u83DC\u5355 | Menus","slug":"\u8BA4\u8BC6\u83DC\u5355-menus"},{"level":2,"title":"\u5982\u4F55\u62D3\u5C55\u83DC\u5355 | Extend","slug":"\u5982\u4F55\u62D3\u5C55\u83DC\u5355-extend"},{"level":2,"title":"\u6784\u9020\u63A7\u4EF6 | Widget","slug":"\u6784\u9020\u63A7\u4EF6-widget"},{"level":2,"title":"\u62D3\u5C55\u4E3B\u83DC\u5355\u680F | Main Menu","slug":"\u62D3\u5C55\u4E3B\u83DC\u5355\u680F-main-menu"},{"level":3,"title":"\u62D3\u5C55\u5185\u7F6E\u83DC\u5355","slug":"\u62D3\u5C55\u5185\u7F6E\u83DC\u5355"},{"level":3,"title":"\u6DFB\u52A0\u83DC\u5355","slug":"\u6DFB\u52A0\u83DC\u5355"},{"level":2,"title":"\u62D3\u5C55\u5DE5\u5177\u680F | Toolbar Menu","slug":"\u62D3\u5C55\u5DE5\u5177\u680F-toolbar-menu"},{"level":3,"title":"\u6DFB\u52A0\u6309\u94AE","slug":"\u6DFB\u52A0\u6309\u94AE"},{"level":3,"title":"\u6DFB\u52A0\u83DC\u5355\u6309\u94AE","slug":"\u6DFB\u52A0\u83DC\u5355\u6309\u94AE"},{"level":2,"title":"\u62D3\u5C55\u53F3\u952E\u83DC\u5355 | Context Menu","slug":"\u62D3\u5C55\u53F3\u952E\u83DC\u5355-context-menu"},{"level":2,"title":"\u62D3\u5C55\u5176\u4ED6\u83DC\u5355 | Other Menus","slug":"\u62D3\u5C55\u5176\u4ED6\u83DC\u5355-other-menus"}],"relativePath":"unreal/extend/menu.md","lastUpdated":1659094557000}'),o={name:"unreal/extend/menu.md"},p=l(`<h1 id="unreal-editor-menus" tabindex="-1">Unreal Editor Menus <a class="header-anchor" href="#unreal-editor-menus" aria-hidden="true">#</a></h1><h2 id="\u8BA4\u8BC6\u83DC\u5355-menus" tabindex="-1">\u8BA4\u8BC6\u83DC\u5355 | Menus <a class="header-anchor" href="#\u8BA4\u8BC6\u83DC\u5355-menus" aria-hidden="true">#</a></h2><p>Unreal Editor \u7684\u83DC\u5355\u7ED3\u6784\u4E3A\uFF1A</p><p><code>UToolMenus -&gt; UToolMenu -&gt; FToolMenuSection -&gt; FToolMenuEntry</code></p><p>\u5176\u4E2D <code>UToolMenus</code> \u4E3A\u4E00\u4E2A\u5355\u4F8B\u5168\u5C40\u5BF9\u8C61\uFF0C\u7EF4\u62A4 Unreal Editor \u4E2D\u7684\u6240\u6709\u5168\u5C40\u83DC\u5355\u3002\u53EF\u4EE5\u901A\u8FC7\u6B64\u5BF9\u8C61\u5B9E\u73B0\u5168\u5C40\u83DC\u5355\u7684\u6CE8\u518C\u3001\u62D3\u5C55\u3001\u83B7\u53D6\u7B49\u64CD\u4F5C\u3002</p><p>Unreal \u8FD8\u63D0\u4F9B\u4E86 <code>FMenuBuilder</code> <code>FExtender</code> \u7B49\u53EF\u7528\u6765\u62D3\u5C55\u83DC\u5355\u7684 API\uFF0C\u76F8\u8F83\u4E4B\u4E0B\uFF0C<code>UToolMenus</code> \u6709\u5982\u4E0B\u7279\u70B9\uFF1A</p><ul><li>\u53EF\u4EAB\u53D7 <code>UObject</code> \u5E26\u6765\u7684\u8D44\u6E90\u7BA1\u7406\u4FBF\u5229\u6027</li><li>\u53EF\u501F\u52A9 <code>.</code> \u64CD\u4F5C\u7B26\uFF0C\u7528\u5F62\u5982 <code>LevelEditor.MainMenu</code> \u7684\u8868\u8FBE\u5F0F\u5B9A\u4F4D\u4EFB\u4F55\u4E00\u4E2A\u5168\u5C40\u83DC\u5355\u5BF9\u8C61</li><li>\u5BF9\u4E0D\u540C\u83DC\u5355\u63A7\u4EF6\u63D0\u4F9B\u4E86\u8F83\u4E3A\u7EDF\u4E00\u7684 API \u8BBE\u8BA1</li></ul><p>\u8003\u8651\u5230\u4EE3\u7801\u7684\u7B80\u6D01\u6027\u3001\u4E00\u81F4\u6027\u548C\u53EF\u7EF4\u62A4\u6027\uFF0C\u672C\u6587\u4F18\u5148\u4F7F\u7528 <code>UToolMenu</code> \u76F8\u5173 API \u3002</p><h2 id="\u5982\u4F55\u62D3\u5C55\u83DC\u5355-extend" tabindex="-1">\u5982\u4F55\u62D3\u5C55\u83DC\u5355 | Extend <a class="header-anchor" href="#\u5982\u4F55\u62D3\u5C55\u83DC\u5355-extend" aria-hidden="true">#</a></h2><p><code>UToolMenus</code> \u662F\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\uFF0CUnreal Editor \u7684\u6240\u6709\u5185\u7F6E\u83DC\u5355\u5747\u7531\u5176\u7BA1\u7406\uFF0C\u6211\u4EEC\u5728\u63D2\u4EF6\u4E2D\u4F7F\u7528 <code>UToolMenus</code> \u6CE8\u518C\u81EA\u5B9A\u4E49\u83DC\u5355\u65F6\uFF0C\u9700\u8981\u786E\u4FDD <code>UToolMenus</code> \u53CA\u5176\u76F8\u5173\u7CFB\u7EDF\u5DF2\u5C31\u7EEA\u3002\u53EF\u4EE5\u5C06\u62D3\u5C55\u83DC\u5355\u7684\u51FD\u6570\u4F20\u5165 <code>UToolMenus::RegisterStartupCallback()</code> \uFF0C\u6765\u786E\u4FDD\u81EA\u5B9A\u4E49\u83DC\u5355\u6CE8\u518C\u65F6 <code>UToolMenus</code> \u7CFB\u7EDF\u5DF2\u51C6\u5907\u5C31\u7EEA</p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Delays menu registration until safe and ready</span></span>
<span class="line"><span style="color:#FFCB6B;">UToolMenus</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">RegisterStartupCallback</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">FSimpleMulticastDelegate</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">FDelegate</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">CreateLambda</span><span style="color:#89DDFF;">([&amp;]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">FToolMenuOwnerScoped</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">OwnerScoped</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">this</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        // Register Custom Menus Here</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        // ...</span></span>
<span class="line"><span style="color:#89DDFF;">}));</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6784\u9020\u63A7\u4EF6-widget" tabindex="-1">\u6784\u9020\u63A7\u4EF6 | Widget <a class="header-anchor" href="#\u6784\u9020\u63A7\u4EF6-widget" aria-hidden="true">#</a></h2><p>\u5728\u4E00\u4E9B\u4F7F\u7528\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u83B7\u53D6\u83DC\u5355\u5BF9\u8C61\u5BF9\u5E94\u7684 <code>SWidget</code> \uFF0C\u4F8B\u5982\uFF1A</p><ul><li>\u5C06\u83DC\u5355\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\u4E00\u4E9B\u63A7\u4EF6\u7684\u6784\u9020\u51FD\u6570</li><li>\u4F7F\u7528\u83DC\u5355\u4F5C\u4E3A\u63A7\u4EF6\u8FDB\u884C UI \u8BBE\u8BA1</li></ul><p>\u672C\u6587\u63D0\u4F9B\u4E24\u79CD\u65B9\u6CD5\u5B9E\u73B0\u83B7\u53D6\u4E00\u4E2A\u83DC\u5355\u5BF9\u5E94\u7684 <code>SWidget</code></p><ol><li><p>\u5982\u679C\u83DC\u5355\u5DF2\u7ECF\u5728 <code>UToolMenus</code> \u4E2D\u5B8C\u6210\u6CE8\u518C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u4F7F\u7528 <code>UToolMenus</code> \u63D0\u4F9B\u7684\u65B9\u6CD5\u76F4\u63A5\u83B7\u53D6</p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">TSharedRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">SWidget</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> MenuWidget </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UToolMenus</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">GenerateWidget</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Menu</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5982\u83DC\u5355\u672A\u6CE8\u518C\u5230 <code>UToolMenus</code> \uFF0C\u4E5F\u4E0D\u60F3\u5C06\u5176\u6CE8\u518C\u4E3A\u5168\u5C40\u83DC\u5355\uFF0C\u53EF\u4F7F\u7528 <code>FMenuBuilder</code> \u6784\u5EFA\u672C\u5730\u83DC\u5355\uFF0C\u7136\u540E\u83B7\u53D6\u5176 <code>SWidget</code> \u5BF9\u8C61\u4F9B\u5176\u4ED6\u63A7\u4EF6\u4F7F\u7528</p><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">FMenuBuilder</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MenuBuilder</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PluginCommands</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">MenuBuilder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddMenuEntry</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">FMyCommands</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">PluginAction</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">TSharedRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">SWidget</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> MenuWidget </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> MenuBuilder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MakeWidget</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="\u62D3\u5C55\u4E3B\u83DC\u5355\u680F-main-menu" tabindex="-1">\u62D3\u5C55\u4E3B\u83DC\u5355\u680F | Main Menu <a class="header-anchor" href="#\u62D3\u5C55\u4E3B\u83DC\u5355\u680F-main-menu" aria-hidden="true">#</a></h2><h3 id="\u62D3\u5C55\u5185\u7F6E\u83DC\u5355" tabindex="-1">\u62D3\u5C55\u5185\u7F6E\u83DC\u5355 <a class="header-anchor" href="#\u62D3\u5C55\u5185\u7F6E\u83DC\u5355" aria-hidden="true">#</a></h3><p>\u62D3\u5C55 Unreal Editor \u9876\u90E8\u83DC\u5355\u680F\u7684\u5185\u7F6E\u83DC\u5355\uFF0C\u4EE5 Window \u83DC\u5355\u4E3A\u4F8B</p><ul><li>\u62D3\u5C55\u5185\u7F6E\u83DC\u5355 <code>LevelEditor.MainMenu.Window</code></li></ul><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">UToolMenu</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Menu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UToolMenus</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">ExtendMenu</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LevelEditor.MainMenu.Window</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuSection</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Section </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Menu</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">FindOrAddSection</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">WindowLayout</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuEntry</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Entry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Section</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddEntry</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">FToolMenuEntry</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">InitMenuEntry</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">FMyCommands</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">PluginAction</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SetCommandList</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PluginCommands</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6DFB\u52A0\u83DC\u5355" tabindex="-1">\u6DFB\u52A0\u83DC\u5355 <a class="header-anchor" href="#\u6DFB\u52A0\u83DC\u5355" aria-hidden="true">#</a></h3><p>\u62D3\u5C55 Unreal Editor \u4E3B\u754C\u9762\u9876\u90E8\u7684\u4E3B\u83DC\u5355\u680F\uFF0C\u53EF\u4EE5\u6307\u5B9A\u63D2\u5165\u4F4D\u7F6E\u3002</p><ul><li>\u62D3\u5C55 <code>LevelEditor.MainMenu</code> \u6DFB\u52A0\u83DC\u5355\u680F\u6309\u94AE</li></ul><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">UToolMenu</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Menu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UToolMenus</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">ExtendMenu</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LevelEditor.MainMenu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuSection</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Section </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Menu</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">FindOrAddSection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">NAME_None</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuEntry</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Entry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Section</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddSubMenu</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">                                            // Name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">LOCTEXT</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PluginName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#676E95;font-style:italic;">                     // Display Name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">LOCTEXT</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PluginDescription</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Plugin Description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span><span style="color:#676E95;font-style:italic;">  // Descriptions</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">FNewToolMenuChoice</span><span style="color:#89DDFF;">()</span><span style="color:#676E95;font-style:italic;">                                 // Contents: default</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Entry</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">InsertPosition </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FToolMenuInsert</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Help</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EToolMenuInsertType</span><span style="color:#89DDFF;">::</span><span style="color:#A6ACCD;">Before</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><ul><li>\u62D3\u5C55 <code>LevelEditor.MainMenu.Plugin</code> \u521B\u5EFA\u81EA\u5B9A\u4E49\u83DC\u5355</li></ul><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">UToolMenu</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Menu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UToolMenus</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">ExtendMenu</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LevelEditor.MainMenu.Plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuSection</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Section </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Menu</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">FindOrAddSection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">NAME_None</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Section</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddMenuEntryWithCommandList</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">FMyCommands</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">PluginAction</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">     // Command</span></span>
<span class="line"><span style="color:#A6ACCD;">    PluginCommands</span><span style="color:#676E95;font-style:italic;">                       // CommandList</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="\u62D3\u5C55\u5DE5\u5177\u680F-toolbar-menu" tabindex="-1">\u62D3\u5C55\u5DE5\u5177\u680F | Toolbar Menu <a class="header-anchor" href="#\u62D3\u5C55\u5DE5\u5177\u680F-toolbar-menu" aria-hidden="true">#</a></h2><p>\u62D3\u5C55 Unreal Editor \u4E3B\u754C\u9762\u7684\u5DE5\u5177\u680F\u3002\u5728 Unreal Editor \u7684\u5DE5\u5177\u680F\u4E2D\uFF0C\u4F7F\u7528 <code>ToolBarButton</code> \u5B9E\u73B0\u6309\u94AE\uFF0C\u4F7F\u7528 <code>ComboButton</code> \u5B9E\u73B0\u5E26\u6709\u83DC\u5355\u7684\u6309\u94AE</p><h3 id="\u6DFB\u52A0\u6309\u94AE" tabindex="-1">\u6DFB\u52A0\u6309\u94AE <a class="header-anchor" href="#\u6DFB\u52A0\u6309\u94AE" aria-hidden="true">#</a></h3><ul><li>\u62D3\u5C55 <code>LevelEditor.LevelEditorToolBar.PlayToolBar</code> \u6DFB\u52A0\u5DE5\u5177\u680F\u6309\u94AE</li></ul><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">UToolMenu</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Menu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UToolMenus</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">ExtendMenu</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LevelEditor.LevelEditorToolBar.PlayToolBar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuSection</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Section </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ToolbarMenu</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">FindOrAddSection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">NAME_None</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuEntry</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Entry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Section</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddEntry</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">FToolMenuEntry</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">InitToolBarButton</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">FMyCommands</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">PluginAction</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SetCommandList</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PluginCommands</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6DFB\u52A0\u83DC\u5355\u6309\u94AE" tabindex="-1">\u6DFB\u52A0\u83DC\u5355\u6309\u94AE <a class="header-anchor" href="#\u6DFB\u52A0\u83DC\u5355\u6309\u94AE" aria-hidden="true">#</a></h3><ul><li>\u62D3\u5C55 <code>LevelEditor.LevelEditorToolBar.PlayToolBar</code> \u6DFB\u52A0\u5DE5\u5177\u680F\u83DC\u5355\u6309\u94AE</li></ul><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">UToolMenu</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Menu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UToolMenus</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">ExtendMenu</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LevelEditor.LevelEditorToolBar.PlayToolBar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuSection</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Section </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ToolbarMenu</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">FindOrAddSection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">NAME_None</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Section</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddEntry</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">FToolMenuEntry</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">InitComboButton</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">              // Name</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">FUIAction</span><span style="color:#89DDFF;">(),</span><span style="color:#676E95;font-style:italic;">           // Action: default</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">FNewToolMenuChoice</span><span style="color:#89DDFF;">()</span><span style="color:#676E95;font-style:italic;">   // Contents: default</span></span>
<span class="line"><span style="color:#89DDFF;">));</span></span>
<span class="line"></span></code></pre></div><ul><li>\u62D3\u5C55 <code>LevelEditor.LevelEditorToolBar.PlayToolBar.Plugin</code> \u521B\u5EFA\u81EA\u5B9A\u4E49\u83DC\u5355</li></ul><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">UToolMenu</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Menu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UToolMenus</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">ExtendMenu</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">LevelEditor.LevelEditorToolBar.PlayToolBar.Plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuSection</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Section </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Menu</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">FindOrAddSection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">NAME_None</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Section</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddMenuEntryWithCommandList</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">FMyCommands</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">PluginAction</span><span style="color:#89DDFF;">,</span><span style="color:#676E95;font-style:italic;">     // Command</span></span>
<span class="line"><span style="color:#A6ACCD;">    PluginCommands</span><span style="color:#676E95;font-style:italic;">                       // CommandList</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="\u62D3\u5C55\u53F3\u952E\u83DC\u5355-context-menu" tabindex="-1">\u62D3\u5C55\u53F3\u952E\u83DC\u5355 | Context Menu <a class="header-anchor" href="#\u62D3\u5C55\u53F3\u952E\u83DC\u5355-context-menu" aria-hidden="true">#</a></h2><p>\u4EE5\u8D44\u6E90\u7BA1\u7406\u5668\u7684\u53F3\u952E\u83DC\u5355\u4E3A\u4F8B\uFF0C\u6F14\u793A\u5982\u4F55\u62D3\u5C55\u53F3\u952E\u83DC\u5355</p><ul><li>\u62D3\u5C55\u5185\u7F6E\u83DC\u5355 <code>ContentBrowser.AssetContextMenu</code></li></ul><div class="language-cpp"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">UToolMenu</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> Menu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">UToolMenus</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">ExtendMenu</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ContentBrowser.AssetContextMenu</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuSection</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Section </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Menu</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">FindOrAddSection</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">NAME_None</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">FToolMenuEntry</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> Entry </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Section</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AddEntry</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">FToolMenuEntry</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">InitMenuEntry</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">FMyCommands</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">Get</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">PluginAction</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">Entry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">SetCommandList</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">PluginCommands</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="\u62D3\u5C55\u5176\u4ED6\u83DC\u5355-other-menus" tabindex="-1">\u62D3\u5C55\u5176\u4ED6\u83DC\u5355 | Other Menus <a class="header-anchor" href="#\u62D3\u5C55\u5176\u4ED6\u83DC\u5355-other-menus" aria-hidden="true">#</a></h2><p>\u4E0D\u96BE\u53D1\u73B0\uFF0C\u901A\u8FC7 <code>UToolMenus</code> \u8FDB\u884C Unreal Editor \u83DC\u5355\u62D3\u5C55\u5728\u7528\u6CD5\u4E0A\u5177\u6709\u5F88\u9AD8\u7684\u4E00\u81F4\u6027\u3002\u524D\u6587\u4E5F\u63D0\u5230\u8FC7\uFF0CUnreal Editor \u4E2D\u7684\u6240\u6709\u83DC\u5355\u5747\u7531 <code>UToolMenus</code> \u5BF9\u8C61\u7EF4\u62A4\uFF0C\u7406\u8BBA\u4E0A\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u62D3\u5C55\u7F16\u8F91\u5668\u5185\u7684\u4EFB\u4F55\u83DC\u5355\u3002</p><p>\u6B64\u5916\uFF0CUnreal Editor \u8FD8\u63D0\u4F9B\u4E86\u76F8\u5E94\u7684\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u4FBF\u4E8E\u6211\u4EEC\u5FEB\u901F\u67E5\u627E\u7F16\u8F91\u5668 UI \u4E2D\u6CE8\u5165\u70B9\u7684\u540D\u79F0\u3002</p><p>\u5728 Editor Preference \u4E2D\u6253\u5F00</p><p><code>General -&gt; Miscellaneous -&gt; Developer Tools -&gt; Display UI Extension Points</code></p><p>\u5373\u53EF\u67E5\u770B\u6240\u6709\u53EF\u88AB\u62D3\u5C55\u7684\u83DC\u5355\u540D\u79F0</p>`,47),e=[p];function t(c,r,F,D,y,i){return a(),n("div",null,e)}var C=s(o,[["render",t]]);export{d as __pageData,C as default};
