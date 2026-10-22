import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{i as n,r}from"./react-DITjJg24.js";import{a as i,o as a}from"./blocks-BBdgLqgr.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`portfolio-design-system`,children:`Portfolio design system`}),`
`,(0,c.jsxs)(t.p,{children:[`React components built from the Figma page `,(0,c.jsx)(t.strong,{children:`❖ Components`}),`
(`,(0,c.jsx)(t.a,{href:`https://www.figma.com/design/bHRn6PCs8dDNpgPaYAnZ0p/My-project?node-id=1-57`,rel:`nofollow`,children:`My-project`}),`).
Each component has the same properties and default content as in Figma. The real page content lives only in the app.`]}),`
`,(0,c.jsx)(t.h2,{id:`sections`,children:`Sections`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Foundations`}),`: colours, typography, spacing and radius. They're read straight from `,(0,c.jsx)(t.code,{children:`src/tokens.css`}),`, a 1:1 copy of the Figma variable collections and modes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Primitives`}),`: Button, Link button, Icon, Logo.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Layout`}),`: Navigation, Footer.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sections`}),`: Hero, Project card, About, Picture, Skill, Skills.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Every component has a `,(0,c.jsx)(t.strong,{children:`Docs`}),` page with its props (the Figma properties) and all its stories.`]}),`
`,(0,c.jsx)(t.h2,{id:`toolbar`,children:`Toolbar`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Theme`}),`: Figma mode of `,(0,c.jsx)(t.code,{children:`colour semantics`}),` (light / dark).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Frame`}),`: Figma breakpoint mode (`,(0,c.jsx)(t.code,{children:`>1280`}),`, `,(0,c.jsx)(t.code,{children:`>800`}),`, `,(0,c.jsx)(t.code,{children:`<800`}),`) and frame width. Section stories set it themselves: Desktop 1280, Tablet 800, Mobile 375. The frame height hugs the content, like a Figma frame.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`using-a-component`,children:`Using a component`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { DsRoot, ProjectCard } from './components';

<DsRoot>                              {/* sets the breakpoint mode from the window width */}
  <ProjectCard
    headlineText="My project"
    contentText="What I did and why."
    hasBg={false}
  >
    <img src={cover} alt="" />         {/* image slot, 16:9 */}
  </ProjectCard>
</DsRoot>
`})}),`
`,(0,c.jsx)(t.h2,{id:`when-figma-changes`,children:`When Figma changes`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Variables: update `,(0,c.jsx)(t.code,{children:`src/tokens.css`}),` (same names as Figma, `,(0,c.jsx)(t.code,{children:`/`}),` → `,(0,c.jsx)(t.code,{children:`-`}),`). Foundations update by themselves.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Text styles: update `,(0,c.jsx)(t.code,{children:`src/typography.css`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Components: update the matching folder in `,(0,c.jsx)(t.code,{children:`src/components/`}),`. Props keep the Figma property names.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};