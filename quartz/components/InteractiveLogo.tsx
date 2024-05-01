// @ts-ignore
import riddleScript from "./scripts/interactivelogo.inline"
import styles from "./styles/interactiveLogo.scss"
import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { DesktopSvg, MobileSvg } from "./InteractiveLogoSvg"

const InteractiveLogo: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <div class="site-logo">
      <div class="desktop-only">{DesktopSvg}</div>
      <div class="mobile-only">{MobileSvg}</div>
      <div class="logo-congratulations">Gratuliere 😎</div>
    </div>
  )
}

InteractiveLogo.css = styles
InteractiveLogo.afterDOMLoaded = riddleScript

export { InteractiveLogo }
export default (() => InteractiveLogo) satisfies QuartzComponentConstructor
