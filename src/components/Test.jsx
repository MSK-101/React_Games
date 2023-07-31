import React from 'react'

export default async function Test() {

async function getData () {
    const response = await fetch('http://localhost:3000/api/v1/users/1');
    const finaldata = await response.json();
    return finaldata
}

async function useQuery(hash) {
  const data = await hash.queryFn();
  const key = await hash.queryKey;
  console.log(data[key])
  return data[key];
}
const data = await useQuery({ queryKey:"games", queryFn: getData })
// console.log(data);


// function temp (hash){
//   console.log(hash.func())
// }
// const obj = { func: function temp(){ console.log('Hello')}}
// // obj.func()
// temp(obj)
  return (
    <div>Test</div>
  )
}
