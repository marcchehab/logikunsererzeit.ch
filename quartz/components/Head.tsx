import { i18n } from "../i18n"
import {
  FullSlug,
  joinSegments,
  pathToRoot,
  FilePath,
  slugifyFilePath,
  transformLink,
  TransformOptions,
  stripSlashes,
} from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { googleFontHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({
    ctx,
    cfg,
    fileData,
    externalResources,
  }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title
    const description =
      fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description
    const { css, js } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)

    const iconPath = joinSegments(baseDir, "static/icon.svg")
    let ogImageUrl = `https://${cfg.baseUrl}/static/og-image.png`

    if (fileData.frontmatter?.ogimage) {
      const ogImagePathCustom = (fileData.frontmatter?.ogimage as string).trim()
      const transformOptions: TransformOptions = {
        strategy: "shortest",
        allSlugs: ctx.allSlugs,
        type: "full",
      }

      ogImageUrl = `https://${cfg.baseUrl}/${transformLink(
        fileData.slug!,
        ogImagePathCustom as FilePath,
        transformOptions,
      )}`
    }

    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
          </>
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {cfg.baseUrl && <meta property="og:image" content={ogImageUrl} />}
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="630" />
        <link rel="icon" href={iconPath} />
        <meta name="description" content={description} />
        <meta name="generator" content="Quartz" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        {cfg.baseUrl && <meta property="twitter:image" content={ogImageUrl} />}
        <meta name="twitter:creator" content="@marcchehab" />
        {css.map((href) => (
          <link key={href} href={href} rel="stylesheet" type="text/css" spa-preserve />
        ))}
        {js
          .filter((resource) => resource.loadTime === "beforeDOMReady")
          .map((res) => JSResourceToScriptElement(res, true))}
      </head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
