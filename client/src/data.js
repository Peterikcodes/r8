import Discord from "./img/discord.svg";
import ForumIcon from "@mui/icons-material/Forum";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Hammer from "./img/hammer.svg";

const navLinks = [
  {
    name: "purchase",
    link: "https://r8-project.sellix.io/product/637bd990abe99",
    icon: "",
    iconType: "",
    type: "sellix",
  },
  {
    name: "discord",
    link: "https://forum.r8-project.xyz/discord",
    icon: Discord,
    iconType: "svg",
    type: "normal",
  },
  {
    name: "forum",
    link: "https://forum.r8-project.xyz/",
    icon: ForumIcon,
    iconType: "mui",
    type: "normal",
  },
  {
    name: "stats",
    link: "https://stats.r8-project.xyz/",
    icon: QueryStatsIcon,
    iconType: "mui",
    type: "normal",
  },
  {
    name: "bans",
    link: "https://bans.r8-project.xyz/",
    icon: Hammer,
    iconType: "svg",
    type: "normal",
  },
];

export { navLinks };
