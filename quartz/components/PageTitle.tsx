import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { InteractiveLogo } from "./InteractiveLogo"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
      <InteractiveLogo />
  )
}

PageTitle.css = `
.cls-1, .cls-2 {
  fill: #fff;
}

.cls-3 {
  fill: #6fb3f7;
}

.cls-2, .cls-4, .cls-5 {
  opacity: .4;
}

.cls-6 {
  fill: #1c7bff;
}

.cls-7 {
  fill: #0256aa;
}

.cls-8 {
  fill: #303030;
}

.cls-4 {
  fill: #f4738f;
}

.cls-9 {
  opacity: .3;
}

.cls-10, .cls-11, .cls-5 {
  fill: #f9f7f2;
}

.cls-12 {
  fill: #f7b293;
}

.cls-11 {
  opacity: .2;
}

.cls-13 {
  fill: #f8b297;
}

.cls-14 {
  fill: #ea8e75;
}

.cls-15 {
  fill: #d5a28d;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
