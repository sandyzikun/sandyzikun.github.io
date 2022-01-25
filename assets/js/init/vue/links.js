// My Social Links
var socialink_app = Vue.createApp({
    data() {return {
        items: socialink_dict,
    }}
}).mount("#vfor-socialink");
// Friends' Links
var friendslink_app = Vue.createApp({
    data() {return {
        items: friendslink_dict,
    }}
}).mount("#vfor-friendslink");
/**
 * For Instance:...
 *  ```html
    <ol id="vfor-socialink">
        <li v-for="(item, key) in items">{{ key }}
            <a target="_blank" :href="item.url">@{{ item.username }}</a>
        </li>
    </ol>
    <ol id="vfor-friendslink">
        <li v-for="(item, key) in items">
            <a target="_blank" :href="item.url">{{ key }}</a>:
            {{ item.desc.en }}.
            ({{ item.desc.zh }})
        </li>
    </ol>
    ```
 * Requirements: Vue-3.2.11
 */