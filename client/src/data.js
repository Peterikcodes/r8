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
  },
  {
    name: "discord",
    link: "https://forum.r8-project.xyz/discord",
    icon: Discord,
    iconType: "svg",
  },
  {
    name: "forum",
    link: "https://forum.r8-project.xyz/",
    icon: ForumIcon,
    iconType: "mui",
  },
  {
    name: "stats",
    link: "https://stats.r8-project.xyz/",
    icon: QueryStatsIcon,
    iconType: "mui",
  },
  {
    name: "bans",
    link: "https://bans.r8-project.xyz/",
    icon: Hammer,
    iconType: "svg",
  },
];

export { navLinks };
