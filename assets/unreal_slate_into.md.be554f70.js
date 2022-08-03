import{_ as e,c as a,o as t,d as l}from"./app.de5861fd.js";const c=JSON.parse('{"title":"Slate UI \u7B80\u4ECB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F Slate UI","slug":"\u4EC0\u4E48\u662F-slate-ui"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60 Slate UI","slug":"\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-slate-ui"},{"level":2,"title":"\u5176\u4ED6\u8D44\u6599","slug":"\u5176\u4ED6\u8D44\u6599"}],"relativePath":"unreal/slate/into.md","lastUpdated":1659496637000}'),r={name:"unreal/slate/into.md"},n=l('<h1 id="slate-ui-\u7B80\u4ECB" tabindex="-1">Slate UI \u7B80\u4ECB <a class="header-anchor" href="#slate-ui-\u7B80\u4ECB" aria-hidden="true">#</a></h1><h2 id="\u4EC0\u4E48\u662F-slate-ui" tabindex="-1">\u4EC0\u4E48\u662F Slate UI <a class="header-anchor" href="#\u4EC0\u4E48\u662F-slate-ui" aria-hidden="true">#</a></h2><p>Slate UI \u662F Unreal Engine \u4E2D\u7684\u4E00\u5957 UI \u6846\u67B6\uFF0CUnreal Editor \u7684\u5927\u90E8\u5206\u754C\u9762\u548C\u6E38\u620F\u5185\u7684 UMG UI \u7CFB\u7EDF\u90FD\u662F\u57FA\u4E8E Slate UI \u6784\u5EFA\u7684\u3002</p><p>\u5173\u4E8E\u66F4\u8BE6\u7EC6\u7684 Slate UI \u67B6\u6784\u6982\u8FF0\uFF0C\u53EF\u4EE5\u53C2\u8003<a href="https://docs.unrealengine.com/5.0/zh-CN/understanding-the-slate-ui-architecture-in-unreal-engine/" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a>\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-slate-ui" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60 Slate UI <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60-slate-ui" aria-hidden="true">#</a></h2><p>\u672C\u6587\u6863\u7684\u6838\u5FC3\u4E3B\u9898\u662F Unreal Editor \u63D2\u4EF6\u5F00\u53D1\uFF0C\u63D2\u4EF6\u7684\u4F7F\u7528\u8005\u53EF\u80FD\u662F\u7F8E\u672F\u3001\u7B56\u5212\u7B49\u975E\u6280\u672F\u540C\u5B66\uFF0C\u6240\u4EE5\u4E3A\u7F16\u5199\u7684\u63D2\u4EF6\u8BBE\u8BA1\u4E00\u4E2A\u7F8E\u89C2\u6613\u7528\u7684 GUI \u662F\u5341\u5206\u5FC5\u8981\u7684\u3002</p><p>Unreal Editor Plugin \u4F7F\u7528 C++ \u548C Unreal \u6838\u5FC3\u5E93\u5F00\u53D1\uFF0C\u7406\u8BBA\u4E0A\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5F15\u5165 QT \u6216 CEF \u7B49\u7B2C\u4E09\u65B9\u5E93\u6765\u6784\u5EFA GUI\uFF0C\u76F8\u8F83\u4E4B\u4E0B\uFF0C\u4F7F\u7528 Slate UI \u6709\u5982\u4E0B\u4F18\u70B9\uFF1A</p><ul><li>\u8F7B\u91CF\u9AD8\u6548\uFF1ASlate UI \u4EC5\u4F9D\u8D56 Unreal \u6838\u5FC3\u5E93\uFF0C\u65E0\u5916\u90E8\u4F9D\u8D56\u3002\u4F8B\u5982\u751F\u547D\u5468\u671F\u7BA1\u7406\u7531 Unreal \u667A\u80FD\u6307\u9488\u5B9E\u73B0\uFF0C\u4E8B\u4EF6\u76D1\u542C\u7531 Unreal Delegate \u673A\u5236\u5B9E\u73B0\u7B49\u3002\u5982\u5F15\u5165 QT \u7B49\u7B2C\u4E09\u65B9 GUI \u5E93\uFF0C\u968F\u4E4B\u4E5F\u4F1A\u5F15\u5165\u5176\u76F8\u5173\u6838\u5FC3\u5E93\u548C\u5DE5\u5177\u51FD\u6570\u5E93\uFF0C\u4E0E Unreal \u6838\u5FC3\u5E93\u5B58\u5728\u5927\u91CF\u529F\u80FD\u91CD\u5408\uFF0C\u9020\u6210\u4EE3\u7801\u5197\u4F59\u3002</li><li>\u4E0E Unreal Editor \u4FDD\u6301\u4E00\u81F4\u6027\uFF1A\u6211\u4EEC\u7684\u63D2\u4EF6\u662F\u5728 Unreal Editor \u4E2D\u8FD0\u884C\u7684\uFF0C\u4F7F\u7528 Slate UI \u6784\u5EFA GUI\uFF0C\u53EF\u4EE5\u4E0E\u7F16\u8F91\u5668\u4FDD\u6301\u5728\u89C6\u89C9\u98CE\u683C\u548C\u884C\u4E3A\u4E0A\u7684\u4E00\u81F4\u6027\uFF0C\u4FBF\u4E8E\u7528\u6237\u7406\u89E3\u548C\u64CD\u4F5C\u3002</li><li>\u8BED\u6CD5\u7684\u7B80\u6D01\u6027\uFF1AUnreal Engine \u901A\u8FC7\u4F7F\u7528\u5927\u91CF\u5B8F\u5B9A\u4E49\u3001\u8FD0\u7B97\u7B26\u91CD\u8F7D\u3001\u53C2\u6570\u4F20\u9012\u7B49\u624B\u6BB5\uFF0C\u5B9E\u73B0\u4E86\u5728 C++ \u4E2D\u4F7F\u7528\u58F0\u660E\u5F0F\u8BED\u6CD5\u548C\u7EC4\u5408\u5F0F\u8868\u8FBE\u5F0F\u7684\u65B9\u5F0F\u6765\u63CF\u8FF0 UI\uFF0C\u6211\u4EEC\u5C06\u5728\u540E\u9762\u7684\u7AE0\u8282\u4E2D\u8BA8\u8BBA\u8FD9\u4E9B\u7279\u6B8A\u8BED\u6CD5\u3002</li><li>UMG \u4E5F\u57FA\u4E8E Slate \uFF1AUnreal Engine \u7684\u6E38\u620F\u5185 UI \u7CFB\u7EDF UMG \u672C\u8D28\u4E0A\u662F\u5BF9 Slate UI \u7684\u4E8C\u6B21\u5C01\u88C5\u3002\u6240\u4EE5\u5B66\u4E60 Slate UI \u4E5F\u80FD\u52A0\u6DF1\u6211\u4EEC\u5BF9\u4E8E Unreal \u6E38\u620F\u5185 UI \u7CFB\u7EDF\u7684\u7406\u89E3\u3002</li></ul><p>\u4EE5\u4E0A\u53EA\u662F\u4E00\u4E9B\u4E2A\u4EBA\u89C1\u89E3\uFF0C\u5B9E\u9645\u5F00\u53D1\u524D\u7684\u6280\u672F\u9009\u578B\u9700\u8981\u5177\u4F53\u95EE\u9898\u5177\u4F53\u5206\u6790\u3002QT \u672C\u8EAB\u4E5F\u662F\u8BBE\u8BA1\u975E\u5E38\u4F18\u79C0\u7684 C++ GUI \u65B9\u6848\uFF0C\u5D4C\u5165 CEF \u7B49\u6846\u67B6\u4E5F\u80FD\u5927\u5927\u52A0\u5FEB UI \u8FED\u4EE3\u901F\u5EA6\uFF0C\u4F46\u65E2\u7136\u90FD\u6253\u7B97\u6DF1\u5165\u5B66\u4E60 Unreal Editor \u4E86\uFF0C\u4E86\u89E3\u4E00\u4E0B\u7F16\u8F91\u5668\u4F7F\u7528\u7684 UI \u6846\u67B6\u4E5F\u6CA1\u4EC0\u4E48\u574F\u5904\u3002</p><h2 id="\u5176\u4ED6\u8D44\u6599" tabindex="-1">\u5176\u4ED6\u8D44\u6599 <a class="header-anchor" href="#\u5176\u4ED6\u8D44\u6599" aria-hidden="true">#</a></h2><p>\u5173\u4E8E Slate UI\uFF0C\u793E\u533A\u4E2D\u5B58\u5728\u4E00\u4E9B\u53EF\u4EE5\u7B80\u5316\u5F00\u53D1\u6D41\u7A0B\u7684\u65B9\u6848\uFF0C\u867D\u7136\u8FD9\u4E9B\u65B9\u6848\u5BF9 Slate UI \u7684\u7279\u6027\u652F\u6301\u5C1A\u4E0D\u5B8C\u5168\uFF0C\u4F46\u4ECD\u63D0\u4F9B\u4E86\u4E0D\u9519\u7684\u601D\u8DEF\uFF1A</p><ul><li><a href="https://www.tacolor.xyz/pages/TAPython.html" target="_blank" rel="noopener noreferrer">TAPython</a></li><li><a href="https://github.com/20tab/UnrealEnginePython" target="_blank" rel="noopener noreferrer">UnrealEnginePython</a></li></ul><p>\u671F\u5F85\u5C06\u6765\u80FD\u51FA\u73B0\u4E00\u4E9B\u66F4\u6210\u719F\u7684\u7B80\u5316 Slate UI \u5F00\u53D1\u6D41\u7A0B\u7684\u5DE5\u5177\u3002<s>\u4F46\u5176\u5B9E\u5728\u638C\u63E1\u4E86 Slate UI \u7684\u57FA\u672C\u7528\u6CD5\u4E4B\u540E\uFF0C\u5F00\u53D1\u6D41\u7A0B\u5E76\u6CA1\u6709\u60F3\u8C61\u7684\u90A3\u4E48\u590D\u6742\u3002</s> \u8FD9\u4E9B\u5DE5\u5177\u80FD\u591F\u5E2E\u52A9\u4E0D\u719F\u6089 C++ \u5F00\u53D1\u7684\u540C\u5B66\u4E5F\u80FD\u4F7F\u7528 Slate UI \u4E3A Unreal \u811A\u672C\u6DFB\u52A0 GUI\u3002</p>',13),i=[n];function U(o,s,d,h,I,p){return t(),a("div",null,i)}var _=e(r,[["render",U]]);export{c as __pageData,_ as default};