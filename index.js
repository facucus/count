const count = (() => {
  let counter = 0;
  return (num = 1) => {
    return counter += num;
  }
})()
