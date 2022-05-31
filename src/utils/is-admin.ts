import childProcess from "child_process";

export const isAdmin = () => {
  try {
    childProcess.execFileSync("net", ["session"], { stdio: "ignore" });
    return true;
  } catch (error) {
    return false;
  }
};
