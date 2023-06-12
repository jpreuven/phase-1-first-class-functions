const receivesAFunction = function (callback) {
  callback();
};

const returnsANamedFunction = function () {
  return receivesAFunction;
};

const returnsAnAnonymousFunction = function () {
  return function () {
    console.log("hello");
  };
};
