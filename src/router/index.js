import { createRouter, createWebHistory } from "vue-router";
import BindView from "../views/BindView.vue";
import IfView from "../views/IfView.vue";
import ShowView from "../views/ShowView.vue";
import ForView from "../views/ForView.vue";
import OnView from "../views/OnView.vue";
import ModelView from "../views/ModelView.vue";
import SlotView from "../views/SlotView.vue";
import RefView from "../views/RefView.vue";
import PropsComp from "../views/PropsView.vue";
import PropsValidateView from "../views/PropsValidateView.vue";
import EmitView from "../views/EmitView.vue";
import HttpRequestView from "../views/HttpRequestView.vue";
import LifeCycle from "../views/LifeCycleView.vue";
import ComputedView from "../views/ComputedView.vue";
import WatcherView from "../views/WatcherView.vue";

const routes = [
  {
    path: "/v-bind",
    name: "BindView",
    component: BindView,
  },
  {
    path: "/v-if",
    name: "IfView",
    component: IfView,
  },
  {
    path: "/v-show",
    name: "ShowView",
    component: ShowView,
  },
  {
    path: "/v-for",
    name: "ForView",
    component: ForView,
  },
  {
    path: "/v-on",
    name: "OnView",
    component: OnView,
  },
  {
    path: "/v-model",
    name: "ModelView",
    component: ModelView,
  },
  {
    path: "/v-slot",
    name: "SlotView",
    component: SlotView,
  },
  {
    path: "/ref",
    name: "RefView",
    component: RefView,
  },
  {
    path: "/props",
    name: "PropsComp",
    component: PropsComp,
  },
  {
    path: "/props-validate",
    name: "PropsValidateView",
    component: PropsValidateView,
  },
  {
    path: "/emit",
    name: "EmitView",
    component: EmitView,
  },
  {
    path: "/http-request",
    name: "HttpRequestView",
    component: HttpRequestView,
  },
  {
    path: "/lifecycle",
    name: "LifeCycle",
    component: LifeCycle,
  },
  {
    path: "/computed",
    name: "ComputedView",
    component: ComputedView,
  },
  {
    path: "/watcher",
    name: "WatcherView",
    component: WatcherView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
