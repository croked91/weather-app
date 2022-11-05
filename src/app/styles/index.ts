import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
${normalize}
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }

*,
*::before,
*::after {
box-sizing: border-box;
}

ul[class],
ol[class] {
padding: 0;
}

body,
{
margin: 0;
}

body {
min-height: 100vh;
scroll-behavior: smooth;
text-rendering: optimizeSpeed;
line-height: 1.5;
}

ul[class],
ol[class] {
list-style: none;
}

a:not([class]) {
text-decoration-skip-ink: auto;
}

img {
max-width: 100%;
display: block;
}

article > * + * {
margin-top: 1em;
}

input,
button,
textarea,
select {
font: inherit;
}

@media (prefers-reduced-motion: reduce) {
* {
animation-duration: 0.01ms !important;
animation-iteration-count: 1 !important;
transition-duration: 0.01ms !important;
scroll-behavior: auto !important;
}
}
`