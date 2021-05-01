(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{403:function(t,s,a){"use strict";a.r(s);var e=a(71),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-docs-how-too"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-docs-how-too"}},[t._v("#")]),t._v(" vuepress-docs-how-too "),a("a",{attrs:{href:"https://github.com/daggerok/vuepress-docs-how-too/actions/workflows/ci.yaml",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://github.com/daggerok/vuepress-docs-how-too/actions/workflows/ci.yaml/badge.svg",alt:"GitHub actions"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Quick and fast rapid VuePress documentation development\n")]),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#quickstrat-new-project"}},[t._v("Quickstrat new project")])]),a("li",[a("a",{attrs:{href:"#build-and-serve"}},[t._v("Build and serve")])]),a("li",[a("a",{attrs:{href:"#publish-via-ci"}},[t._v("Publish via CI")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"quickstrat-new-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstrat-new-project"}},[t._v("#")]),t._v(" Quickstrat new project")]),t._v(" "),a("p",[t._v("Start from documentation:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO- https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvf -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /tmp/1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO- https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvf - -C "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tar -xvf <(curl -sL https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# jar -xvf <(curl -sL https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" vuepress-docs-how-too my-new-project\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" my-new-project/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# find and replace: vuepress-docs-how-too -> my-new-project")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# such as: BASE='/my-new-project/'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" package.json\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" .vuepress/config.js\n")])])]),a("h2",{attrs:{id:"build-and-serve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-serve"}},[t._v("#")]),t._v(" Build and serve")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm i -E")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\nnpx serve .vuepress/dist/\n")])])]),a("p",[t._v("open "),a("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/"),a("OutboundLink")],1),t._v(" url")]),t._v(" "),a("h2",{attrs:{id:"publish-via-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-via-ci"}},[t._v("#")]),t._v(" Publish via CI")]),t._v(" "),a("p",[t._v("Checkout "),a("code",[t._v(".github/workflows/ci.yaml")]),t._v(" file to see how easily you can deploy your VuePress docs on GitHub Pages:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GitHub actions'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pull_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-pages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("npm\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~/.npm\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/package.json')")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v2\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npm i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("E ; npm run gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy 🚀\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JamesIves/github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("action@4.1.0\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The branch the action should deploy to.")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("folder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" .vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The folder the action should deploy.")]),t._v("\n")])])]),a("p",[t._v("That README.md documentation file is compiled and deployed on "),a("a",{attrs:{href:"https://daggerok.github.io/vuepress-docs-how-too/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);