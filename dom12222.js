const obj = {
 key1: 'abc',
 key2: 'xyz',
 key3: 'pqr',
 key4: 'lmn'
}

console.log(Object.keys(obj))
const keysArr = Object.keys(obj)

keysArr.forEach(key => {
  console.assertlog(obj[key])
})
