import{u as e}from"./jsxRuntime.module-BVeQMvAP.js";import{A as r}from"./Annotation-CmxsFStq.js";import"./preact.module-qK8Eh564.js";const P={title:"Library/Annotation",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["left","right","top","bottom"]},showLine:{control:"boolean"}}},t={args:{children:"Default",variant:"left",showLine:!0}},n={args:{children:"Default",variant:"left",showLine:!0}},a={args:{children:"Default",variant:"right",showLine:!0}},o={args:{children:"Default",variant:"left",showLine:!1}},i={render:()=>e("div",{className:"flex flex-col gap-4 items-start",children:[e(r,{variant:"left",showLine:!0,children:"Left Variant"}),e(r,{variant:"right",showLine:!0,children:"Right Variant"})]})},s={render:()=>e("div",{className:"flex gap-8 items-center",children:[e("div",{className:"flex flex-col items-center",children:[e(r,{variant:"top",showLine:!0,children:"Top Variant"}),e("div",{className:"w-32 h-32 bg-grey-100 border border-grey-400 rounded-md flex items-center justify-center",children:"Component"})]}),e("div",{className:"flex flex-col items-center",children:[e("div",{className:"w-32 h-32 bg-grey-100 border border-grey-400 rounded-md flex items-center justify-center",children:"Component"}),e(r,{variant:"bottom",showLine:!0,children:"Bottom Variant"})]})]})},d={render:()=>e("div",{className:"flex gap-8 items-center",children:[e("div",{className:"flex flex-col items-center",children:[e(r,{variant:"top",showLine:!0,children:"Top"}),e("div",{className:"w-24 h-24 bg-grey-100 border border-grey-400 rounded-md"})]}),e("div",{className:"flex items-center",children:[e(r,{variant:"left",showLine:!0,children:"Left"}),e("div",{className:"w-24 h-24 bg-grey-100 border border-grey-400 rounded-md"}),e(r,{variant:"right",showLine:!0,children:"Right"})]}),e("div",{className:"flex flex-col items-center",children:[e("div",{className:"w-24 h-24 bg-grey-100 border border-grey-400 rounded-md"}),e(r,{variant:"bottom",showLine:!0,children:"Bottom"})]})]})};var c,l,m,h,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'left',
    showLine: true
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:"Default Annotation (Left variant)",...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.description}}};var u,f,g,v,L;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'left',
    showLine: true
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:`Left Variant\r
Line extends to the right`,...(L=(v=n.parameters)==null?void 0:v.docs)==null?void 0:L.description}}};var b,w,x,y,N;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'right',
    showLine: true
  }
}`,...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.source},description:{story:`Right Variant\r
Line extends to the left`,...(N=(y=a.parameters)==null?void 0:y.docs)==null?void 0:N.description}}};var A,V,D,R,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    variant: 'left',
    showLine: false
  }
}`,...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.source},description:{story:"Without Line",...(S=(R=o.parameters)==null?void 0:R.docs)==null?void 0:S.description}}};var T,B,j,C,W;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 items-start">\r
            <Annotation variant="left" showLine={true}>\r
                Left Variant\r
            </Annotation>\r
            <Annotation variant="right" showLine={true}>\r
                Right Variant\r
            </Annotation>\r
        </div>
}`,...(j=(B=i.parameters)==null?void 0:B.docs)==null?void 0:j.source},description:{story:"Left and Right Variants",...(W=(C=i.parameters)==null?void 0:C.docs)==null?void 0:W.description}}};var z,H,_,E,O;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center">\r
            <div className="flex flex-col items-center">\r
                <Annotation variant="top" showLine={true}>\r
                    Top Variant\r
                </Annotation>\r
                <div className="w-32 h-32 bg-grey-100 border border-grey-400 rounded-md flex items-center justify-center">\r
                    Component\r
                </div>\r
            </div>\r
            <div className="flex flex-col items-center">\r
                <div className="w-32 h-32 bg-grey-100 border border-grey-400 rounded-md flex items-center justify-center">\r
                    Component\r
                </div>\r
                <Annotation variant="bottom" showLine={true}>\r
                    Bottom Variant\r
                </Annotation>\r
            </div>\r
        </div>
}`,...(_=(H=s.parameters)==null?void 0:H.docs)==null?void 0:_.source},description:{story:"Top and Bottom Variants",...(O=(E=s.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};var k,q,F,G,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center">\r
            <div className="flex flex-col items-center">\r
                <Annotation variant="top" showLine={true}>\r
                    Top\r
                </Annotation>\r
                <div className="w-24 h-24 bg-grey-100 border border-grey-400 rounded-md" />\r
            </div>\r
            <div className="flex items-center">\r
                <Annotation variant="left" showLine={true}>\r
                    Left\r
                </Annotation>\r
                <div className="w-24 h-24 bg-grey-100 border border-grey-400 rounded-md" />\r
                <Annotation variant="right" showLine={true}>\r
                    Right\r
                </Annotation>\r
            </div>\r
            <div className="flex flex-col items-center">\r
                <div className="w-24 h-24 bg-grey-100 border border-grey-400 rounded-md" />\r
                <Annotation variant="bottom" showLine={true}>\r
                    Bottom\r
                </Annotation>\r
            </div>\r
        </div>
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"All Variants",...(I=(G=d.parameters)==null?void 0:G.docs)==null?void 0:I.description}}};const Q=["Default","Left","Right","WithoutLine","HorizontalVariants","VerticalVariants","AllVariants"];export{d as AllVariants,t as Default,i as HorizontalVariants,n as Left,a as Right,s as VerticalVariants,o as WithoutLine,Q as __namedExportsOrder,P as default};
