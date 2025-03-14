export default [
  {
    "id": "all-property",
    "title": "`all` Property",
    "description": "A property for defining the reset of all properties of an element",
    "specification": "https://www.w3.org/TR/css-cascade-3/#all-shorthand",
    "stage": 4,
    "caniuse": "css-all",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/all"
    },
    "example": "a {\n  all: initial;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/maximkoretskiy/postcss-initial"
      }
    ]
  },
  {
    "id": "any-link-pseudo-class",
    "title": "`:any-link` Hyperlink Pseudo-Class",
    "description": "A pseudo-class for matching anchor elements independent of whether they have been visited",
    "specification": "https://www.w3.org/TR/selectors-4/#any-link-pseudo",
    "stage": 2,
    "caniuse": "css-any-link",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link"
    },
    "example": "nav :any-link > span {\n  background-color: yellow;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-pseudo-class-any-link"
      }
    ]
  },
  {
    "id": "blank-pseudo-class",
    "title": "`:blank` Empty-Value Pseudo-Class",
    "description": "A pseudo-class for matching form elements when they are empty",
    "specification": "https://drafts.csswg.org/selectors-4/#blank",
    "stage": 1,
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:blank"
    },
    "example": "input:blank {\n  background-color: yellow;\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-blank-pseudo"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-blank-pseudo"
      }
    ]
  },
  {
    "id": "break-properties",
    "title": "Break Properties",
    "description": "Properties for defining the break behavior between and within boxes",
    "specification": "https://www.w3.org/TR/css-break-3/#breaking-controls",
    "stage": 3,
    "caniuse": "multicolumn",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/break-after"
    },
    "example": "a {\n  break-inside: avoid;\n  break-before: avoid-column;\n  break-after: always;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/shrpne/postcss-page-break"
      }
    ]
  },
  {
    "id": "case-insensitive-attributes",
    "title": "Case-Insensitive Attributes",
    "description": "An attribute selector matching attribute values case-insensitively",
    "specification": "https://www.w3.org/TR/selectors-4/#attribute-case",
    "stage": 2,
    "caniuse": "css-case-insensitive",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
    },
    "example": "[frame=hsides i] {\n  border-style: solid none;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/Semigradsky/postcss-attribute-case-insensitive"
      }
    ]
  },
  {
    "id": "color-adjust",
    "title": "`color-adjust` Property",
    "description": "The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images",
    "specification": "https://www.w3.org/TR/css-color-4/#color-adjust",
    "stage": 2,
    "caniuse": "css-color-adjust",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color-adjust"
    },
    "example": ".background {\n  background-color:#ccc;\n}\n.background.color-adjust {\n  color-adjust: economy;\n}\n.background.color-adjust-exact {\n  color-adjust: exact;\n}"
  },
  {
    "id": "color-contrast",
    "title": "`color-contrast()` Function",
    "description": "A function for choosing the color that contrasts the most.",
    "specification": "https://drafts.csswg.org/css-color-5/#funcdef-color-contrast",
    "stage": 1,
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast()"
    },
    "example": "p {\n  color: color-contrast(wheat vs tan, sienna, var(--myAccent), #d2691e);\n}",
    "polyfills": []
  },
  {
    "id": "color-functional-notation",
    "title": "Color Functional Notation",
    "description": "A space and slash separated notation for specifying colors",
    "specification": "https://drafts.csswg.org/css-color/#ref-for-funcdef-rgb%E2%91%A1%E2%91%A0",
    "stage": 1,
    "example": "em {\n  background-color: hsl(120deg 100% 25%);\n  box-shadow: 0 0 0 10px hwb(120deg 100% 25% / 80%);\n  color: rgb(0 255 0);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-functional-notation"
      }
    ]
  },
  {
    "id": "color-mix",
    "title": "`color-mix()` Function",
    "description": "A function for mixing colors",
    "specification": "https://drafts.csswg.org/css-color-5/#color-mix",
    "stage": -1,
    "example": "p {\n  color: color-mix(in lch, purple 50%, plum 50%);\n}",
    "polyfills": []
  },
  {
    "id": "color-mod-function",
    "title": "`color-mod()` Function",
    "description": "A function for modifying colors",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-color-mod",
    "stage": -1,
    "example": "p {\n  color: color-mod(black alpha(50%));\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-color-mod-function"
      }
    ]
  },
  {
    "id": "container-queries",
    "title": "Container Queries",
    "description": "New container property and container at rule to make changes depending on the container's size",
    "specification": "https://drafts.csswg.org/css-contain-3/#container-queries",
    "stage": 0,
    "caniuse": "css-container-queries",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries"
    },
    "example": ".container {\n  contain: layout inline-size;\n}\n\n@container (min-width: 700px) {\n  .container {\n    /* styles applied when a container is at least 700px */\n  }\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/jsxtools/cqfill"
      },
      {
        "type": "JavaScript Library",
        "link": "https://www.npmjs.com/package/container-query-polyfill"
      }
    ]
  },
  {
    "id": "custom-media-queries",
    "title": "Custom Media Queries",
    "description": "An at-rule for defining aliases that represent media queries",
    "specification": "https://drafts.csswg.org/mediaqueries-5/#at-ruledef-custom-media",
    "stage": 1,
    "example": "@custom-media --narrow-window (max-width: 30em);\n\n@media (--narrow-window) {}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-custom-media"
      }
    ]
  },
  {
    "id": "custom-properties",
    "title": "Custom Properties",
    "description": "A syntax for defining custom values accepted by all CSS properties",
    "specification": "https://www.w3.org/TR/css-variables-1/",
    "stage": 3,
    "caniuse": "css-variables",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/var"
    },
    "example": "img {\n  --some-length: 32px;\n\n  height: var(--some-length);\n  width: var(--some-length);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-properties"
      }
    ]
  },
  {
    "id": "custom-property-sets",
    "title": "Custom Property Sets",
    "description": "A syntax for storing properties in named variables, referenceable in other style rules",
    "specification": "https://tabatkins.github.io/specs/css-apply-rule/",
    "stage": -1,
    "caniuse": "css-apply-rule",
    "example": "img {\n  --some-length-styles: {\n    height: 32px;\n    width: 32px;\n  };\n\n  @apply --some-length-styles;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/pascalduez/postcss-apply"
      }
    ]
  },
  {
    "id": "custom-selectors",
    "title": "Custom Selectors",
    "description": "An at-rule for defining aliases that represent selectors",
    "specification": "https://drafts.csswg.org/css-extensions/#custom-selectors",
    "stage": 1,
    "example": "@custom-selector :--heading h1, h2, h3, h4, h5, h6;\n\narticle :--heading + p {}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-custom-selectors"
      }
    ]
  },
  {
    "id": "dir-pseudo-class",
    "title": "`:dir` Directionality Pseudo-Class",
    "description": "A pseudo-class for matching elements based on their directionality",
    "specification": "https://www.w3.org/TR/selectors-4/#dir-pseudo",
    "stage": 2,
    "caniuse": "css-dir-pseudo",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:dir"
    },
    "example": "blockquote:dir(rtl) {\n  margin-right: 10px;\n}\n\nblockquote:dir(ltr) {\n  margin-left: 10px;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-dir-pseudo-class"
      }
    ]
  },
  {
    "id": "double-position-gradients",
    "title": "Double Position Gradients",
    "description": "A syntax for using two positions in a gradient.",
    "specification": "https://www.w3.org/TR/css-images-4/#color-stop-syntax",
    "stage": 2,
    "caniuse-compat": {
      "and_chr": {
        "71": "y"
      },
      "chrome": {
        "71": "y"
      },
      "edge": {
        "79": "y"
      },
      "ios_saf": {
        "12.2": "y"
      },
      "opera": {
        "58": "y"
      }
    },
    "example": ".pie_chart {\n  background-image: conic-gradient(yellowgreen 40%, gold 0deg 75%, #f06 0deg);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-double-position-gradients"
      }
    ]
  },
  {
    "id": "environment-variables",
    "title": "Custom Environment Variables",
    "description": "A syntax for using custom values accepted by CSS globally",
    "specification": "https://drafts.csswg.org/css-env-1/",
    "stage": 0,
    "caniuse": "css-env-function",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/env"
    },
    "example": "@media (max-width: env(--brand-small)) {\n  body {\n    padding: env(--brand-spacing);\n  }\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-env-function"
      }
    ]
  },
  {
    "id": "fangsong-font-family",
    "title": "`fangsong` Font Family",
    "description": "A generic font used for Fang Song (仿宋) typefaces in Chinese",
    "specification": "https://www.w3.org/TR/css-fonts-4/#fangsong-def",
    "stage": 2,
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#Syntax"
    },
    "example": "body {\n  font-family: fangsong;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-font-family-fangsong"
      }
    ]
  },
  {
    "id": "focus-visible-pseudo-class",
    "title": "`:focus-visible` Focus-Indicated Pseudo-Class",
    "description": "A pseudo-class for matching focused elements that indicate that focus to a user",
    "specification": "https://www.w3.org/TR/selectors-4/#focus-visible-pseudo",
    "stage": 2,
    "caniuse": "css-focus-visible",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"
    },
    "example": ":focus:not(:focus-visible) {\n  outline: 0;\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/WICG/focus-visible"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-focus-visible"
      }
    ]
  },
  {
    "id": "focus-within-pseudo-class",
    "title": "`:focus-within` Focus Container Pseudo-Class",
    "description": "A pseudo-class for matching elements that are either focused or that have focused descendants",
    "specification": "https://www.w3.org/TR/selectors-4/#focus-within-pseudo",
    "stage": 2,
    "caniuse": "css-focus-within",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"
    },
    "example": "form:focus-within {\n  background: rgba(0, 0, 0, 0.3);\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/jsxtools/focus-within"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-focus-within"
      }
    ]
  },
  {
    "id": "font-format-keywords",
    "title": "Font `format()` Keywords",
    "description": "A syntax for specifying font format as a keyword in `@font-face` rule’s `format()` function",
    "specification": "https://www.w3.org/TR/css-fonts-4/#font-format-values",
    "stage": 1,
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
    },
    "example": "@font-face {\n  src: url(file.woff2) format(woff2);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/valtlai/postcss-font-format-keywords"
      }
    ]
  },
  {
    "id": "font-variant-property",
    "title": "`font-variant` Property",
    "description": "A property for defining the usage of alternate glyphs in a font",
    "specification": "https://www.w3.org/TR/css-fonts-3/#propdef-font-variant",
    "stage": 4,
    "caniuse": "font-variant-alternates",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant"
    },
    "example": "h2 {\n  font-variant: small-caps;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-font-variant"
      }
    ]
  },
  {
    "id": "gap-properties",
    "title": "Gap Properties",
    "description": "Properties for defining gutters within a layout",
    "specification": "https://www.w3.org/TR/css-grid-1/#gutters",
    "stage": 3,
    "caniuse-compat": {
      "chrome": {
        "66": "y"
      },
      "edge": {
        "16": "y"
      },
      "firefox": {
        "61": "y"
      },
      "safari": {
        "11.2": "y",
        "TP": "y"
      }
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/gap"
    },
    "example": ".grid-1 {\n  gap: 20px;\n}\n\n.grid-2 {\n  column-gap: 40px;\n  row-gap: 20px;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-gap-properties"
      }
    ]
  },
  {
    "id": "gray-function",
    "title": "`gray()` Function",
    "description": "A function for specifying fully desaturated colors",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-gray",
    "stage": -1,
    "example": "p {\n  color: gray(50);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-color-gray"
      }
    ]
  },
  {
    "id": "grid-layout",
    "title": "Grid Layout",
    "description": "A syntax for using a grid concept to lay out content",
    "specification": "https://www.w3.org/TR/css-grid-1/",
    "stage": 3,
    "caniuse": "css-grid",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/grid"
    },
    "example": "section {\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-gap: 10px;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/autoprefixer"
      }
    ]
  },
  {
    "id": "has-pseudo-class",
    "title": "`:has()` Relational Pseudo-Class",
    "description": "A pseudo-class for matching ancestor and sibling elements",
    "specification": "https://www.w3.org/TR/selectors-4/#has-pseudo",
    "stage": 2,
    "caniuse": "css-has",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
    },
    "example": "a:has(> img) {\n  display: block;\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-has-pseudo"
      }
    ]
  },
  {
    "id": "hexadecimal-alpha-notation",
    "title": "Hexadecimal Alpha Notation",
    "description": "A 4 & 8 character hex color notation for specifying the opacity level",
    "specification": "https://www.w3.org/TR/css-color-4/#hex-notation",
    "stage": 2,
    "caniuse": "css-rrggbbaa",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Syntax_2"
    },
    "example": "section {\n  background-color: #f3f3f3f3;\n  color: #0003;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-hex-alpha"
      }
    ]
  },
  {
    "id": "hwb-function",
    "title": "`hwb()` Function",
    "description": "A function for specifying colors by hue and then a degree of whiteness and blackness to mix into it",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-hwb",
    "stage": 2,
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb()"
    },
    "example": "p {\n  color: hwb(120 44% 50%);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-color-hwb"
      }
    ]
  },
  {
    "id": "ic-unit",
    "title": "`ic` length unit",
    "description": "Equal to the used advance measure of the \"水\" (CJK water ideograph, U+6C34) glyph found in the font used to render it",
    "specification": "https://www.w3.org/TR/css-values-4/#ic",
    "stage": 2,
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#dimensions"
    },
    "example": "p {\n  text-indent: 2ic;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-ic-unit"
      }
    ]
  },
  {
    "id": "image-set-function",
    "title": "`image-set()` Function",
    "description": "A function for specifying image sources based on the user’s resolution",
    "specification": "https://www.w3.org/TR/css-images-4/#image-set-notation",
    "stage": 2,
    "caniuse": "css-image-set",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/image-set"
    },
    "example": "p {\n  background-image: image-set(\n    \"foo.png\" 1x,\n    \"foo-2x.png\" 2x,\n    \"foo-print.png\" 600dpi\n  );\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-image-set-function"
      }
    ]
  },
  {
    "id": "in-out-of-range-pseudo-class",
    "title": "`:in-range` and `:out-of-range` Pseudo-Classes",
    "description": "A pseudo-class for matching elements that have range limitations",
    "specification": "https://www.w3.org/TR/selectors-4/#range-pseudos",
    "stage": 2,
    "caniuse": "css-in-out-of-range",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range"
    },
    "example": "input:in-range {\n  background-color: rgba(0, 255, 0, 0.25);\n}\ninput:out-of-range {\n  background-color: rgba(255, 0, 0, 0.25);\n  border: 2px solid red;\n}"
  },
  {
    "id": "is-pseudo-class",
    "title": "`:is()` Matches-Any Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#matches-pseudo",
    "stage": 2,
    "caniuse": "css-matches-pseudo",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is"
    },
    "example": "p:is(:first-child, .special) {\n  margin-top: 1em;\n}"
  },
  {
    "id": "lab-function",
    "title": "`lab()` Function",
    "description": "A function for specifying colors expressed in the CIE Lab color space",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-lab",
    "stage": 2,
    "caniuse": "css-lch-lab",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab()"
    },
    "example": "body {\n  color: lab(240 50 20);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-lab-function"
      }
    ]
  },
  {
    "id": "lch-function",
    "title": "`lch()` Function",
    "description": "A function for specifying colors expressed in the CIE Lab color space with chroma and hue",
    "specification": "https://www.w3.org/TR/css-color-4/#funcdef-lch",
    "stage": 2,
    "caniuse": "css-lch-lab",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch()"
    },
    "example": "body {\n  color: lch(53 105 40);\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-lab-function"
      }
    ]
  },
  {
    "id": "logical-properties-and-values",
    "title": "Logical Properties and Values",
    "description": "Flow-relative (left-to-right or right-to-left) properties and values",
    "specification": "https://www.w3.org/TR/css-logical-1/",
    "stage": 2,
    "caniuse": "css-logical-props",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties"
    },
    "example": "span:first-child {\n  float: inline-start;\n  margin-inline-start: 10px;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical"
      }
    ]
  },
  {
    "id": "matches-pseudo-class",
    "title": "`:matches()` Matches-Any Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#selectordef-matches",
    "stage": -1,
    "caniuse": "css-matches-pseudo",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:is"
    },
    "example": "p:matches(:first-child, .special) {\n  margin-top: 1em;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-selector-matches"
      }
    ]
  },
  {
    "id": "media-query-ranges",
    "title": "Media Query Ranges",
    "description": "A syntax for defining media query ranges using ordinary comparison operators",
    "specification": "https://www.w3.org/TR/mediaqueries-4/#range-context",
    "stage": 3,
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax_improvements_in_Level_4"
    },
    "example": "@media (width < 480px) {}\n\n@media (480px <= width < 768px) {}\n\n@media (width >= 768px) {}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-media-minmax"
      }
    ]
  },
  {
    "id": "nesting-rules",
    "title": "Nesting Rules",
    "description": "A syntax for nesting relative rules within rules",
    "specification": "https://drafts.csswg.org/css-nesting-1/",
    "stage": 1,
    "caniuse": "css-nesting",
    "example": "article {\n  & p {\n    color: #333;\n  }\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting"
      }
    ]
  },
  {
    "id": "not-pseudo-class",
    "title": "`:not()` Negation List Pseudo-Class",
    "description": "A pseudo-class for ignoring elements in a selector list",
    "specification": "https://www.w3.org/TR/selectors-4/#negation-pseudo",
    "stage": 2,
    "caniuse": "css-not-sel-list",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:not"
    },
    "example": "p:not(:first-child, .special) {\n  margin-top: 1em;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/postcss/postcss-selector-not"
      }
    ]
  },
  {
    "id": "overflow-property",
    "title": "`overflow` Shorthand Property",
    "description": "A property for defining `overflow-x` and `overflow-y`",
    "specification": "https://www.w3.org/TR/css-overflow-3/#propdef-overflow",
    "stage": 2,
    "caniuse": "css-overflow",
    "caniuse-compat": {
      "and_chr": {
        "68": "y"
      },
      "and_ff": {
        "61": "y"
      },
      "chrome": {
        "68": "y"
      },
      "firefox": {
        "61": "y"
      }
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
    },
    "example": "html {\n  overflow: hidden auto;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-overflow-shorthand"
      }
    ]
  },
  {
    "id": "overflow-wrap-property",
    "title": "`overflow-wrap` Property",
    "description": "A property for defining whether to insert line breaks within words to prevent overflowing",
    "specification": "https://www.w3.org/TR/css-text-3/#overflow-wrap-property",
    "stage": 2,
    "caniuse": "wordwrap",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap"
    },
    "example": "p {\n  overflow-wrap: break-word;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/mattdimu/postcss-replace-overflow-wrap"
      }
    ]
  },
  {
    "id": "overscroll-behavior-property",
    "title": "`overscroll-behavior` Property",
    "description": "Properties for controlling when the scroll position of a scroll container reaches the edge of a scrollport",
    "specification": "https://drafts.csswg.org/css-overscroll-behavior",
    "stage": 1,
    "caniuse": "css-overscroll-behavior",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior"
    },
    "example": ".messages {\n  height: 220px;\n  overflow: auto;\n  overscroll-behavior-y: contain;\n}\n\nbody {\n  margin: 0;\n  overscroll-behavior: none;\n}"
  },
  {
    "id": "place-properties",
    "title": "Place Properties",
    "description": "Properties for defining alignment within a layout",
    "specification": "https://www.w3.org/TR/css-align-3/#place-items-property",
    "stage": 2,
    "caniuse-compat": {
      "chrome": {
        "59": "y"
      },
      "firefox": {
        "45": "y"
      }
    },
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/place-content"
    },
    "example": ".example {\n  place-content: flex-end;\n  place-items: center / space-between;\n  place-self: flex-start / center;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-place"
      }
    ]
  },
  {
    "id": "prefers-color-scheme-query",
    "title": "`prefers-color-scheme` Media Query",
    "description": "A media query to detect if the user has requested the system use a light or dark color theme",
    "specification": "https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme",
    "stage": 1,
    "caniuse": "prefers-color-scheme",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
    },
    "example": "body {\n  background-color: white;\n  color: black;\n}\n\n@media (prefers-color-scheme: dark) {\n  body {\n    background-color: black;\n    color: white;\n  }\n}",
    "polyfills": [
      {
        "type": "JavaScript Library",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme"
      },
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/css-prefers-color-scheme"
      }
    ]
  },
  {
    "id": "prefers-reduced-motion-query",
    "title": "`prefers-reduced-motion` Media Query",
    "description": "A media query to detect if the user has requested less animation and general motion on the page",
    "specification": "https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion",
    "stage": 1,
    "caniuse": "prefers-reduced-motion",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"
    },
    "example": ".animation {\n  animation: vibrate 0.3s linear infinite both; \n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animation {\n    animation: none;\n  }\n}"
  },
  {
    "id": "read-only-write-pseudo-class",
    "title": "`:read-only` and `:read-write` selectors",
    "description": "Pseudo-classes to match elements which are considered user-alterable",
    "specification": "https://www.w3.org/TR/selectors-4/#rw-pseudos",
    "stage": 2,
    "caniuse": "css-read-only-write",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only"
    },
    "example": "input:read-only {\n  background-color: #ccc;\n}"
  },
  {
    "id": "rebeccapurple-color",
    "title": "`rebeccapurple` Color",
    "description": "A particularly lovely shade of purple in memory of Rebecca Alison Meyer",
    "specification": "https://www.w3.org/TR/css-color-4/#valdef-color-rebeccapurple",
    "stage": 2,
    "caniuse": "css-rebeccapurple",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
    },
    "example": "html {\n  color: rebeccapurple;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-color-rebeccapurple"
      }
    ]
  },
  {
    "id": "system-ui-font-family",
    "title": "`system-ui` Font Family",
    "description": "A generic font used to match the user’s interface",
    "specification": "https://www.w3.org/TR/css-fonts-4/#system-ui-def",
    "stage": 2,
    "caniuse": "font-family-system-ui",
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#Syntax"
    },
    "example": "body {\n  font-family: system-ui;\n}",
    "polyfills": [
      {
        "type": "PostCSS Plugin",
        "link": "https://github.com/JLHwung/postcss-font-family-system-ui"
      }
    ]
  },
  {
    "id": "when-else-rules",
    "title": "When/Else Rules",
    "description": "At-rules for specifying media queries and support queries in a single grammar",
    "specification": "https://tabatkins.github.io/specs/css-when-else/",
    "stage": 0,
    "example": "@when media(width >= 640px) and (supports(display: flex) or supports(display: grid)) {\n  /* A */\n} @else media(pointer: coarse) {\n  /* B */\n} @else {\n  /* C */\n}"
  },
  {
    "id": "where-pseudo-class",
    "title": "`:where()` Zero-Specificity Pseudo-Class",
    "description": "A pseudo-class for matching elements in a selector list without contributing specificity",
    "specification": "https://drafts.csswg.org/selectors-4/#where-pseudo",
    "stage": 1,
    "docs": {
      "mdn": "https://developer.mozilla.org/en-US/docs/Web/CSS/:where"
    },
    "example": "a:where(:not(:hover)) {\n  text-decoration: none;\n}"
  }
]
