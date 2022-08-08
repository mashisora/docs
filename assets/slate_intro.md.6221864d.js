import{_ as e,c as t,o as a,a as r}from"./app.d0b8b33a.js";const g=JSON.parse('{"title":"Slate UI","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F Slate UI","slug":"\u4EC0\u4E48\u662F-slate-ui"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60 Slate UI","slug":"\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-slate-ui"},{"level":2,"title":"Debug \u5DE5\u5177","slug":"debug-\u5DE5\u5177"},{"level":2,"title":"\u5176\u4ED6\u8D44\u6599","slug":"\u5176\u4ED6\u8D44\u6599"}],"relativePath":"slate/intro.md","lastUpdated":1659976371000}'),l={name:"slate/intro.md"},i=r('<h1 id="slate-ui" tabindex="-1">Slate UI <a class="header-anchor" href="#slate-ui" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F-slate-ui" tabindex="-1">\u4EC0\u4E48\u662F Slate UI <a class="header-anchor" href="#\u4EC0\u4E48\u662F-slate-ui" aria-hidden="true">#</a></h2><p>Slate UI \u662F Unreal Engine \u4E2D\u7684\u4E00\u5957 UI \u6846\u67B6\uFF0CUnreal Editor \u7684\u5927\u90E8\u5206\u754C\u9762\u548C\u6E38\u620F\u5185\u7684 UMG UI \u7CFB\u7EDF\u90FD\u662F\u57FA\u4E8E Slate UI \u6784\u5EFA\u7684\u3002</p><p>\u5173\u4E8E\u66F4\u8BE6\u7EC6\u7684 Slate UI \u67B6\u6784\u6982\u8FF0\uFF0C\u53EF\u4EE5\u53C2\u8003<a href="https://docs.unrealengine.com/5.0/zh-CN/understanding-the-slate-ui-architecture-in-unreal-engine/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a>\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-slate-ui" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60 Slate UI <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-slate-ui" aria-hidden="true">#</a></h2><p>\u672C\u6587\u6863\u7684\u6838\u5FC3\u4E3B\u9898\u662F Unreal Editor \u63D2\u4EF6\u5F00\u53D1\uFF0C\u63D2\u4EF6\u7684\u4F7F\u7528\u8005\u53EF\u80FD\u662F\u7F8E\u672F\u3001\u7B56\u5212\u7B49\u975E\u6280\u672F\u540C\u5B66\uFF0C\u6240\u4EE5\u4E3A\u63D2\u4EF6\u8BBE\u8BA1\u4E00\u4E2A\u7F8E\u89C2\u6613\u7528\u7684 GUI \u662F\u5341\u5206\u5FC5\u8981\u7684\u3002</p><p>Unreal Editor \u63D2\u4EF6\u4E3B\u8981\u4F7F\u7528 C++ \u548C Unreal \u6838\u5FC3\u5E93\u5F00\u53D1\uFF0C\u7406\u8BBA\u4E0A\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5F15\u5165 <a href="https://www.qt.io/" target="_blank" rel="noopener noreferrer">QT</a> \u3001<a href="https://github.com/ocornut/imgui" target="_blank" rel="noopener noreferrer">Dear ImGui</a> \u3001<a href="https://bitbucket.org/chromiumembedded/cef/src/master/" target="_blank" rel="noopener noreferrer">CEF</a> \u7B49\u7B2C\u4E09\u65B9\u6846\u67B6\u6765\u6784\u5EFA GUI \u3002\u76F8\u8F83\u4E4B\u4E0B\uFF0C\u4F7F\u7528 Slate UI \u6709\u5982\u4E0B\u4F18\u70B9\uFF1A</p><ul><li>\u8F7B\u91CF\u9AD8\u6548\uFF1ASlate UI \u4EC5\u4F9D\u8D56 Unreal \u6838\u5FC3\u5E93\uFF0C\u65E0\u5916\u90E8\u4F9D\u8D56\u3002\u5982\u5F15\u5165\u7B2C\u4E09\u65B9 GUI \u6846\u67B6\uFF0C\u968F\u4E4B\u4E5F\u4F1A\u5F15\u5165\u76F8\u5173\u4F9D\u8D56\uFF0C\u4E0E Unreal \u6838\u5FC3\u5E93\u5B58\u5728\u5927\u91CF\u529F\u80FD\u91CD\u5408\uFF0C\u9020\u6210\u4EE3\u7801\u5197\u4F59\u3002</li><li>\u4E0E Unreal Editor \u754C\u9762\u7684\u4E00\u81F4\u6027\uFF1AUnreal Editor \u63D2\u4EF6\u662F\u5728 Unreal Editor \u4E2D\u8FD0\u884C\u7684\uFF0C\u4F7F\u7528 Slate UI \uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u63D2\u4EF6\u754C\u9762\u4E0E\u7F16\u8F91\u5668\u754C\u9762\u5728\u89C6\u89C9\u98CE\u683C\u548C\u884C\u4E3A\u4E0A\u7684\u4E00\u81F4\u6027\uFF0C\u4FBF\u4E8E\u7528\u6237\u7406\u89E3\u548C\u64CD\u4F5C\u3002</li><li>\u53EF\u8C03\u7528 Unreal Editor \u5185\u7F6E\u63A7\u4EF6\uFF1AUnreal Editor \u7684\u4E3B\u8981\u754C\u9762\u5747\u4F7F\u7528 Slate UI \u6784\u5EFA\uFF0C\u610F\u5473\u7740\u6211\u4EEC\u53EF\u4EE5\u590D\u7528\u7F16\u8F91\u5668\u81EA\u8EAB\u7684\u4E00\u4E9B\u590D\u6742\u63A7\u4EF6\uFF0C\u7B80\u5316 UI \u5F00\u53D1\u6D41\u7A0B\u3002</li><li>\u8BED\u6CD5\u7684\u7B80\u6D01\u6027\uFF1AUnreal Engine \u901A\u8FC7\u5927\u91CF\u5B8F\u5B9A\u4E49\u3001\u8FD0\u7B97\u7B26\u91CD\u8F7D\u3001\u53C2\u6570\u4F20\u9012\u7B49\u624B\u6BB5\uFF0C\u5B9E\u73B0\u4E86\u5728 C++ \u4E2D\u4F7F\u7528\u58F0\u660E\u5F0F\u8BED\u6CD5\u548C\u7279\u6709\u7684 Slate \u8868\u8FBE\u5F0F\u6765\u63CF\u8FF0 UI \uFF0C\u5927\u5927\u7B80\u5316\u4E86\u4EE3\u7801\u3002\u6211\u4EEC\u5C06\u5728\u540E\u9762\u7684\u7AE0\u8282\u4E2D\u8BA8\u8BBA\u8FD9\u4E9B\u7279\u6B8A\u8BED\u6CD5\u3002</li></ul><p>\u4EE5\u4E0A\u53EA\u662F\u4E00\u4E9B\u4E2A\u4EBA\u89C1\u89E3\uFF0C\u5B9E\u9645\u5F00\u53D1\u65F6\u662F\u5426\u9009\u62E9 Slate UI \u8FD8\u9700\u5177\u4F53\u95EE\u9898\u5177\u4F53\u5206\u6790\u3002\u4E0A\u6587\u63D0\u5230\u7684\u4E09\u4E2A C++ \u751F\u6001\u4E0B\u5176\u4ED6\u7684 GUI \u6846\u67B6\u4E5F\u90FD\u975E\u5E38\u4F18\u79C0\uFF0C\u5728\u5DE5\u5177\u7C7B\u8F6F\u4EF6\u5F00\u53D1\u9886\u57DF\u6709\u5927\u91CF\u5E94\u7528\u5B9E\u4F8B\u3002\u4F46\u5373\u4F7F\u4E0D\u6253\u7B97\u4F7F\u7528 Slate UI\uFF0C\u5B66\u4E60\u5B83\u4E5F\u4F1A\u5BF9\u6DF1\u5165\u7406\u89E3 Unreal Editor \u6709\u5F88\u5927\u5E2E\u52A9\u3002</p><h2 id="debug-\u5DE5\u5177" tabindex="-1">Debug \u5DE5\u5177 <a class="header-anchor" href="#debug-\u5DE5\u5177" aria-hidden="true">#</a></h2><p>Unreal Editor \u63D0\u4F9B\u4E86\u4E24\u6B3E\u4E0E Slate UI \u76F8\u5173\u7684 Debug \u5DE5\u5177\uFF1A</p><ul><li>Widget Reflector\uFF1A <ul><li>\u4F4D\u4E8E <code>Tools -&gt; Debug -&gt; Widget Reflector</code> \uFF0C\u4E5F\u53EF\u4F7F\u7528\u547D\u4EE4 <code>WidgetReflector</code> \u6253\u5F00\u3002</li><li>\u8BE5\u5DE5\u5177\u53EF\u4ECE\u7F16\u8F91\u5668\u4E2D\u62FE\u53D6\u63A7\u4EF6\uFF0C\u5E76\u5C55\u793A\u51FA\u63A7\u4EF6\u4E0A\u4E0B\u6587\u7684\u6811\u5F62\u7ED3\u6784\u3002</li></ul></li><li>STARSHIP GALLERY\uFF1A <ul><li>\u4F4D\u4E8E <code>Tools -&gt; Debug -&gt; Debug Tools -&gt; Test Suite</code> \u3002</li><li>\u8BE5\u5DE5\u5177\u5C55\u793A\u4E86\u5E38\u7528\u7684 Slate \u57FA\u672C\u63A7\u4EF6\u548C\u5BF9\u5E94\u540D\u79F0\u3002</li></ul></li></ul><p>\u4F7F\u7528\u8FD9\u4E24\u4E2A Debug \u5DE5\u5177\uFF0C\u53EF\u4EE5\u8F85\u52A9\u6211\u4EEC\u5B66\u4E60 Slate UI \u548C Unreal Editor \u5F00\u53D1\u3002</p><h2 id="\u5176\u4ED6\u8D44\u6599" tabindex="-1">\u5176\u4ED6\u8D44\u6599 <a class="header-anchor" href="#\u5176\u4ED6\u8D44\u6599" aria-hidden="true">#</a></h2><p>\u5173\u4E8E Slate UI\uFF0C\u793E\u533A\u4E2D\u5B58\u5728\u4E00\u4E9B\u53EF\u4EE5\u7B80\u5316\u5F00\u53D1\u6D41\u7A0B\u7684\u65B9\u6848\uFF0C\u867D\u7136\u8FD9\u4E9B\u65B9\u6848\u5BF9 Slate UI \u7684\u7279\u6027\u652F\u6301\u5C1A\u4E0D\u5B8C\u5168\uFF0C\u4F46\u4ECD\u63D0\u4F9B\u4E86\u4E0D\u9519\u7684\u601D\u8DEF\uFF1A</p><ul><li><a href="https://www.tacolor.xyz/pages/TAPython.html" target="_blank" rel="noopener noreferrer">TAPython</a></li><li><a href="https://github.com/20tab/UnrealEnginePython" target="_blank" rel="noopener noreferrer">UnrealEnginePython</a></li></ul><p>\u5BF9\u4E8E\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u5728\u638C\u63E1\u4E86 Slate UI \u7684\u57FA\u672C\u7528\u6CD5\u4E4B\u540E\uFF0C\u5F00\u53D1\u6D41\u7A0B\u5E76\u6CA1\u6709\u60F3\u8C61\u7684\u90A3\u4E48\u590D\u6742\u3002\u4F46\u8FD9\u4E9B\u5DE5\u5177\u80FD\u591F\u5E2E\u52A9\u4E0D\u719F\u6089 C++ \u7684\u540C\u5B66\u4E5F\u80FD\u4F7F\u7528 Slate UI \u4E3A Unreal Editor \u811A\u672C\u6DFB\u52A0 GUI\u3002</p>',17),n=[i];function o(d,s,h,u,U,c){return a(),t("div",null,n)}var I=e(l,[["render",o]]);export{g as __pageData,I as default};
