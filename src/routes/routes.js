import { fetchPopularJobs } from "../shared/api";
import ListBlockComp from "../shared/components/ListBlockComp";
import DetailsBlockComp from "../shared/components/DetailsBlockComp";
import ThankYouBlockComp from "../shared/components/ThankYouBlockComp";

const routes = [
  {
    path: "/",
    exact: true,
    component: ListBlockComp,
    fetchInitialData: (path = "") => fetchPopularJobs(path.split("/").pop())
  },
  {
    path: "/job/:id",
    component: DetailsBlockComp,
    fetchInitialData: (path = "") => fetchPopularJobs(path.split("/").pop())
  },
  {
    path: "/applied",
    component: ThankYouBlockComp
  }
];

export default routes;
