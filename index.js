"use strict";

module.exports = function (title) {
  process.stdout.write(`\u001b];${title}\x07`);
};
