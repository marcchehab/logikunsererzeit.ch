// @ts-ignore: typescript doesn't know about our inline bundling system
// so we need to silence the error
import script from "./scripts/lang.inline"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Lang: QuartzComponent = (props: QuartzComponentProps) => {
  return (
    <div class="langpicker">
      <a class="lang en" href="https://luzgarten.vercel.app/">
        DE
      </a>
      <a class="lang de" href="https://luzgarden.vercel.app/">
        EN
      </a>
    </div>
  )
}

Lang.afterDOMLoaded = script

export { Lang }
export default (() => Lang) satisfies QuartzComponentConstructor
