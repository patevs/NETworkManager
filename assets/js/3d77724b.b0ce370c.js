"use strict";(self.webpackChunknetworkmanager=self.webpackChunknetworkmanager||[]).push([[4913],{9108:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"faq/profile-file-encryption","title":"Profile file encryption","description":"How does the profile encryption work?","source":"@site/docs/faq/profile-file-encryption.md","sourceDirName":"faq","slug":"/faq/profile-file-encryption","permalink":"/NETworkManager/docs/faq/profile-file-encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/bornToBeRoot/NETworkManager/tree/main/Website/docs/faq/profile-file-encryption.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"PowerShell with WSL","permalink":"/NETworkManager/docs/faq/powershell-wsl"},"next":{"title":"Setting priority","permalink":"/NETworkManager/docs/faq/settings-priority"}}');var r=o(4848),t=o(8453);const s={},l="Profile file encryption",c={},a=[{value:"How does the profile encryption work?",id:"how-does-the-profile-encryption-work",level:3},{value:"How to enable profile file encryption?",id:"how-to-enable-profile-file-encryption",level:3},{value:"How to change the master password of an encrypted profile file?",id:"how-to-change-the-master-password-of-an-encrypted-profile-file",level:3},{value:"How to disable profile file encryption?",id:"how-to-disable-profile-file-encryption",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"profile-file-encryption",children:"Profile file encryption"})}),"\n",(0,r.jsx)(n.h3,{id:"how-does-the-profile-encryption-work",children:"How does the profile encryption work?"}),"\n",(0,r.jsxs)(n.p,{children:["Profile files are encrypted on disk using ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/de-de/dotnet/api/system.security.cryptography.aes",children:"AES"})," with a key size of 256 bits and a block size of 128 bits in CBC mode. The encryption key is derived from a master password using ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/en-US/dotnet/api/system.security.cryptography.rfc2898derivebytes",children:"Rfc2898DeriveBytes"})," (PBKDF2) with 1,000,000 iterations. At runtime, passwords are stored as ",(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/en-US/dotnet/api/system.security.securestring",children:"SecureString"})," once the profile file is loaded. For some functions, the password must be converted to a normal string and may remains unencrypted in memory until the garbage collector cleans them up. If you found a security issue, you can report it ",(0,r.jsx)(n.a,{href:"https://github.com/BornToBeRoot/NETworkManager/security/advisories/new",children:"here"}),"!"]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-enable-profile-file-encryption",children:"How to enable profile file encryption?"}),"\n",(0,r.jsx)(n.p,{children:"Follow these steps to enable profile file encryption:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open the settings and go to the profile section."}),"\n",(0,r.jsx)(n.li,{children:"Right click on the profile file you want to encrypt."}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.code,{children:"Encryption..."})," > ",(0,r.jsx)(n.code,{children:"Enable encryption..."})," and set your master password."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Profile file encryption - Enable encryption",src:o(3770).A+"",width:"1016",height:"699"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-change-the-master-password-of-an-encrypted-profile-file",children:"How to change the master password of an encrypted profile file?"}),"\n",(0,r.jsx)(n.p,{children:"Follow these steps to change the master password of an encrypted profile file:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open the settings and go to the profile section."}),"\n",(0,r.jsx)(n.li,{children:"Right click on an encrypted profile file."}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.code,{children:"Encryption..."})," > ",(0,r.jsx)(n.code,{children:"Change Master Password..."})," and enter the current master password and a new master password."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Profile file encryption - Change master password",src:o(7430).A+"",width:"1016",height:"699"})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-disable-profile-file-encryption",children:"How to disable profile file encryption?"}),"\n",(0,r.jsx)(n.p,{children:"Follow these steps to disable profile file encryption:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open the settings and go to the profile section."}),"\n",(0,r.jsx)(n.li,{children:"Right click on an encrypted profile file."}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.code,{children:"Encryption..."})," > ",(0,r.jsx)(n.code,{children:"Disable encryption..."})," and enter your master password."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Profile file encryption - Enable encryption",src:o(7155).A+"",width:"1016",height:"699"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7430:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/profile-file-encryption--change-master-password-3441e1c575a9553b9a29c45234b1f810.gif"},7155:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/profile-file-encryption--disable-encryption-36561aaa646d9091435a0314b585692f.gif"},3770:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/profile-file-encryption--enable-encryption-622810d698cee065405e66161275bc50.gif"},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var i=o(6540);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);