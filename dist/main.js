(()=>{"use strict";function e(){const e=document.querySelector("body"),t=(document.querySelector(".content"),document.querySelector(".menu-content"),document.createElement("div"));t.classList.add("content");const n=document.createElement("h1");n.textContent="About";const o=document.createElement("article");t.appendChild(n),t.appendChild(o),o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",e.appendChild(t)}document.querySelector(".content-menu"),document.querySelector(".content"),(()=>{!function(){const e=document.createElement("header"),t=document.createElement("a"),n=document.createElement("nav"),o=document.createElement("ul"),c=document.querySelector("body"),a=["About","Menu","Contact"];n.appendChild(o);for(let e=0;e<a.length;e++){const t=document.createElement("li"),n=document.createElement("button");n.classList.add(`${a[e]}`),n.textContent=a[e],t.appendChild(n),o.appendChild(t)}t.textContent="RESTAURANT",e.appendChild(t),e.appendChild(n),c.appendChild(e)}(),e();const t=document.querySelector(".About"),n=document.querySelector(".Menu"),o=document.querySelector(".Contact"),c=(document.querySelector(".menu-container"),document.querySelector("body")),a=(document.querySelector(".content"),document.querySelector(".content-menu"),{about:!0,menu:!1,contact:!1});n.addEventListener("click",(function(){if(!1===a.menu){document.querySelector(".content-menu");const e=document.querySelector(".content"),t=document.querySelector(".contact-content");!0===a.about?c.removeChild(e):!0===a.contact&&c.removeChild(t),function(){const e=document.querySelector("body"),t=(document.querySelector(".content"),document.createElement("div"));t.classList.add("content-menu");const n=document.createElement("div"),o=document.createElement("h1");n.classList.add("menu-container"),t.appendChild(n),t.appendChild(o);const c=100,a=100,d=[],i=new Image(c,a);i.src="src/images/dish1.jpg",i.classList.add("image"),d.push(i);const s=new Image(c,a);s.src="src/images/dish2.jpg",s.classList.add("image"),d.push(s);const u=new Image(c,a);u.src="src/images/dish3.jpg",u.classList.add("image"),d.push(u);const r=new Image(c,a);r.src="src/images/dish4.jpg",r.classList.add("image"),d.push(r);const l=new Image(c,a);l.src="src/images/dish5.jpg",l.classList.add("image"),d.push(l);const m=new Image(c,a);m.src="src/images/dish6.jpg",m.classList.add("image"),d.push(m),d.forEach((e=>{const t=document.createElement("div");t.classList.add("card");const o=document.createElement("article");o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",o.classList.add("dish-description"),t.appendChild(e),t.appendChild(o),n.appendChild(t)})),t.appendChild(n),e.appendChild(t)}(),a.about=!1,a.menu=!0,a.contact=!1}})),t.addEventListener("click",(function(){if(!1===a.about){const t=document.querySelector("body"),n=(document.querySelector(".content"),document.querySelector(".content-menu")),o=document.querySelector(".contact-content");!0===a.menu?t.removeChild(n):!0===a.contact&&t.removeChild(o),e(),a.about=!0,a.menu=!1,a.contact=!1}})),o.addEventListener("click",(function(){if(!1===a.contact){const e=document.querySelector(".content"),t=document.querySelector(".content-menu");document.querySelector(".contact-content"),!0===a.about?c.removeChild(e):!0===a.menu&&c.removeChild(t),function(){const e=document.querySelector("body"),t=(e,t,n)=>({fullName:e,phoneNumber:t,email:n}),n=document.createElement("div");n.classList.add("contact-content"),e.appendChild(n);const o=document.querySelector(".contact-content"),c=document.createElement("div");c.classList.add("info-container"),o.appendChild(c);const a=document.querySelector(".info-container"),d=[],i=t("Jan Kowalski","455-645-980","jankowalski@onet.pl");d.push(i),console.log(i);const s=t("Krzysztof Nowak","540-766-666","knowak@gmail.com");d.push(s),d.forEach((e=>{const t=document.createElement("div");t.classList.add("info-card"),a.appendChild(t)}));const u=document.querySelectorAll(".info-card");Array.from(u).forEach((e=>{const t=new Image(100,100);t.src="src/images/avatar1.png",t.classList.add("image"),e.appendChild(t);const n=document.createElement("div");n.classList.add("info-section"),e.appendChild(n)}));const r=document.querySelectorAll(".info-section");Array.from(r).forEach((e=>{const t=document.createElement("h3");t.classList.add("infos");const n=document.createElement("h3");n.classList.add("infos");const o=document.createElement("h3");o.classList.add("infos"),e.appendChild(t),e.appendChild(n),e.appendChild(o)}));const l=document.querySelectorAll(".infos"),m=Array.from(l),p=m.splice(0,3),h=m.splice(0,3);p[0].textContent=i.fullName,p[1].textContent=i.phoneNumber,p[2].textContent=i.email,h[0].textContent=s.fullName,h[1].textContent=s.phoneNumber,h[2].textContent=s.email}(),a.about=!1,a.menu=!1,a.contact=!0}}))})()})();