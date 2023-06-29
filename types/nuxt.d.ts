import type { AxiosInstance } from "axios";

declare module "#app" {
  interface NuxtApp {
    $get: AxiosInstance["get"];
    $post: AxiosInstance["post"];
    $put: AxiosInstance["put"];
    $delete: AxiosInstance["delete"];
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $get: AxiosInstance["get"];
    $post: AxiosInstance["post"];
    $put: AxiosInstance["put"];
    $delete: AxiosInstance["delete"];
  }
}

export {};
