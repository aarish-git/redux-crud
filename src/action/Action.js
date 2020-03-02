export const fSubmit = (name) => {
  console.log("name",name)
  return {type:'SUBMIT' ,value:""}
}

export const fEdit = (val) => {
  return {type:'EDIT', value:val }
}

export const fRemove = (val) => {
  return {type:'REMOVE', value:val }
}
