import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{a as n,o as r,r as i}from"./Foundations-D6GR3Igb.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),a=t(),o={title:`Foundations/Typography`,tags:[`!autodocs`],parameters:{controls:{disable:!0}}},s=[{name:`text/display/md`,className:`text-display-md`,font:`Monoton Regular`,size:`--font-size-700`,lineHeight:`120%`,tracking:`2%`,sample:`UX . AI.`},{name:`text/headline/lg`,className:`text-headline-lg`,font:`Syne Bold`,size:`--font-size-500`,lineHeight:`145%`,tracking:`-2%`,sample:`About me`},{name:`text/headline/md`,className:`text-headline-md`,font:`Syne Bold`,size:`--font-size-400`,lineHeight:`125%`,tracking:`-2%`,sample:`Project headline`},{name:`text/headline/sm`,className:`text-headline-sm`,font:`Syne Bold`,size:`--font-size-200`,lineHeight:`145%`,tracking:`-0.5%`,sample:`UX & Interaction Design`},{name:`text/subtitle/md`,className:`text-subtitle-md`,font:`Syne Regular`,size:`--font-size-300`,lineHeight:`145%`,tracking:`-0.5%`,sample:`Anna Horodecka`},{name:`text/body/md`,className:`text-body-md`,font:`Poppins Regular`,size:`--font-size-100`,lineHeight:`170%`,tracking:`-0.5%`,sample:`I design complex flows that feel simple.`},{name:`text/button/md`,className:`text-button-md`,font:`Syne Medium`,size:`--font-size-100`,lineHeight:`20px`,tracking:`0%`,sample:`contact`},{name:`text/label/md`,className:`text-label-md`,font:`Syne Medium`,size:`--font-size-100`,lineHeight:`20px`,tracking:`0%`,sample:`© 2026 Anna Horodecka`},{name:`text/link/md`,className:`text-link-md`,font:`Syne Bold`,size:`--font-size-100`,lineHeight:`170%`,tracking:`-2%`,sample:`find out more  →`},{name:`text/link/md-subtle`,className:`text-link-md-subtle`,font:`Syne Medium`,size:`--font-size-100`,lineHeight:`20px`,tracking:`0%`,sample:`Contact`}],c=(e,t)=>r[t][e],l={render:()=>(0,a.jsx)(`div`,{className:`fd`,children:(0,a.jsxs)(`section`,{children:[(0,a.jsx)(`h2`,{children:`Text styles`}),(0,a.jsxs)(`p`,{className:`fd__note`,children:[`The sample uses the current Frame mode (toolbar). Class names: `,(0,a.jsx)(`code`,{children:`.text-…`}),` in `,(0,a.jsx)(`code`,{children:`src/typography.css`}),`.`]}),(0,a.jsxs)(`table`,{children:[(0,a.jsx)(`thead`,{children:(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`th`,{children:`Style`}),(0,a.jsx)(`th`,{children:`Sample`}),(0,a.jsx)(`th`,{children:`Font`}),(0,a.jsx)(`th`,{children:`Size (>1280 / >800 / <800)`}),(0,a.jsx)(`th`,{children:`Line height`}),(0,a.jsx)(`th`,{children:`Letter spacing`})]})}),(0,a.jsx)(`tbody`,{children:s.map(e=>(0,a.jsxs)(`tr`,{children:[(0,a.jsx)(`td`,{children:(0,a.jsx)(`code`,{children:e.name})}),(0,a.jsx)(`td`,{children:(0,a.jsx)(`span`,{className:e.className,style:{whiteSpace:`pre`},children:e.sample})}),(0,a.jsx)(`td`,{children:e.font}),(0,a.jsxs)(`td`,{children:[c(e.size,`desktop`),` / `,c(e.size,`tablet`),` / `,c(e.size,`mobile`),(0,a.jsx)(`br`,{}),(0,a.jsx)(`code`,{className:`fd__muted`,children:i(e.size)})]}),(0,a.jsx)(`td`,{children:e.lineHeight}),(0,a.jsx)(`td`,{children:e.tracking})]},e.name))})]})]})})},u=[`TextStyles`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fd">
      <section>
        <h2>Text styles</h2>
        <p className="fd__note">The sample uses the current Frame mode (toolbar). Class names: <code>.text-…</code> in <code>src/typography.css</code>.</p>
        <table>
          <thead>
            <tr>
              <th>Style</th>
              <th>Sample</th>
              <th>Font</th>
              <th>Size (&gt;1280 / &gt;800 / &lt;800)</th>
              <th>Line height</th>
              <th>Letter spacing</th>
            </tr>
          </thead>
          <tbody>
            {textStyles.map(s => <tr key={s.name}>
                <td>
                  <code>{s.name}</code>
                </td>
                <td>
                  <span className={s.className} style={{
                whiteSpace: 'pre'
              }}>
                    {s.sample}
                  </span>
                </td>
                <td>{s.font}</td>
                <td>
                  {px(s.size, 'desktop')} / {px(s.size, 'tablet')} / {px(s.size, 'mobile')}
                  <br />
                  <code className="fd__muted">{figmaName(s.size)}</code>
                </td>
                <td>{s.lineHeight}</td>
                <td>{s.tracking}</td>
              </tr>)}
          </tbody>
        </table>
      </section>
    </div>
}`,...l.parameters?.docs?.source},description:{story:`All Figma text styles. Sizes per breakpoint mode: >1280 / >800 / <800.`,...l.parameters?.docs?.description}}}})))()}d();export{l as TextStyles,u as __namedExportsOrder,o as default};