import Conf from "conf";

interface ConfigStore {
  domainsToBlock: string[];
  status: { isRunning: true; startedAt: number } | { isRunning: false; startedAt: null };
}

export const config = new Conf<ConfigStore>({
  schema: {
    domainsToBlock: {
      type: "array",
      default: ["youtube.com", "instagram.com", "twitter.com"],
    },
    status: {
      type: "object",
      default: { isRunning: false, startedAt: null },
    },
  },
});
