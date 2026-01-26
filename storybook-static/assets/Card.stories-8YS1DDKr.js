import{u as t}from"./jsxRuntime.module-BVeQMvAP.js";import{C as e}from"./Card-ZAQdcZ_c.js";import{k as i}from"./index-K_6WTz9h.js";import"./preact.module-qK8Eh564.js";import"./Button-B5y4Xxru.js";import"./iconBase-nq0NtJg4.js";import"./compat.module-DBDShv_f.js";const w={title:"Library/Card",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},buttonIcon:{control:!1,table:{type:{summary:"ReactNode"}}}}},r={render:o=>t(e,{...o,buttonIcon:t(i,{})}),args:{title:"Join the family.",buttonText:"Join",onButtonClick:()=>console.log("Button clicked")}},n={render:o=>t(e,{...o,buttonIcon:t(i,{})}),args:{title:"Join the family.",buttonText:"Join",size:"sm",onButtonClick:()=>console.log("Button clicked")}},s={render:o=>t(e,{...o,buttonIcon:t(i,{})}),args:{title:"Join the family.",buttonText:"Join",size:"lg",onButtonClick:()=>console.log("Button clicked")}},a={render:()=>t("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl",children:[t("div",{children:[t("p",{className:"mb-2 text-sm text-text-secondary",children:"Desktop Variant"}),t(e,{title:"Join the family.",buttonText:"Join",buttonIcon:t(i,{}),size:"lg"})]}),t("div",{children:[t("p",{className:"mb-2 text-sm text-text-secondary",children:"Mobile Variant"}),t(e,{title:"Join the family.",buttonText:"Join",buttonIcon:t(i,{}),size:"sm"})]})]})};var c,l,d,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Card {...args} buttonIcon={<FiUser />} />,
  args: {
    title: 'Join the family.',
    buttonText: 'Join',
    onButtonClick: () => console.log('Button clicked')
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"Default Card (Medium Size)",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var p,g,b,x,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Card {...args} buttonIcon={<FiUser />} />,
  args: {
    title: 'Join the family.',
    buttonText: 'Join',
    size: 'sm',
    onButtonClick: () => console.log('Button clicked')
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:"Small Card (Mobile Variant)",...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var f,J,C,k,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Card {...args} buttonIcon={<FiUser />} />,
  args: {
    title: 'Join the family.',
    buttonText: 'Join',
    size: 'lg',
    onButtonClick: () => console.log('Button clicked')
  }
}`,...(C=(J=s.parameters)==null?void 0:J.docs)==null?void 0:C.source},description:{story:"Large Card (Desktop Variant)",...(h=(k=s.parameters)==null?void 0:k.docs)==null?void 0:h.description}}};var v,B,I,T,z;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">\r
            <div>\r
                <p className="mb-2 text-sm text-text-secondary">Desktop Variant</p>\r
                <Card title="Join the family." buttonText="Join" buttonIcon={<FiUser />} size="lg" />\r
            </div>\r
            <div>\r
                <p className="mb-2 text-sm text-text-secondary">Mobile Variant</p>\r
                <Card title="Join the family." buttonText="Join" buttonIcon={<FiUser />} size="sm" />\r
            </div>\r
        </div>
}`,...(I=(B=a.parameters)==null?void 0:B.docs)==null?void 0:I.source},description:{story:"Responsive Card Layout",...(z=(T=a.parameters)==null?void 0:T.docs)==null?void 0:z.description}}};const M=["Default","Small","Large","Responsive"];export{r as Default,s as Large,a as Responsive,n as Small,M as __namedExportsOrder,w as default};
