var args = process.argv.slice(2);

function sumNums(arr) {
  console.log(arr.reduce(function(prev, curr) { return prev + Number(curr);}, 0));
};

sumNums(args);
