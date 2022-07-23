import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

// Add a pull quote directive
app.directive("pq", {
  mounted(el, binding) {
    // Add a clone of `el` to the parent node
    var elParent = el.parentNode;
    var elClone = el.cloneNode(true);
    elParent.prepend(elClone);

    /*
     * Apply the `.pull-quote` CSS class to the cloned
     * element.
     */
    elClone.classList.add("pulled-quote");

    /*
     * Add the directive expression as the abbreviated
     * content for the pull quote.
     */
    if (binding.value) {
      elClone.innerHTML = binding.value;
    }

    /*
     * Add some alignment arguments to the `v-pq`
     *
     * For eg. v-on:right, v-on:center. The v-on:left
     * will be the default behavior of `v-pq`.
     */
    switch (binding.arg) {
      case "right":
        elClone.classList.add("pulled-quote--right");
        break;
      case "center":
        elClone.classList.add("pulled-quote--center");
        break;
      default:
        elClone.classList.add("pulled-quote--left");
        break;
    }

    /*
     * Add some text-formatting modifiers to the `v-pq`
     *
     * For eg. v-on:right.italic,
     * v-on:center.highlighted.
     */
    if (binding.modifiers.italic) {
      elClone.style.fontStyle = "italic";
    }

    if (binding.modifiers.quoted) {
      elClone.classList.add("pulled-quote--quoted");
    }

    if (binding.modifiers.highlighted) {
      elClone.classList.add("pulled-quote--highlighted");
    }
  },
});

app.mount("#app");
