const notFound = (res)=>{
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({
      message:"Route Not Fount | 404"  
    }))
    res.end();
}

const ErrorHandler = {
    notFound
}

module.exports = ErrorHandler;