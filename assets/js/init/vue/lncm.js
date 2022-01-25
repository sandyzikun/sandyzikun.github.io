// Leoneed CM Images' List
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
/**
 * For Instance:...
 *  ```html
    <p>
        <h3>Leo/need, 最近常聽的一個 Virtual Band.</h3>
    </p>
    <section>
        <div class="row" id="ln-cm">
            <div class="col-4 col-6-medium col-12-small" v-for="item in items">
                <a :href="item.link_href" class="image fit">
                    <img :src="item.image_source" alt="" />
                </a>
            </div>
        </div><br />
    </section>
    ```
 * Requirements: Vue-3.2.11
 */