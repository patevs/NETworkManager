"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[8990],{9210:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(4848),r=o(8453);const i={sidebar_position:15},s="SNTP Lookup",c={id:"application/sntp-lookup",title:"SNTP Lookup",description:"With SNTP Lookup you can query one or more SNTP servers to get the current network time.",source:"@site/docs/application/sntp-lookup.md",sourceDirName:"application",slug:"/application/sntp-lookup",permalink:"/NETworkManager/docs/application/sntp-lookup",draft:!1,unlisted:!1,editUrl:"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/application/sntp-lookup.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"docsSidebar",previous:{title:"SNMP",permalink:"/NETworkManager/docs/application/snmp"},next:{title:"Discovery Protocol",permalink:"/NETworkManager/docs/application/discovery-protocol"}},d={},l=[{value:"Settings",id:"settings",level:2},{value:"SNTP servers",id:"sntp-servers",level:3},{value:"Timeout (ms)",id:"timeout-ms",level:3}];function a(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"sntp-lookup",children:"SNTP Lookup"})}),"\n",(0,n.jsxs)(t.p,{children:["With ",(0,n.jsx)(t.strong,{children:"SNTP Lookup"})," you can query one or more SNTP servers to get the current network time.\nSNTP server and get the network current time. It will also show the offset to the local time."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"SNTP (Simple Network Time Protocol) is a protocol used for synchronizing time between computer systems on a network. It is a simplified version of the Network Time Protocol (NTP) that is widely used for time synchronization. SNTP is designed to provide a basic level of accuracy and is used when precise timing is not critical. SNTP servers typically obtain their time from other NTP or SNTP servers and distribute the time to client devices on the network. SNTP operates over the User Datagram Protocol (UDP) and typically uses port 123. It is widely supported by many operating systems and network devices and is an important component of network infrastructure."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SNTP Lookup",src:o(3562).A+"",width:"1200",height:"800"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Right-click on the result to copy or export the information."})}),"\n",(0,n.jsx)(t.h2,{id:"settings",children:"Settings"}),"\n",(0,n.jsx)(t.h3,{id:"sntp-servers",children:"SNTP servers"}),"\n",(0,n.jsx)(t.p,{children:"List of SNTP server profiles. A profile can contain one or more SNTP servers with host/IP address and port."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Type:"})," ",(0,n.jsx)(t.code,{children:"List<NETworkManager.Models.Network.ServerConnectionInfoProfile>"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Default:"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Server(s)"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Cloudflare"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"time.cloudflare.com:123"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Google Public NTP"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"time.google.com:123; time1.google.com:123; time2.google.com:123; time3.google.com:123; time4.google.com:123"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Microsoft"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"time.windows.com:123"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pool.ntp.org"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"0.pool.ntp.org:123; 1.pool.ntp.org:123; 2.pool.ntp.org:123; 3.pool.ntp.org:123"})})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"At least one SNTP server profile must exist."})}),"\n",(0,n.jsx)(t.h3,{id:"timeout-ms",children:"Timeout (ms)"}),"\n",(0,n.jsx)(t.p,{children:"Timeout in milliseconds after the SNTP request is canceled."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Type:"})," ",(0,n.jsx)(t.code,{children:"Integer"})," [Min ",(0,n.jsx)(t.code,{children:"100"}),", Max ",(0,n.jsx)(t.code,{children:"15000"}),"]"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Default:"})," ",(0,n.jsx)(t.code,{children:"4000"})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},3562:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/sntp-lookup-37601915ab0b1c122fc49fd1d9b28786.png"},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>c});var n=o(6540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);