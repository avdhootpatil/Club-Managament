import CreateEntry from "@/pages/CreateEntry";
import CreateMember from "@/pages/CreateMember";
import CreateOrganization from "@/pages/CreateOrganization";
import Customers from "@/pages/Customers";
import Dashboard from "@/pages/Dashboard";
import Dependants from "@/pages/Dependants";
import EntryExits from "@/pages/EntryExits";
import Login from "@/pages/Login";
import Organizations from "@/pages/Organizations";
import RateCards from "@/pages/RateCards";
import Reports from "@/pages/Reports";

const routes = [
  {
    exact: true,
    path: "/",
    component: <Dashboard />,
  },
  {
    exact: true,
    path: "/customers",
    component: <Customers />,
  },
  {
    exact: true,
    path: "/dependants",
    component: <Dependants />,
  },
  {
    exact: true,
    path: "/entry-exit",
    component: <EntryExits />,
  },
  {
    exact: true,
    path: "/organization",
    component: <Organizations />,
  },
  {
    exact: true,
    path: "/rate-cards",
    component: <RateCards />,
  },
  {
    exact: true,
    path: "/create-organization",
    component: <CreateOrganization />,
  },
  {
    exact: true,
    path: "/create-entry",
    component: <CreateEntry />,
  },
  {
    exact: true,
    path: "/create-member",
    component: <CreateMember />,
  },
  {
    exact: true,
    path: "/reports",
    component: <Reports />,
  },

  {
    exact: true,
    path: "/login",
    component: <Login />,
  },
];

export default routes;
