import Conf from "conf";

export const config = new Conf<{ domainsToBlock: string[] }>({
  schema: {
    domainsToBlock: {
      type: "array",
      default: ["youtube.com", "instagram.com", "twitter.com"],
    },
  },
});
