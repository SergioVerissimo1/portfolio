"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3552],{3552:(t,e,o)=>{o.d(e,{Attractor:()=>i});var a=o(4864);class i extends a.Cm{constructor(t){super(t)}clear(){}init(){}async interact(t){const e=this.container;void 0===t.attractDistance&&(t.attractDistance=(0,a.qS)(t.options.move.attract.distance)*e.retina.pixelRatio);const o=t.attractDistance,i=t.getPosition(),s=e.particles.quadTree.queryCircle(i,o);for(const c of s){if(t===c||!c.options.move.attract.enable||c.destroyed||c.spawning)continue;const e=c.getPosition(),{dx:o,dy:s}=(0,a.If)(i,e),n=t.options.move.attract.rotate,r=o/(1e3*n.x),l=s/(1e3*n.y),p=c.size.value/t.size.value,v=1/p;t.velocity.x-=r*p,t.velocity.y-=l*p,c.velocity.x+=r*v,c.velocity.y+=l*v}await Promise.resolve()}isEnabled(t){return t.options.move.attract.enable}reset(){}}}}]);
//# sourceMappingURL=3552.5dc1ecf4.chunk.js.map