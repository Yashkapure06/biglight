import{u as e}from"./jsxRuntime.module-BVeQMvAP.js";import{I as r}from"./Input-BwEKsLKK.js";import{A as a}from"./Annotation-CmxsFStq.js";import"./preact.module-qK8Eh564.js";import"./compat.module-DBDShv_f.js";import"./index-tysQDwRp.js";import"./iconBase-nq0NtJg4.js";const Z={title:"Library/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:["default","error","success"]},disabled:{control:"boolean"},required:{control:"boolean"}}},l={args:{label:"Input label",required:!0,placeholder:"Input label"}},s={args:{label:"Label",required:!0,placeholder:"Input label"},parameters:{docs:{description:{story:"Click into the input field to see the focus state."}}}},t={args:{label:"Label",required:!0,value:"Placeholder",placeholder:"Input label"}},n={args:{label:"Label",required:!0,disabled:!0,value:"Input label",placeholder:"Input label"}},i={args:{label:"Label",required:!0,state:"error",value:"Placeholder",errorMessage:"This field has an error"}},o={args:{label:"Label",required:!0,state:"success",value:"Placeholder",successMessage:"This field is valid"}},c={render:()=>e("div",{className:"space-y-6 w-96",children:[e("div",{className:"flex items-center gap-4",children:[e("div",{className:"w-64",children:e(r,{label:"Input label",required:!0,placeholder:"Input label"})}),e(a,{variant:"right",children:"Default"})]}),e("div",{className:"flex items-center gap-4",children:[e("div",{className:"w-64",children:e(r,{label:"Label",required:!0,placeholder:"Input label"})}),e(a,{variant:"right",children:"Focus"})]}),e("div",{className:"flex items-center gap-4",children:[e("div",{className:"w-64",children:e(r,{label:"Label",required:!0,value:"Placeholder"})}),e(a,{variant:"right",children:"Filled"})]}),e("div",{className:"flex items-center gap-4",children:[e("div",{className:"w-64",children:e(r,{label:"Label",required:!0,disabled:!0,value:"Input label"})}),e(a,{variant:"right",children:"Disabled"})]}),e("div",{className:"flex items-center gap-4",children:[e("div",{className:"w-64",children:e(r,{label:"Label",required:!0,state:"error",value:"Placeholder"})}),e(a,{variant:"right",children:"Error"})]}),e("div",{className:"flex items-center gap-4",children:[e("div",{className:"w-64",children:e(r,{label:"Label",required:!0,state:"success",value:"Placeholder"})}),e(a,{variant:"right",children:"Success"})]})]})};var d,u,p,b,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    placeholder: 'Input label'
  }
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source},description:{story:`Default State\r
No label above, placeholder inside, light grey background`,...(m=(b=l.parameters)==null?void 0:b.docs)==null?void 0:m.description}}};var v,h,g,f,I;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    placeholder: 'Input label'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click into the input field to see the focus state.'
      }
    }
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:`Focus State\r
Label appears above, white background, cursor visible`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.description}}};var N,q,L,S,A;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    value: 'Placeholder',
    placeholder: 'Input label'
  }
}`,...(L=(q=t.parameters)==null?void 0:q.docs)==null?void 0:L.source},description:{story:`Filled State\r
Label above, value inside, white background`,...(A=(S=t.parameters)==null?void 0:S.docs)==null?void 0:A.description}}};var w,x,y,P,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    disabled: true,
    value: 'Input label',
    placeholder: 'Input label'
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:`Disabled State\r
Label above, faded text, muted grey background`,...(D=(P=n.parameters)==null?void 0:P.docs)==null?void 0:D.description}}};var F,k,E,T,M;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    state: 'error',
    value: 'Placeholder',
    errorMessage: 'This field has an error'
  }
}`,...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.source},description:{story:`Error State\r
Red label, red border, red icon, red required text`,...(M=(T=i.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};var C,_,G,O,R;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true,
    state: 'success',
    value: 'Placeholder',
    successMessage: 'This field is valid'
  }
}`,...(G=(_=o.parameters)==null?void 0:_.docs)==null?void 0:G.source},description:{story:`Success State\r
Green border, green checkmark icon`,...(R=(O=o.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var j,z,B,H,J;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-96">\r
            <div className="flex items-center gap-4">\r
                <div className="w-64">\r
                    <Input label="Input label" required placeholder="Input label" />\r
                </div>\r
                <Annotation variant="right">Default</Annotation>\r
            </div>\r
            <div className="flex items-center gap-4">\r
                <div className="w-64">\r
                    <Input label="Label" required placeholder="Input label" />\r
                </div>\r
                <Annotation variant="right">Focus</Annotation>\r
            </div>\r
            <div className="flex items-center gap-4">\r
                <div className="w-64">\r
                    <Input label="Label" required value="Placeholder" />\r
                </div>\r
                <Annotation variant="right">Filled</Annotation>\r
            </div>\r
            <div className="flex items-center gap-4">\r
                <div className="w-64">\r
                    <Input label="Label" required disabled value="Input label" />\r
                </div>\r
                <Annotation variant="right">Disabled</Annotation>\r
            </div>\r
            <div className="flex items-center gap-4">\r
                <div className="w-64">\r
                    <Input label="Label" required state="error" value="Placeholder" />\r
                </div>\r
                <Annotation variant="right">Error</Annotation>\r
            </div>\r
            <div className="flex items-center gap-4">\r
                <div className="w-64">\r
                    <Input label="Label" required state="success" value="Placeholder" />\r
                </div>\r
                <Annotation variant="right">Success</Annotation>\r
            </div>\r
        </div>
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"All States",...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.description}}};const $=["Default","Focus","Filled","Disabled","Error","Success","AllStates"];export{c as AllStates,l as Default,n as Disabled,i as Error,t as Filled,s as Focus,o as Success,$ as __namedExportsOrder,Z as default};
