const extractCommandAndFlags = (str = "") => {
  const { command = "!help", flags = "" } =
    str.match(/(?:\<.*\>)? *(?<command>\![a-z]+) *(?<flags>\-[A-Za-z].*)*/)
      ?.groups ?? {};
  return { command, flags };
};

const processFlags = (str = "") => {
  return str
    .split("-")
    .filter((_) => _)
    .map((_) =>
      _.trim()
        .split(/ +/)
        .filter((_) => _)
    )
    .map(([flag, arg]) => ({ flag, arg }));
};

const getArgByFlag = (flags, selector) =>
  flags.find(({ flag }) => flag === selector)?.arg;

const sanitizeNumber = (num) =>
  typeof num === "number" && !isNaN(num) ? num : 0;

module.exports = {
  extractCommandAndFlags,
  processFlags,
  getArgByFlag,
  sanitizeNumber,
};
