import page from "page";

export const router = {
  initialize(routes: { [key: string]: (params: unknown) => void }) {
    Object.keys(routes).forEach((url) => {
      page(url, ({ params }) => routes[url](params));
    });
    page.start();
  },
  open: (url: string) => {
    page.show(url);
  },
};
