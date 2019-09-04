const debug = (arg, option = 1) => {
  if (option == 1) {
    console.log(arg);
    return false;
  } else {
    console.log(arg);
  }
};

module.exports = {
  debug
};
