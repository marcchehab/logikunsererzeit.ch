import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer(),
}

// Sort function for explorer
const explorer = Component.Explorer({
  sortFn: (a, b) => {
    if ((!a.file && !b.file) || (a.file && b.file)) {
      // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
      // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"

      const aIsDate = /^\d{4}/.test(a.name)
      const bIsDate = /^\d{4}/.test(b.name)

      if (aIsDate && bIsDate) {
        // Reverse order so that newest come first
        return (
          -1 *
          a.name.localeCompare(b.name, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        )
      }
      if (aIsDate && !bIsDate) {
        return -1
      }
      if (!aIsDate && bIsDate) {
        return 1
      }

      return a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    
    if (a.file && !b.file) {
      return 1
    } else {
      return -1
    }
  },
})

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.InteractiveLogo()),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.Lang(),
    Component.DesktopOnly(explorer),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.MobileOnly(explorer),
    Component.Backlinks(),
    Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.Lang(),
    Component.DesktopOnly(explorer),
  ],
  right: [Component.MobileOnly(explorer)],
}
