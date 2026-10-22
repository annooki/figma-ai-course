import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{a as n,i as r,l as i,r as a,s as o}from"./Foundations-D6GR3Igb.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{n(),s=t(),c={title:`Foundations/Colours`,tags:[`!autodocs`],parameters:{controls:{disable:!0}}},l={render:()=>(0,s.jsx)(`div`,{className:`fd`,children:[`coral`,`sand`,`neutral`].map(e=>(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h2`,{children:e}),(0,s.jsx)(`div`,{className:`fd__swatches`,children:o.filter(t=>t.family===e).map(e=>(0,s.jsxs)(`div`,{className:`fd__swatch`,children:[(0,s.jsx)(`div`,{className:`fd__chip`,style:{background:`var(${e.name})`}}),(0,s.jsx)(`code`,{children:a(e.name).replace(`color/`,``)}),(0,s.jsx)(`span`,{className:`fd__muted`,children:e.value})]},e.name))})]},e))})},u=({alias:e})=>(0,s.jsxs)(`span`,{className:`fd__mode`,children:[(0,s.jsx)(`span`,{className:`fd__dot`,style:{background:`var(${e})`}}),(0,s.jsxs)(`span`,{children:[(0,s.jsx)(`code`,{children:a(e)}),(0,s.jsx)(`br`,{}),(0,s.jsx)(`span`,{className:`fd__muted`,children:r(e)})]})]}),d={render:()=>(0,s.jsx)(`div`,{className:`fd`,children:(0,s.jsxs)(`section`,{children:[(0,s.jsx)(`h2`,{children:`colour semantics`}),(0,s.jsx)(`p`,{className:`fd__note`,children:`Each token points to a primitive, per mode. The Theme toolbar switches the mode for the components.`}),(0,s.jsxs)(`table`,{children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{children:`Token`}),(0,s.jsx)(`th`,{children:`CSS variable`}),(0,s.jsx)(`th`,{children:`light`}),(0,s.jsx)(`th`,{children:`dark`})]})}),(0,s.jsx)(`tbody`,{children:i.map(e=>(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:(0,s.jsx)(`code`,{children:a(e.name)})}),(0,s.jsx)(`td`,{children:(0,s.jsx)(`code`,{className:`fd__muted`,children:e.name})}),(0,s.jsx)(`td`,{children:(0,s.jsx)(u,{alias:e.light})}),(0,s.jsx)(`td`,{children:(0,s.jsx)(u,{alias:e.dark})})]},e.name))})]})]})})},f=[`Primitives`,`Semantics`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fd">
      {['coral', 'sand', 'neutral'].map(family => <section key={family}>
          <h2>{family}</h2>
          <div className="fd__swatches">
            {primitiveColors.filter(c => c.family === family).map(c => <div className="fd__swatch" key={c.name}>
                  <div className="fd__chip" style={{
            background: \`var(\${c.name})\`
          }} />
                  <code>{figmaName(c.name).replace('color/', '')}</code>
                  <span className="fd__muted">{c.value}</span>
                </div>)}
          </div>
        </section>)}
    </div>
}`,...l.parameters?.docs?.source},description:{story:`Figma collection "colour primitives"`,...l.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fd">
      <section>
        <h2>colour semantics</h2>
        <p className="fd__note">Each token points to a primitive, per mode. The Theme toolbar switches the mode for the components.</p>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>CSS variable</th>
              <th>light</th>
              <th>dark</th>
            </tr>
          </thead>
          <tbody>
            {semanticColors.map(c => <tr key={c.name}>
                <td>
                  <code>{figmaName(c.name)}</code>
                </td>
                <td>
                  <code className="fd__muted">{c.name}</code>
                </td>
                <td>
                  <Mode alias={c.light} />
                </td>
                <td>
                  <Mode alias={c.dark} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </section>
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Figma collection "colour semantics", modes light and dark. Use these in components.`,...d.parameters?.docs?.description}}}})))()}p();export{l as Primitives,d as Semantics,f as __namedExportsOrder,c as default};