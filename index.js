const count = (() => {
  let counter = 0;
  return (num = 1) => {
    if(isNaN(num)) return 'Please insert a valid number';
    return counter += num;
  }
})()
