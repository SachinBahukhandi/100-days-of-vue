import { createRouter } from "vue-router";
import routes from "./router";
export default function (history: any) {
  return createRouter({
    history,
    routes,
  });
}
