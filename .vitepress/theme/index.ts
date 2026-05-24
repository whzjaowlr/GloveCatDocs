import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import ContractAddress from "./components/ContractAddress.vue";
import ContractLink from "./components/ContractLink.vue";
import ContractTable from "./components/ContractTable.vue";
import WalletTable from "./components/WalletTable.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ContractAddress", ContractAddress);
    app.component("ContractLink", ContractLink);
    app.component("ContractTable", ContractTable);
    app.component("WalletTable", WalletTable);
  },
} satisfies Theme;
