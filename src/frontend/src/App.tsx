import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Entertainment from "./pages/Entertainment";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Travel from "./pages/Travel";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const entertainmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/entertainment",
  component: Entertainment,
});

const travelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/travel",
  component: Travel,
});

const eventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/events",
  component: Events,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  entertainmentRoute,
  travelRoute,
  eventsRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
