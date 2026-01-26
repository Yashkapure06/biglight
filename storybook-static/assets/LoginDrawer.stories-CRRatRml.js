import{u as e}from"./jsxRuntime.module-BVeQMvAP.js";import{A as S,y as ce,d as w}from"./compat.module-DBDShv_f.js";import{B as D}from"./Button-B5y4Xxru.js";import{I as de}from"./Input-BwEKsLKK.js";import{D as me}from"./Dropdown-CdwiYYWg.js";import{C as ue}from"./Card-ZAQdcZ_c.js";import{l as pe,k as fe}from"./index-K_6WTz9h.js";import{A as M}from"./Annotation-CmxsFStq.js";import"./preact.module-qK8Eh564.js";import"./index-tysQDwRp.js";import"./iconBase-nq0NtJg4.js";function n({isOpen:r,onClose:p,onSubmit:N,className:ee="",presentation:f="modal",variant:i="desktop"}){const s=S(null),g=S(null);ce(()=>{if(!r||f!=="modal")return;if(g.current=document.activeElement,s.current){const o=s.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');o&&o.focus()}const a=o=>{if(o.key!=="Tab"||!s.current)return;const x=s.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),y=x[0],v=x[x.length-1];o.shiftKey?document.activeElement===y&&(o.preventDefault(),v==null||v.focus()):document.activeElement===v&&(o.preventDefault(),y==null||y.focus())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a),g.current&&g.current.focus()}},[r,f]);const t=i==="mobile"?{panelMaxW:"max-w-[390px]",contentMaxW:"max-w-[320px] w-full",padding:"px-10 pt-12 pb-10",topPad:"pt-4",closeRight:"right-8",titleClass:"text-2xl leading-tight",titleBreakLines:!1,subtitleMt:"mt-3",formMt:"mt-6",formGap:"space-y-4",buttonsPt:"pt-3",cardMt:"mt-6",cardSize:"sm",cardButtonSize:"sm",actionButtonSize:"md"}:{panelMaxW:"max-w-[480px]",contentMaxW:"max-w-[380px] w-full",padding:"px-12 pt-14 pb-12",topPad:"",closeRight:"right-10",titleClass:"text-[44px] leading-[1.02]",titleBreakLines:!0,subtitleMt:"mt-6",formMt:"mt-8",formGap:"space-y-6",buttonsPt:"pt-6",cardMt:"mt-10",cardSize:"md",cardButtonSize:"md",actionButtonSize:"md"},[k,te]=w(""),[b,re]=w(""),[C,h]=w(""),ae=[{value:"retail",label:"Retail Store Owner"},{value:"convenience",label:"Convenience Shop"},{value:"hospitality",label:"Hospitality"},{value:"catering",label:"Catering & Events"},{value:"online",label:"Online/Delivery Only"}],oe=a=>{if(a.preventDefault(),!b||!b.includes("@")){h("Please enter a valid email address");return}h(""),N&&N({customerType:k,email:b})},ne=a=>{a.target===a.currentTarget&&p()},ie=a=>{a.key==="Escape"&&r&&p()};if(!r)return null;const se=()=>t.titleBreakLines?e("h2",{id:"login-drawer-title",className:`font-body text-[#fc4c02] ${t.titleClass} font-medium`,children:[e("span",{className:"block",children:"Log into your"}),e("span",{className:"block",children:"account"})]}):e("h2",{id:"login-drawer-title",className:`font-body text-[#fc4c02] ${t.titleClass} font-medium`,children:"Log into your account"}),le=()=>i==="mobile"?e("p",{className:"text-text-primary text-sm leading-snug max-w-[260px]",children:[e("span",{className:"block",children:"Please enter your email for a one-time-"}),e("span",{className:"block",children:"only code"})]}):e("p",{className:"text-text-primary text-sm leading-snug text-left font-body",style:{fontFamily:"var(--font-body), Inter, sans-serif"},children:"Please enter your email for a one-time-only code"}),L=()=>e("div",{className:["relative","bg-white","w-full",t.panelMaxW,f==="panel"?"rounded-none":"rounded-none shadow-xl",t.padding,"border","border-grey-300",i==="desktop"?"h-[850px]":"h-[650px]",ee].filter(Boolean).join(" "),children:[e("button",{onClick:p,className:["absolute","top-8",t.closeRight,"p-2","text-text-primary","hover:text-text-secondary","focus:outline-none"].join(" "),"aria-label":"Close login drawer",children:e(pe,{size:18})}),e("div",{className:t.topPad,children:e("div",{className:`${t.contentMaxW} mx-auto text-left`,children:[e(se,{}),e("div",{className:t.subtitleMt,children:e(le,{})}),e("form",{onSubmit:oe,className:[t.formMt,t.formGap,"w-full","text-left"].join(" "),children:[e(me,{ariaLabel:"Customer type",required:!0,showRequiredIndicator:!1,options:ae,value:k,onChange:te,placeholder:"Customer type"}),e(de,{label:"Email",required:!0,showRequiredIndicator:!1,value:b,onChange:a=>{re(a.target.value),h("")},placeholder:"Email",state:C?"error":"default",errorMessage:C}),e("div",{className:`space-y-3 ${t.buttonsPt}`,children:[e(D,{type:"submit",variant:"secondary",size:t.actionButtonSize,contextVariant:i,className:"w-full justify-center",children:"Continue"}),e(D,{type:"button",variant:"tertiary",size:t.actionButtonSize,contextVariant:i,onClick:p,className:"w-full justify-center",children:"Login with your password"})]})]}),e("div",{className:t.cardMt,children:e(ue,{title:`Join the
family.`,buttonText:"Become a member",buttonIcon:e(fe,{}),size:t.cardSize,buttonSize:t.cardButtonSize,variant:i,className:"rounded-[20px]",onButtonClick:()=>console.log("Join clicked")})})]})})]});return f==="panel"?e(L,{}):e("div",{ref:s,className:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:ne,onKeyDown:ie,role:"dialog","aria-modal":"true","aria-labelledby":"login-drawer-title",children:[e("div",{className:"absolute inset-0 bg-black bg-opacity-40"}),e(L,{})]})}const Se={title:"Library/LoginDrawer",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"]},l={render:()=>e("div",{className:"min-h-screen flex items-center justify-center p-8",style:{backgroundColor:"#f5f5f0"},children:e(n,{isOpen:!0,onClose:()=>{},onSubmit:r=>{console.log("Form submitted:",r)},variant:"desktop"})})},c={render:()=>e("div",{className:"min-h-screen",children:e(n,{isOpen:!0,onClose:()=>{},onSubmit:r=>{console.log("Form submitted:",r)},presentation:"panel",variant:"desktop"})}),parameters:{viewport:{defaultViewport:"desktop"}}},d={render:()=>e("div",{className:"min-h-screen",children:e(n,{isOpen:!0,onClose:()=>{},onSubmit:r=>{console.log("Form submitted:",r)},presentation:"panel",variant:"mobile"})}),parameters:{viewport:{defaultViewport:"mobile1"}}},m={render:()=>e("div",{className:"min-h-screen flex items-center justify-center p-8",style:{backgroundColor:"#f5f5f0"},children:e(n,{isOpen:!0,onClose:()=>{},onSubmit:r=>{alert(`Form submitted!
Customer Type: ${r.customerType}
Email: ${r.email}`)},variant:"desktop"})})},u={render:()=>e("div",{className:"p-6",children:e("div",{className:"inline-grid grid-cols-2 gap-12",children:[e("div",{className:"flex flex-col items-center",children:[e(M,{variant:"top",children:"Desktop"}),e("div",{className:"border border-dashed border-grey-400  rounded-lg p-10",children:e(n,{isOpen:!0,onClose:()=>{},presentation:"panel",variant:"desktop",className:"max-w-[480px]"})})]}),e("div",{className:"flex flex-col items-center ",children:[e(M,{variant:"top",children:"Mobile"}),e("div",{className:"border border-dashed border-grey-400 rounded-lg p-10",children:e(n,{isOpen:!0,onClose:()=>{},presentation:"panel",variant:"mobile",className:"max-w-[390px]"})})]})]})})};var z,E,B,F,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <div className="min-h-screen flex items-center justify-center p-8" style={{
      backgroundColor: '#f5f5f0'
    }}>\r
                <LoginDrawer isOpen={true} onClose={() => {}} onSubmit={data => {
        console.log('Form submitted:', data);
      }} variant="desktop" />\r
            </div>;
  }
}`,...(B=(E=l.parameters)==null?void 0:E.docs)==null?void 0:B.source},description:{story:"Default Login Drawer",...(O=(F=l.parameters)==null?void 0:F.docs)==null?void 0:O.description}}};var T,j,A,P,V;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <div className="min-h-screen">\r
                <LoginDrawer isOpen={true} onClose={() => {}} onSubmit={data => {
        console.log('Form submitted:', data);
      }} presentation="panel" variant="desktop" />\r
            </div>;
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...(A=(j=c.parameters)==null?void 0:j.docs)==null?void 0:A.source},description:{story:"Login Drawer - Desktop Layout",...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.description}}};var W,$,R,q,I;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <div className="min-h-screen">\r
                <LoginDrawer isOpen={true} onClose={() => {}} onSubmit={data => {
        console.log('Form submitted:', data);
      }} presentation="panel" variant="mobile" />\r
            </div>;
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(R=($=d.parameters)==null?void 0:$.docs)==null?void 0:R.source},description:{story:"Login Drawer - Mobile Layout",...(I=(q=d.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var K,G,J,_,H;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <div className="min-h-screen flex items-center justify-center p-8" style={{
      backgroundColor: '#f5f5f0'
    }}>\r
                <LoginDrawer isOpen={true} onClose={() => {}} onSubmit={data => {
        alert(\`Form submitted!\\nCustomer Type: \${data.customerType}\\nEmail: \${data.email}\`);
      }} variant="desktop" />\r
            </div>;
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"Login Drawer - With Form Validation",...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.description}}};var U,X,Q,Y,Z;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
            <div className="inline-grid grid-cols-2 gap-12">\r
                <div className="flex flex-col items-center">\r
                    <Annotation variant="top">Desktop</Annotation>\r
                    <div className="border border-dashed border-grey-400  rounded-lg p-10">\r
                        <LoginDrawer isOpen onClose={() => {}} presentation="panel" variant="desktop" className='max-w-[480px]' />\r
                    </div>\r
                </div>\r
                <div className="flex flex-col items-center ">\r
                    <Annotation variant="top">Mobile</Annotation>\r
                    <div className="border border-dashed border-grey-400 rounded-lg p-10">\r
                        <LoginDrawer isOpen onClose={() => {}} presentation="panel" variant="mobile" className='max-w-[390px]' />\r
                    </div>\r
                </div>\r
            </div>\r
        </div>
}`,...(Q=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Q.source},description:{story:"Layout (Desktop + Mobile)",...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const De=["Default","DesktopLayout","MobileLayout","WithValidation","FigmaLayout"];export{l as Default,c as DesktopLayout,u as FigmaLayout,d as MobileLayout,m as WithValidation,De as __namedExportsOrder,Se as default};
