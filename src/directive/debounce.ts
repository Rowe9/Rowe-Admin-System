// 防抖:我们拿一个timer和定时器来完成
function debounce(fn: any, delay: any) {
  let timer: any = null
  const _debounce = function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this)
      timer = null
    }, delay)
  }
  return _debounce
}

export default debounce
