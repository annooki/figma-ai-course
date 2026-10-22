import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,r as i}from"./Icon-CFmZzyqn.js";import{r as a,t as o}from"./Button-Drr757hN.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s=t(),i(),a(),c=n(),l={title:`Primitives/Button`,component:o,argTypes:{variant:{control:`inline-radio`,options:[`primary`,`secondary`,`tertiary`]},state:{control:`inline-radio`,options:[`default`,`hover`,`active`,`focus`]},swapIcon:{control:`select`,options:r}}},u={},d={args:{variant:`secondary`}},f={args:{variant:`tertiary`}},p=[`primary`,`secondary`,`tertiary`],m=[`default`,`hover`,`active`,`focus`],h={parameters:{controls:{disable:!0}},render:()=>(0,c.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`auto repeat(3, auto)`,gap:24,alignItems:`center`},children:[(0,c.jsx)(`span`,{}),p.map(e=>(0,c.jsx)(`strong`,{style:{fontFamily:`var(--font-family-syne)`,color:`var(--text-primary)`},children:e},e)),m.map(e=>(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)(`span`,{style:{fontFamily:`var(--font-family-syne)`,color:`var(--text-secondary)`},children:e}),p.map(t=>(0,c.jsx)(o,{variant:t,state:e},t+e))]},e))]})},g=[`Primary`,`Secondary`,`Tertiary`,`AllVariants`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto repeat(3, auto)',
    gap: 24,
    alignItems: 'center'
  }}>
      <span />
      {variants.map(v => <strong key={v} style={{
      fontFamily: 'var(--font-family-syne)',
      color: 'var(--text-primary)'
    }}>{v}</strong>)}
      {states.map(s => <Fragment key={s}>
          <span style={{
        fontFamily: 'var(--font-family-syne)',
        color: 'var(--text-secondary)'
      }}>{s}</span>
          {variants.map(v => <Button key={v + s} variant={v} state={s} />)}
        </Fragment>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Every variant and state, laid out like the Figma component set.`,...h.parameters?.docs?.description}}}})))()}_();export{h as AllVariants,u as Primary,d as Secondary,f as Tertiary,g as __namedExportsOrder,l as default};