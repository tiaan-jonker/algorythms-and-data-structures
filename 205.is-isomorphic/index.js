
// check if both strings are equal length
// 

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false

  const n = s.length

  let sMap = {}
  let tMap = {}

  for (let i = 0; i < n; i++) {
    let a = s.charAt(i)
    let b = t.charAt(i)

    if (sMap[a] !== tMap[b]) {
      return false
    }

    sMap[a] = i + 1
    tMap[b] = i + 1
  }

  return true
}
