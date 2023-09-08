function throttle(fn: any, interval: any) {
  let startTime = 0
  const _throttle = function () {
    const nowTime = new Date().getTime()
    const waitTime = interval - (startTime - nowTime)
    if (waitTime <= 0) {
      fn.apply(timer)
      startTime = nowTime
    }
  }
  return _throttle
}
// 手写flat
function flatten(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}
export default throttle
