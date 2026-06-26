import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import AffiliationNotice from "./components/AffiliationNotice.vue";
import ContractAddress from "./components/ContractAddress.vue";
import ContractLink from "./components/ContractLink.vue";
import ContractTable from "./components/ContractTable.vue";
import PublicEvidenceTable from "./components/PublicEvidenceTable.vue";
import TokenLockTable from "./components/TokenLockTable.vue";
import WalletTable from "./components/WalletTable.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(AffiliationNotice),
    });
  },
  enhanceApp({ app }) {
    app.component("AffiliationNotice", AffiliationNotice);
    app.component("ContractAddress", ContractAddress);
    app.component("ContractLink", ContractLink);
    app.component("ContractTable", ContractTable);
    app.component("PublicEvidenceTable", PublicEvidenceTable);
    app.component("TokenLockTable", TokenLockTable);
    app.component("WalletTable", WalletTable);
  },
} satisfies Theme;
