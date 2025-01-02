"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[3954],{2897:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"changelog/next-release","title":"Next Release","description":"Version: Next release","source":"@site/docs/changelog/next-release.md","sourceDirName":"changelog","slug":"/changelog/next-release","permalink":"/NETworkManager/docs/changelog/next-release","draft":false,"unlisted":false,"editUrl":"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/changelog/next-release.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"docsSidebar","previous":{"title":"Changelog","permalink":"/NETworkManager/docs/category/changelog"},"next":{"title":"2024.11.11.0","permalink":"/NETworkManager/docs/changelog/2024-11-11-0"}}');var o=r(4848),i=r(8453);const t={sidebar_position:0},l="Next Release",a={},h=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"What&#39;s new?",id:"whats-new",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bugfixes",id:"bugfixes",level:2},{value:"Dependencies, Refactoring &amp; Documentation",id:"dependencies-refactoring--documentation",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"next-release",children:"Next Release"})}),"\n",(0,o.jsxs)(n.p,{children:["Version: ",(0,o.jsx)(n.strong,{children:"Next release"})," ",(0,o.jsx)("br",{}),"\nRelease date: ",(0,o.jsx)(n.strong,{children:"xx.xx.2024"})]}),"\n",(0,o.jsx)(n.table,{children:(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"File"}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.code,{children:"SHA256"})})]})})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"System requirements"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Windows 10 / Server x64 (22H2 or later)"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0/runtime",children:".NET Desktop Runtime 8.0 (LTS) - x64"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Minimum supported Windows version increased to ",(0,o.jsx)(n.code,{children:"22H2"})," to support:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["WiFi 6 GHz, WPA3, 802.11be ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2912",children:"#2912"})]}),"\n",(0,o.jsxs)(n.li,{children:["Remote Desktop high DPI, scaling and fast resizing ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2968",children:"#2968"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"whats-new",children:"What's new?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"WiFi"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["6 GHz networks are now supported. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2912",children:"#2912"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2928",children:"#2928"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"WPA3 Personal (SAE)"}),", ",(0,o.jsx)(n.code,{children:"WPA3 Enterprise"})," and ",(0,o.jsx)(n.code,{children:"WPA3 Enterprise (192-bit)"})," are now supported. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2912",children:"#2912"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"802.11be"})," (",(0,o.jsx)(n.code,{children:"EHT"}),") is now supported. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2912",children:"#2912"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Remote Desktop"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Scale rdp session and control to support high DPI (e.g. per Monitor DPI like 125%, 150%, etc.). ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2968",children:"#2968"})]}),"\n",(0,o.jsxs)(n.li,{children:["Resizing now uses ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/previous-versions/windows/desktop/legacy/mt703457(v=vs.85)",children:(0,o.jsx)(n.code,{children:"IMsRdpClient9::UpdateSessionDisplaySettings"})})," instead of ",(0,o.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/win32/termserv/imsrdpclient8-reconnect",children:(0,o.jsx)(n.code,{children:"IMsRdpClient::Reconnect"})})," to support scaling and faster resizing (without the need of reconnecting). ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2968",children:"#2968"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["The new features for high DPI, scaling and resizing may cause issues or doesn't work with legacy servers/clients. Please report any issues you find here: ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/issues/2911",children:"#2911"})]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Improve ToolTips (e.g. migrate from Twitter to X, etc.), Buttons, etc. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2955",children:"#2955"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"WiFi"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Improve search, cleanup/remove some converters to make the code more readable and faster. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2940",children:"#2940"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"bugfixes",children:"Bugfixes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Horizontal scrollbar fixed for some views. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2945",children:"#2945"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Fixed an issue with DPI scaling where the application was blurry if a second monitor had a different dpi setting than the main monitor. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2941",children:"#2941"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Changed the Welcome dialog from ",(0,o.jsx)(n.code,{children:"MahApps.Metro.Controls.Dialogs"})," to ",(0,o.jsx)(n.code,{children:"MahApps.Metro.SimpleChildWindow"}),", so the main window can be dragged and resized on the first start. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2914",children:"#2914"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"WiFi"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fixed a bug that caused the scan process to crash when a 6 GHz network was found. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2912",children:"#2912"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"IP Scanner"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fixed two ",(0,o.jsx)(n.code,{children:"NullReferenceException"})," in ICMP & NETBIOS for some IP addresses. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2964",children:"#2964"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"dependencies-refactoring--documentation",children:"Dependencies, Refactoring & Documentation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Migrated code for some loading indicators from the library [LoadingIndicators.WPF] (",(0,o.jsx)(n.a,{href:"https://github.com/zeluisping/LoadingIndicators.WPF",children:"https://github.com/zeluisping/LoadingIndicators.WPF"}),") to the NETworkManager repo, as the original repo looks unmaintained and has problems with MahApps.Metro version 2 and later. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2963",children:"#2963"})]}),"\n",(0,o.jsxs)(n.li,{children:["Code cleanup & refactoring ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2940",children:"#2940"})," ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2976",children:"#2976"})]}),"\n",(0,o.jsxs)(n.li,{children:["Language files updated via ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Ftransifex-integration",children:"#transifex"})]}),"\n",(0,o.jsxs)(n.li,{children:["Dependencies updated via ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Fdependabot",children:"#dependabot"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(6540);const o={},i=s.createContext(o);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);