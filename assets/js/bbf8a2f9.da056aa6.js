"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[4319],{3192:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var o=r(4848),s=r(8453);const i={sidebar_position:987},t="2024.4.21.0",d={id:"changelog/2024-4-21-0",title:"2024.4.21.0",description:"Version: 2024.4.21.0",source:"@site/docs/changelog/2024-4-21-0.md",sourceDirName:"changelog",slug:"/changelog/2024-4-21-0",permalink:"/NETworkManager/docs/changelog/2024-4-21-0",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/changelog/2024-4-21-0.md",tags:[],version:"current",sidebarPosition:987,frontMatter:{sidebar_position:987},sidebar:"docsSidebar",previous:{title:"2024.5.27.0",permalink:"/NETworkManager/docs/changelog/2024-5-27-0"},next:{title:"2024.1.7.0",permalink:"/NETworkManager/docs/changelog/2024-1-7-0"}},l={},h=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"What&#39;s new?",id:"whats-new",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bugfixes",id:"bugfixes",level:2},{value:"Dependencies, Refactoring &amp; Documentation",id:"dependencies-refactoring--documentation",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"20244210",children:"2024.4.21.0"})}),"\n",(0,o.jsxs)(n.p,{children:["Version: ",(0,o.jsx)(n.strong,{children:"2024.4.21.0"})," ",(0,o.jsx)("br",{}),"\nRelease date: ",(0,o.jsx)(n.strong,{children:"21.04.2024"})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"File"}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.code,{children:"SHA256"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2024.4.21.0/NETworkManager_2024.4.21.0_Setup.exe",children:(0,o.jsx)(n.code,{children:"NETworkManager_2024.4.21.0_Setup.exe"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"C0A49E98C788CC0C69B0AAA87D7550B7307B797A761B8913D1CDAE305FDFF666"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2024.4.21.0/NETworkManager_2024.4.21.0_Portable.zip",children:(0,o.jsx)(n.code,{children:"NETworkManager_2024.4.21.0_Portable.zip"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"85AB794D44FEC49A08FBD261C00689E8D50A50DF9787B85946752B1F180373B6"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/releases/download/2024.4.21.0/NETworkManager_2024.4.21.0_Archive.zip",children:(0,o.jsx)(n.code,{children:"NETworkManager_2024.4.21.0_Archive.zip"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"96DAFC53A89A86E7FF9C971F5136FD9474BF2CCB956C724EE93C10B231B25819"})})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"System requirements"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Windows 10 / Server x64 (1809 or later)"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0/runtime",children:".NET Desktop Runtime 8.0 (LTS) - x64"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Network Interfaces"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Adding an additional IPv4 address to the network adapter will enable the ",(0,o.jsx)(n.code,{children:"netsh"})," option ",(0,o.jsx)(n.code,{children:"dhcpstaticipcoexistence"})," if the network adapter is configured to use DHCP. See ",(0,o.jsx)(n.a,{href:"/NETworkManager/docs/application/network-interface#configure",children:"this"})," for more information. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2656",children:"#2656"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"whats-new",children:"What's new?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Tabs can now be arranged within the window using drag & drop. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2669",children:"#2669"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Changelog #2669",src:r(1221).A+"",width:"1197",height:"796"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Network Interfaces"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Export to CSV, XML and JSON added. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2626",children:"#2626"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Ping Monitor"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Grouping of hosts added. Hosts are now grouped based on the profile or added to the default group. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2645",children:"#2645"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Discovery Protocol"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Export to CSV, XML and JSON added. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2626",children:"#2626"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"IP Geolocation"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Export to CSV, XML and JSON added. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2626",children:"#2626"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Bit Calculator"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Export to CSV, XML and JSON added. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2626",children:"#2626"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"bugfixes",children:"Bugfixes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"General"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fix some design issues for the ",(0,o.jsx)(n.code,{children:"Run command"})," button. The button is now in the right-hand title bar instead of in the center until a better solution is found. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2651",children:"#2651"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"IP Scanner"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Add profile..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Export..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n",(0,o.jsxs)(n.li,{children:["Copy MAC address to clipboard fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2644",children:"#2644"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Port Scanner"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Open port profiles..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Export..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Traceroute"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Export..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"DNS Lookup"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Export..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"SNMP"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Open OID profiles..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Export..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"SNTP Lookup"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Export..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Whois"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Export..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"IP Geolocation"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Export..."})," in dragged out tab fixed. ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pull/2661",children:"#2661"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"dependencies-refactoring--documentation",children:"Dependencies, Refactoring & Documentation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Code cleanup & refactoring"}),"\n",(0,o.jsxs)(n.li,{children:["Language files updated via ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Ftransifex-integration",children:"#transifex"})]}),"\n",(0,o.jsxs)(n.li,{children:["Dependencies updated via ",(0,o.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/pulls?q=author%3Aapp%2Fdependabot",children:"#dependabot"})]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1221:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/changelog-2669-aa169c8b40b09576d9aeb4cc627eddd0.gif"},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var o=r(6540);const s={},i=o.createContext(s);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);