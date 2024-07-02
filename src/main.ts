import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { fullName } from './bases/01-const-let'; './bases/01-const-let';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>${fullName}</h1>
  </div>
`