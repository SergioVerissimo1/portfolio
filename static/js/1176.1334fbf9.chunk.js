"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[1176],{1176:(t,c,i)=>{i.d(c,{clickAttract:()=>r,hoverAttract:()=>u});var n=i(4864);const o=1,e=1,a=0;function s(t,c,i,a,s){const r=t.actualOptions.interactivity.modes.attract;if(!r)return;const u=t.particles.quadTree.query(a,s);for(const f of u){const{dx:t,dy:a,distance:s}=(0,n.If)(f.position,c),u=r.speed*r.factor,p=(0,n.qk)((0,n.Q3)(r.easing)(e-s/i)*u,o,r.maxSpeed),l=n.Cg.create(s?t/s*p:u,s?a/s*p:u);f.position.subFrom(l)}}function r(t,c){t.attract||(t.attract={particles:[]});const{attract:i}=t;if(i.finish||(i.count||(i.count=0),i.count++,i.count===t.particles.count&&(i.finish=!0)),i.clicking){const i=t.interactivity.mouse.clickPosition,o=t.retina.attractModeDistance;if(!o||o<a||!i)return;s(t,i,o,new n.um(i.x,i.y,o),(t=>c(t)))}else!1===i.clicking&&(i.particles=[])}function u(t,c){const i=t.interactivity.mouse.position,o=t.retina.attractModeDistance;!o||o<a||!i||s(t,i,o,new n.um(i.x,i.y,o),(t=>c(t)))}}}]);
//# sourceMappingURL=1176.1334fbf9.chunk.js.map