export const getPowerSet = (set, set_size, maxLimit) => {
  let pow_set_size = parseInt(Math.pow(2, set_size));
  let counter, j;
  let ans = [];
  let maxTillNow = 0;
  for (counter = 1; counter < pow_set_size; counter++) {
    let temp = [];
    let sum = 0;
    for (j = 0; j < set_size; j++) {
      if ((counter & (1 << j)) > 0) {
        temp.push(set[j]);
        sum += +set[j]["amt"];
      }
    }

    if (sum <= maxLimit) {
      let last_sum = 0;
      if (ans.length > 0) {
        for (let m of ans[ans.length - 1]) {
          last_sum += +m["amt"];
        }
      }
      if (maxTillNow < sum) {
        maxTillNow = sum;
        ans = [];
      }
      //   console.log(temp);

      if (ans.length > 0 && last_sum <= sum) {
        if (last_sum < sum) {
          ans.shift();
        }

        ans.push(temp);
      }
      if (ans.length === 0) {
        ans.push(temp);
      }
    }
  }
  return ans;
};
