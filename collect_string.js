// write a function that returns all strings in an object

// idea: have a stroage and concat the results of the recursion

const collectStrings = (obj, storage = []) => {
  // iterate over keys
  for (let key in obj) {
      // if string, push to storage
      if (typeof obj[key] === "string") storage.push(obj[key])
      // if object, concat storage to recursive
      if (typeof obj[key] === "object") storage = [...storage, ...collectStrings(obj[key])]
  }
      
  return storage;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])