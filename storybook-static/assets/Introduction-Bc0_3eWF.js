import"./compat.module-DBDShv_f.js";import{u as e}from"./jsxRuntime.module-BVeQMvAP.js";import{useMDXComponents as t}from"./index-B5Qz3Ko8.js";import{M as o}from"./index-CwVG8cE9.js";import{F as d,a as l,b as a,c as s,d as c,e as m,f as h,g as p}from"./index-K_6WTz9h.js";import{k as g}from"./preact.module-qK8Eh564.js";import"./iframe-BLG8d1Tm.js";import"./index-DrFu-skq.js";import"./iconBase-nq0NtJg4.js";function i(n){const r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e(g,{children:[e(o,{title:"Introduction"}),`
`,e(r.h1,{id:"biglight-component-library",children:"Biglight Component Library"}),`
`,e(r.p,{children:"Welcome to the Biglight Component Library documentation. This library provides a comprehensive set of reusable UI components built with Preact, Tailwind CSS, and design tokens."}),`
`,e(r.h2,{id:"overview",children:"Overview"}),`
`,e(r.p,{children:"This component library is designed to support multiple brands through a flexible design token system. All components are built with accessibility, responsiveness, and theme switching in mind."}),`
`,e(r.h2,{id:"features",children:"Features"}),`
`,e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.5rem",marginTop:"1.5rem",marginBottom:"2rem"},children:[e("div",{style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[e(d,{style:{fontSize:"1.5rem",color:"#fc4c02"}}),e("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:600},children:"Multi-brand Support"})]}),e("p",{style:{margin:0,color:"#6b7280",fontSize:"0.9rem"},children:"Switch between Brand A and Brand B themes seamlessly"})]}),e("div",{style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[e(l,{style:{fontSize:"1.5rem",color:"#fc4c02"}}),e("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:600},children:"Design Tokens"})]}),e("p",{style:{margin:0,color:"#6b7280",fontSize:"0.9rem"},children:"All styling is driven by design tokens from Figma"})]}),e("div",{style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[e(a,{style:{fontSize:"1.5rem",color:"#fc4c02"}}),e("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:600},children:"Accessibility"})]}),e("p",{style:{margin:0,color:"#6b7280",fontSize:"0.9rem"},children:"Full keyboard navigation, ARIA attributes, and screen reader support"})]}),e("div",{style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[e(s,{style:{fontSize:"1.5rem",color:"#fc4c02"}}),e("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:600},children:"Responsive"})]}),e("p",{style:{margin:0,color:"#6b7280",fontSize:"0.9rem"},children:"Components adapt to desktop and mobile layouts"})]}),e("div",{style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[e(c,{style:{fontSize:"1.5rem",color:"#fc4c02"}}),e("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:600},children:"Type-safe"})]}),e("p",{style:{margin:0,color:"#6b7280",fontSize:"0.9rem"},children:"Built with TypeScript for better developer experience"})]}),e("div",{style:{padding:"1rem",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[e("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"},children:[e(m,{style:{fontSize:"1.5rem",color:"#fc4c02"}}),e("h3",{style:{margin:0,fontSize:"1.1rem",fontWeight:600},children:"Performance"})]}),e("p",{style:{margin:0,color:"#6b7280",fontSize:"0.9rem"},children:"Optimized with Preact for fast rendering"})]})]}),`
`,e(r.h2,{id:"getting-started",children:"Getting Started"}),`
`,e(r.h3,{id:"installation",children:"Installation"}),`
`,e("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"},children:[e(h,{style:{fontSize:"1.25rem",color:"#6b7280"}}),e("div",{children:[e("p",{style:{margin:0,marginBottom:"0.5rem"},children:"Install dependencies:"}),e("pre",{style:{margin:0,padding:"0.75rem",background:"#f3f4f6",borderRadius:"6px",fontSize:"0.875rem",color:"#6b7280"},children:e("code",{children:"npm install"})})]})]}),`
`,e(r.h3,{id:"running-storybook",children:"Running Storybook"}),`
`,e("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"},children:[e(p,{style:{fontSize:"1.25rem",color:"#6b7280"}}),e("div",{children:[e("p",{style:{margin:0,marginBottom:"0.5rem"},children:"Start Storybook:"}),e("pre",{style:{margin:0,padding:"0.75rem",background:"#f3f4f6",borderRadius:"6px",fontSize:"0.875rem",color:"#6b7280"},children:e("code",{children:"npm run storybook"})}),e("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.875rem",color:"#6b7280"},children:["Storybook will be available at ",e("code",{style:{background:"#f3f4f6",padding:"0.125rem 0.375rem",borderRadius:"4px"},children:"http://localhost:6006/"})]})]})]}),`
`,e(r.h3,{id:"using-components",children:"Using Components"}),`
`,e(r.pre,{children:e(r.code,{className:"language-tsx",children:`import { Button } from './components/button/Button';

<Button variant="primary" size="md">
  Click me
</Button>
`})}),`
`,e(r.h2,{id:"theme-switching",children:"Theme Switching"}),`
`,e(r.p,{children:["Use the ",e(r.strong,{children:"Theme"})," toolbar control in Storybook to switch between:"]}),`
`,e(r.ul,{children:[`
`,e(r.li,{children:[e(r.strong,{children:"Brand A"}),": Orange/teal color scheme"]}),`
`,e(r.li,{children:[e(r.strong,{children:"Brand B"}),": Different visual styling"]}),`
`]}),`
`,e(r.p,{children:"Components automatically adapt their colors, fonts, and spacing based on the selected theme."}),`
`,e(r.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e(r.p,{children:["Design tokens are stored in ",e(r.code,{children:"src/tokens/source/figma-tokens.json"})," and are automatically converted to:"]}),`
`,e(r.ul,{children:[`
`,e(r.li,{children:[e(r.strong,{children:"CSS Custom Properties"})," - For runtime theme switching"]}),`
`,e(r.li,{children:[e(r.strong,{children:"Tailwind Configuration"})," - For utility class generation"]}),`
`,e(r.li,{children:[e(r.strong,{children:"TypeScript Types"})," - For type-safe token access"]}),`
`]}),`
`,e(r.p,{children:"See the individual component documentation for detailed usage examples and API references."}),`
`,e(r.h2,{id:"how-css-is-generated-from-figma-tokens",children:"How CSS is Generated from Figma Tokens"}),`
`,e(r.p,{children:["Design tokens are defined in ",e(r.code,{children:"src/tokens/source/figma-tokens.json"}),". These tokens include color, spacing, border radius, and typography values specific to each brand."]}),`
`,e(r.p,{children:"The process to generate CSS from these tokens is as follows:"}),`
`,e(r.ol,{children:[`
`,e(r.li,{children:[`
`,e(r.p,{children:[e(r.strong,{children:"Parsing Tokens:"}),e(r.br,{}),`
`,"The file ",e(r.a,{href:"./tokens/parser.ts",children:e(r.code,{children:"src/tokens/parser.ts"})})," parses and resolves token references in the JSON, ensuring that all values are direct."]}),`
`]}),`
`,e(r.li,{children:[`
`,e(r.p,{children:[e(r.strong,{children:"Structured Theme Objects:"}),e(r.br,{}),`
`,"Parsed tokens are mapped into structured TypeScript objects for each brand via ",e(r.a,{href:"./tokens/themes.ts",children:e(r.code,{children:"src/tokens/themes.ts"})}),", making tokens easy to access in components."]}),`
`]}),`
`,e(r.li,{children:[`
`,e(r.p,{children:[e(r.strong,{children:"Generating CSS Custom Properties:"}),e(r.br,{}),`
`,"The function ",e(r.a,{href:"./tokens/generate-css.ts",children:e(r.code,{children:"generateThemeCSS"})})," takes a theme (e.g., ",e(r.code,{children:"brandA"}),"), and generates a string of CSS custom properties. Each token value is converted into a CSS variable like ",e(r.code,{children:"--color-primary"}),", ",e(r.code,{children:"--spacing-md"}),", etc."]}),`
`,e(r.p,{children:"For example:"}),`
`,e(r.pre,{children:e(r.code,{className:"language-css",children:`:root[data-theme="brandA"] {
  --color-primary: #fc4c02;
  --color-background: #ffffff;
  --spacing-md: 16px;
  /* ...and all other token values */
}
:root[data-theme="brandB"] {
  --color-primary: #246bfd;
  --color-background: #f9fafd;
  /* ... */
}
`})}),`
`]}),`
`,e(r.li,{children:[`
`,e(r.p,{children:[e(r.strong,{children:"Applying the Theme:"}),e(r.br,{}),`
`,"At runtime (and in Storybook), the appropriate theme's CSS variables are attached to the ",e(r.code,{children:":root"})," element or a wrapping container by toggling the ",e(r.code,{children:"data-theme"})," attribute. Components reference these CSS variables for their styling, allowing for seamless theme switching without reloading stylesheets."]}),`
`]}),`
`]}),`
`,e(r.h2,{id:"tech-stack",children:"Tech Stack"}),`
`,e("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem",marginTop:"1rem"},children:[e("div",{style:{padding:"0.75rem 1rem",background:"#f3f4f6",borderRadius:"6px",fontSize:"0.875rem",color:"#6b7280"},children:"Preact"}),e("div",{style:{padding:"0.75rem 1rem",background:"#f3f4f6",borderRadius:"6px",fontSize:"0.875rem",color:"#6b7280"},children:"Tailwind CSS"}),e("div",{style:{padding:"0.75rem 1rem",background:"#f3f4f6",borderRadius:"6px",fontSize:"0.875rem",color:"#6b7280"},children:"Storybook"}),e("div",{style:{padding:"0.75rem 1rem",background:"#f3f4f6",borderRadius:"6px",fontSize:"0.875rem",color:"#6b7280"},children:"TypeScript"}),e("div",{style:{padding:"0.75rem 1rem",background:"#f3f4f6",borderRadius:"6px",fontSize:"0.875rem",color:"#6b7280"},children:"Vite"})]})]})}function T(n={}){const{wrapper:r}={...t(),...n.components};return r?e(r,{...n,children:e(i,{...n})}):i(n)}export{T as default};
