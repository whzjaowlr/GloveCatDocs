import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h, nextTick, onMounted } from "vue";
import ContractAddress from "./components/ContractAddress.vue";
import ContractLink from "./components/ContractLink.vue";
import ContractTable from "./components/ContractTable.vue";
import WalletTable from "./components/WalletTable.vue";
import "./custom.css";

const Layout = {
  name: "GloveCatLayout",
  setup() {
    onMounted(() => {
      void nextTick(() => {
        const content = document.querySelector(".VPContent");
        content?.setAttribute("role", "main");
        content?.setAttribute("id", "main-content");

        document.querySelectorAll<HTMLImageElement>('img[src="/logo.webp"], img[src="/logo.png"]').forEach((image) => {
          const size = image.classList.contains("logo") ? "24" : "320";
          image.setAttribute("width", size);
          image.setAttribute("height", size);
          image.setAttribute("decoding", "async");

          if (!image.classList.contains("logo")) {
            image.setAttribute("fetchpriority", "high");
          }
        });
      });
    });

    return () => h(DefaultTheme.Layout);
  },
};

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("ContractAddress", ContractAddress);
    app.component("ContractLink", ContractLink);
    app.component("ContractTable", ContractTable);
    app.component("WalletTable", WalletTable);
  },
} satisfies Theme;
