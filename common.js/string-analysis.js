const path = "/users/download/index.html"

const isHtml = path => {
  const requiredExtracted = ".html";
  const pathExtracted = path.slice(-5);

  if(pathExtracted === requiredExtracted) {
    return true
  } else {
    return false
  }
}

console.log(isHtml(path));