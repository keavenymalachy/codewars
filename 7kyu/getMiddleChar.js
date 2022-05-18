function getMiddle(s)
{
  return (s.length % 2 === 0 ? s[s.length/2-1] + s[s.length/2] : s[ Math.round( (s.length -1) /2) ])
}