// Leoneed CM Images' List
var lncm_works = [
    {
        num: "01",
        avids: [
            [ "671546537", "1" ],
            [ "464508175", "1" ],
            [ "585331876", "1" ],
            [ "202484440", "1" ],
        ],
    },
    {
        num: "02",
        avids: [
            [ "756109205", "1" ],
            [ "464508175", "6" ],
            [ "713571332", "1" ],
            [ "203720140", "1" ],
        ],
    },
    {
        num: "03",
        avids: [
            [ "887831227", "1" ],
            [ "464508175", "13" ],
            [ "290152631", "1" ],
            [ "502727354", "1" ],
        ],
    },
    {
        num: "04",
        avids: [
            [ "546521062", "1" ],
            [ "464508175", "18" ],
            [ "461836111", "1" ],
            [ "206382134", "1" ],
        ],
    },
    {
        num: "05",
        avids: [
            [ "335597816", "1" ],
            [ "464508175", "22" ],
            [ "633010441", "1" ],
            [ "547891349", "1" ],
        ],
    },
    {
        num: "06",
        avids: [
            [ "934347918", "1" ],
            [ "464508175", "28" ],
            [ "934955852", "1" ],
            [ "336690922", "1" ],
        ],
    },
];
var lncm_prefixes = [ "logo", "musicby", "prod", "time" ];
var lncm_items = [];
for (let k = 0; k < lncm_works.length; k++)
    for (let l = 0; l < lncm_prefixes.length; l++)
        lncm_items[k * lncm_prefixes.length + l] = {
            image_source: "ln-cm/" + lncm_prefixes[l] + "-" + lncm_works[k].num + ".jpeg",
            link_href: "https://www.bilibili.com/av" + lncm_works[k].avids[l][0] + "/?p=" + lncm_works[k].avids[l][1],
        };
var lncm_app = Vue.createApp({
    data() {return {
        items: lncm_items,
    }}
}).mount("#ln-cm");