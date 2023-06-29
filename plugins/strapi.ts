import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: "/api/strapi",
  });
  return {
    provide: {
      get: instance.get,
      post: instance.post,
      put: instance.put,
      delete: instance.delete,
    },
  };
});
