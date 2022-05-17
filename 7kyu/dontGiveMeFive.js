function dontGiveMeFive(start, end)
{
  count = 0
  for(i = start; i <= end; i++) 
    if(!i.toString().includes("5")) 
      count += 1
  return count;
}