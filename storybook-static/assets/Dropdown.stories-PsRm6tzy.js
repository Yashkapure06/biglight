import{u as e}from"./jsxRuntime.module-BVeQMvAP.js";import{D as a}from"./Dropdown-CdwiYYWg.js";import{A as t}from"./Annotation-CmxsFStq.js";import{h as l}from"./index-K_6WTz9h.js";import"./preact.module-qK8Eh564.js";import"./compat.module-DBDShv_f.js";import"./iconBase-nq0NtJg4.js";const W={title:"Library/Dropdown",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},required:{control:"boolean"},iconLeft:{control:!1,table:{type:{summary:"ReactNode"}}}}},r=[{value:"retail",label:"Retail Store Owner"},{value:"convenience",label:"Convenience Shop"},{value:"hospitality",label:"Hospitality"},{value:"catering",label:"Catering & Events"},{value:"online",label:"Online/Delivery Only"}],s={render:p=>e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,placeholder:"Label",iconLeft:e(l,{})})}),args:{label:"Label",required:!0,options:r,placeholder:"Label"}},i={render:p=>e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,placeholder:"Label",defaultFocused:!0,iconLeft:e(l,{})})}),args:{label:"Label",required:!0,options:r,placeholder:"Label",defaultFocused:!0},parameters:{docs:{description:{story:"Click the dropdown to see the focused/open state (chevron up)."}}}},o={render:p=>e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,value:"retail",placeholder:"Label",iconLeft:e(l,{})})}),args:{label:"Label",required:!0,options:r,value:"retail"}},d={render:p=>e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,value:"retail",placeholder:"Label",disabled:!0,iconLeft:e(l,{})})}),args:{label:"Label",required:!0,options:r,value:"retail",disabled:!0}},n={render:p=>e("div",{className:"inline-grid grid-cols-[auto_1fr]",children:e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,placeholder:"Label",defaultOpen:!0,iconLeft:e(l,{})})})}),args:{label:"Label",required:!0,options:r,defaultOpen:!0,placeholder:"Label"},parameters:{docs:{description:{story:"Opened by default to show the menu."}}}},c={render:()=>e("div",{className:"inline-grid grid-cols-[auto_1fr]",children:[e("div",{className:"flex flex-col items-end justify-between py-7 h-full gap-0",children:[e("div",{className:"h-20 flex items-center",children:e(t,{variant:"left",children:"Default"})}),e("div",{className:"h-20 flex items-center",children:e(t,{variant:"left",children:"Focus"})}),e("div",{className:"h-20 flex items-center",children:e(t,{variant:"left",children:"Selected"})}),e("div",{className:"h-20 flex items-center",children:e(t,{variant:"left",children:"Disabled"})}),e("div",{className:"h-20 flex items-center",children:e(t,{variant:"left",children:"Opened"})})]}),e("div",{className:"border border-dashed border-grey-400 rounded-lg bg-white px-8 py-6 my-2 flex flex-col gap-6 justify-between",children:[e("div",{style:{height:"5rem"},className:"flex items-center",children:e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,placeholder:"Label",iconLeft:e(l,{})})})}),e("div",{style:{height:"5rem"},className:"flex items-center",children:e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,placeholder:"Label",defaultFocused:!0,iconLeft:e(l,{})})})}),e("div",{style:{height:"5rem"},className:"flex items-center",children:e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,value:"retail",iconLeft:e(l,{})})})}),e("div",{style:{height:"5rem"},className:"flex items-center",children:e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,value:"retail",disabled:!0,iconLeft:e(l,{})})})}),e("div",{style:{height:"5rem"},className:"flex items-center",children:e("div",{className:"w-80",children:e(a,{label:"Label",required:!0,options:r,placeholder:"Label",defaultOpen:!0,iconLeft:e(l,{})})})})]})]})};var m,u,b,v,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} placeholder="Label" iconLeft={<FiClock />} />\r
                    </div>,
  args: {
    label: 'Label',
    required: true,
    options: sampleOptions,
    placeholder: 'Label'
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:"Default State",...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.description}}};var f,L,g,N,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} placeholder="Label" defaultFocused iconLeft={<FiClock />} />\r
                    </div>,
  args: {
    label: 'Label',
    required: true,
    options: sampleOptions,
    placeholder: 'Label',
    defaultFocused: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the dropdown to see the focused/open state (chevron up).'
      }
    }
  }
}`,...(g=(L=i.parameters)==null?void 0:L.docs)==null?void 0:g.source},description:{story:`Focus State\r
(Click to open and see focus state)`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.description}}};var y,O,x,q,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} value="retail" placeholder="Label" iconLeft={<FiClock />} />\r
                    </div>,
  args: {
    label: 'Label',
    required: true,
    options: sampleOptions,
    value: 'retail'
  }
}`,...(x=(O=o.parameters)==null?void 0:O.docs)==null?void 0:x.source},description:{story:"Selected State",...(D=(q=o.parameters)==null?void 0:q.docs)==null?void 0:D.description}}};var F,S,C,k,A;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} value="retail" placeholder="Label" disabled iconLeft={<FiClock />} />\r
                    </div>,
  args: {
    label: 'Label',
    required: true,
    options: sampleOptions,
    value: 'retail',
    disabled: true
  }
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source},description:{story:"Disabled State",...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};var _,j,R,E,H;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <div className="inline-grid grid-cols-[auto_1fr]">\r
    <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} placeholder="Label" defaultOpen iconLeft={<FiClock />} />\r
                    </div>\r
                    </div>,
  args: {
    label: 'Label',
    required: true,
    options: sampleOptions,
    defaultOpen: true,
    placeholder: 'Label'
  },
  parameters: {
    docs: {
      description: {
        story: 'Opened by default to show the menu.'
      }
    }
  }
}`,...(R=(j=n.parameters)==null?void 0:j.docs)==null?void 0:R.source},description:{story:`Opened State\r
(Click to see dropdown menu)`,...(H=(E=n.parameters)==null?void 0:E.docs)==null?void 0:H.description}}};var T,z,B,G,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="inline-grid grid-cols-[auto_1fr]">\r
            {/* Left side annotations */}\r
            <div className="flex flex-col items-end justify-between py-7 h-full gap-0">\r
                <div className="h-20 flex items-center"><Annotation variant="left">Default</Annotation></div>\r
                <div className="h-20 flex items-center"><Annotation variant="left">Focus</Annotation></div>\r
                <div className="h-20 flex items-center"><Annotation variant="left">Selected</Annotation></div>\r
                <div className="h-20 flex items-center"><Annotation variant="left">Disabled</Annotation></div>\r
                <div className="h-20 flex items-center"><Annotation variant="left">Opened</Annotation></div>\r
            </div>\r
\r
            {/* Right side dropdowns */}\r
            <div className="border border-dashed border-grey-400 rounded-lg bg-white px-8 py-6 my-2 flex flex-col gap-6 justify-between">\r
                <div style={{
        height: '5rem'
      }} className="flex items-center">\r
                    <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} placeholder="Label" iconLeft={<FiClock />} />\r
                    </div>\r
                </div>\r
                <div style={{
        height: '5rem'
      }} className="flex items-center">\r
                    <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} placeholder="Label" defaultFocused iconLeft={<FiClock />} />\r
                    </div>\r
                </div>\r
                <div style={{
        height: '5rem'
      }} className="flex items-center">\r
                    <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} value="retail" iconLeft={<FiClock />} />\r
                    </div>\r
                </div>\r
                <div style={{
        height: '5rem'
      }} className="flex items-center">\r
                    <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} value="retail" disabled iconLeft={<FiClock />} />\r
                    </div>\r
                </div>\r
                <div style={{
        height: '5rem'
      }} className="flex items-center">\r
                    <div className="w-80">\r
                        <Dropdown label="Label" required options={sampleOptions} placeholder="Label" defaultOpen iconLeft={<FiClock />} />\r
                    </div>\r
                </div>\r
            </div>\r
        </div>
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"All States Comparison",...(I=(G=c.parameters)==null?void 0:G.docs)==null?void 0:I.description}}};const X=["Default","Focus","Selected","Disabled","Opened","AllStates"];export{c as AllStates,s as Default,d as Disabled,i as Focus,n as Opened,o as Selected,X as __namedExportsOrder,W as default};
