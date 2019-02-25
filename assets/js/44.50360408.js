(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{241:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("本篇给出了长按保存图片的demo\n")]),t._v(" "),a("h2",{attrs:{id:"长按保存图片实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#长按保存图片实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 长按保存图片实例")]),t._v(" "),a("ul",[a("li",[t._v("采用canvas画布画出页面中的元素")]),t._v(" "),a("li",[t._v("获取页面中的图片加载到canvas中（把原本页面中的图片隐藏[display:none]）隐藏原本的元素也是可以获取到在画布上绘画的")]),t._v(" "),a("li",[t._v("将canvas的高度设置为手机高度（"),a("code",[t._v("document.body.clientHeight")]),t._v("） * 设备像素比("),a("code",[t._v("window.devicePixelRatio")]),t._v(")")]),t._v(" "),a("li",[t._v("在将canvas的style高度设置为手机高度（"),a("code",[t._v("document.body.clientHeight")]),t._v("）")]),t._v(" "),a("li",[t._v("canvas中绘画的背景也要设置为canvas的高度和宽度（不是style的）")]),t._v(" "),a("li",[t._v("canvas中添加图片也可以用"),a("code",[t._v("new Image()")]),t._v(" 然后用新创建的图片")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("   "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("封装了写字（可忽略）"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),a("span",{attrs:{class:"token function"}},[t._v("fillText")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" desc"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textBaseline "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'top'")]),t._v("\n     cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'16px Arial'")]),t._v("\n     cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'#000'")]),t._v("\n     cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fillText")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("desc"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("封装了图片加载和加载结束事件（可忽略）"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),a("span",{attrs:{class:"token function"}},[t._v("drawImg")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       img"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{attrs:{class:"token function"}},[t._v("fn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n       img"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{attrs:{class:"token comment"}},[t._v("/* eslint-disable */")]),t._v("\n         "),a("span",{attrs:{class:"token function"}},[t._v("reject")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("ios检测"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),a("span",{attrs:{class:"token function"}},[t._v("isIOS")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" u "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isiOS "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("u"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\(i[^;]+;( U;)? CPU.+Mac OS X/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//ios终端")]),t._v("\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" isiOS\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("readCavasImg")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("clientHeight"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n       \n     "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("图片加载方式之新建"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" img1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" canvas "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'canvas'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("  clientWidth "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio\n     canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" clientHeight "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio\n     canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" clientWidth "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n     canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" clientHeight "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'px'")]),t._v("\n\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cxt "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getContext")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'2d'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     img1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`static/answers/")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imgUrl"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{attrs:{class:"token comment"}},[t._v("// cross && img1.setAttribute(\"crossOrigin\",'Anonymous')")]),t._v("\n\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" f1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("drawImg")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{attrs:{class:"token comment"}},[t._v("// 画背景")]),t._v("\n       cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("drawImage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        \n     "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n     "),a("span",{attrs:{class:"token comment"}},[t._v("// // 画月亮")]),t._v("\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" moonDraw "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("moonDraw\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" computedWidth "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width\n     cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("drawImage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moonDraw"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" computedWidth "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("computedWidth "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3.5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" computedWidth "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3.5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" computedWidth "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3.5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n     \n     "),a("span",{attrs:{class:"token comment"}},[t._v("// 画字")]),t._v("\n     cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"bold 45px Arial"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isIOS")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientHeight "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("650")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n         cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fillText")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" computedWidth "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("73")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientHeight "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2.5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"bold 60px Arial"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fillText")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" computedWidth "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientHeight "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       \n     "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fillText")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$root"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" computedWidth "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("60")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clientHeight "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       \n     cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textBaseline "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'middle'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//设置文本的垂直对齐方式")]),t._v("\n     cxt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textAlign "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'center'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//设置文本的水平对齐方式")]),t._v("\n     \n\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" img3 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     img3"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" clientWidth"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     img3"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" clientHeight"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      \n     "),a("span",{attrs:{class:"token comment"}},[t._v("// 获取url")]),t._v("\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" img3Url "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toDataURL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'image/png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     img3"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" img3Url"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n     "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" f2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("drawImg")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img3"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("printMe"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img3"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="wechatSavePic.md";s.default=o.exports}}]);