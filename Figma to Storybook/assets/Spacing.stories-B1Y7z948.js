import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{a as n,c as r,d as i,n as a,o,r as s,u as c}from"./Foundations-D6GR3Igb.js";var l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),l=t(),u={title:`Foundations/Spacing & radius`,tags:[`!autodocs`],parameters:{controls:{disable:!0}}},d={render:()=>(0,l.jsx)(`div`,{className:`fd`,children:(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h2`,{children:`space primitives`}),(0,l.jsx)(`table`,{children:(0,l.jsx)(`tbody`,{children:c.map(([e,t])=>(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:s(e)})}),(0,l.jsx)(`td`,{children:t}),(0,l.jsx)(`td`,{children:(0,l.jsx)(`div`,{className:`fd__bar`,style:{width:`var(${e})`}})})]},e))})})]})})},f=({value:e})=>{let t=a(e);return(0,l.jsxs)(l.Fragment,{children:[o.desktop[t],` `,(0,l.jsx)(`code`,{className:`fd__muted`,children:s(t)})]})},p={render:()=>(0,l.jsx)(`div`,{className:`fd`,children:(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h2`,{children:`space semantics`}),(0,l.jsxs)(`table`,{children:[(0,l.jsx)(`thead`,{children:(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`th`,{children:`Token`}),(0,l.jsx)(`th`,{children:`>1280`}),(0,l.jsx)(`th`,{children:`>800`}),(0,l.jsx)(`th`,{children:`<800`})]})}),(0,l.jsx)(`tbody`,{children:i.map(e=>(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{children:(0,l.jsx)(`code`,{children:s(e)})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(f,{value:o.desktop[e]})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(f,{value:o.tablet[e]})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(f,{value:o.mobile[e]})})]},e))})]})]})})},m={render:()=>(0,l.jsx)(`div`,{className:`fd`,children:(0,l.jsxs)(`section`,{children:[(0,l.jsx)(`h2`,{children:`radius primitives`}),(0,l.jsx)(`div`,{style:{display:`flex`,gap:24},children:r.map(([e,t])=>(0,l.jsxs)(`div`,{className:`fd__swatch`,children:[(0,l.jsx)(`div`,{className:`fd__radius`,style:{borderRadius:`var(${e})`}}),(0,l.jsx)(`code`,{children:s(e)}),(0,l.jsx)(`span`,{className:`fd__muted`,children:t})]},e))})]})})},h=[`SpacePrimitives`,`SpaceSemantics`,`Radius`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fd">
      <section>
        <h2>space primitives</h2>
        <table>
          <tbody>
            {spacePrimitives.map(([name, value]) => <tr key={name}>
                <td>
                  <code>{figmaName(name)}</code>
                </td>
                <td>{value}</td>
                <td>
                  <div className="fd__bar" style={{
                width: \`var(\${name})\`
              }} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </section>
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Figma collection "space primitives"`,...d.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fd">
      <section>
        <h2>space semantics</h2>
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>&gt;1280</th>
              <th>&gt;800</th>
              <th>&lt;800</th>
            </tr>
          </thead>
          <tbody>
            {spaceSemantics.map(name => <tr key={name}>
                <td>
                  <code>{figmaName(name)}</code>
                </td>
                <td>
                  <Alias value={modes.desktop[name]} />
                </td>
                <td>
                  <Alias value={modes.tablet[name]} />
                </td>
                <td>
                  <Alias value={modes.mobile[name]} />
                </td>
              </tr>)}
          </tbody>
        </table>
      </section>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Figma collection "space semantics", modes >1280, >800 and <800`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="fd">
      <section>
        <h2>radius primitives</h2>
        <div style={{
        display: 'flex',
        gap: 24
      }}>
          {radiusPrimitives.map(([name, value]) => <div className="fd__swatch" key={name}>
              <div className="fd__radius" style={{
            borderRadius: \`var(\${name})\`
          }} />
              <code>{figmaName(name)}</code>
              <span className="fd__muted">{value}</span>
            </div>)}
        </div>
      </section>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Figma collection "radius primitives"`,...m.parameters?.docs?.description}}}})))()}g();export{m as Radius,d as SpacePrimitives,p as SpaceSemantics,h as __namedExportsOrder,u as default};