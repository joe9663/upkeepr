import * as m from 'mithril';

var root = document.body

m.render(root, [
    m("main", [
        m("h1", {class: "title"}, "upkeepr"),
        m("p", {class: 'subtitle'}, "you know, nerd stuff"),
    ])
])
