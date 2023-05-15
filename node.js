const http=require('http');
const fs=require('fs');

function send(res, file){
    console.log("SENDING FILE : ",file);

    try{
        res.end(fs.readFileSync(__dirname+file,"utf-8"));
    }
    catch(e){
        console.log(e);
        res.end(String(e));
    }
}

const server = http.createServer((req, res)=>{
    
    let method=req.method;
    let url=req.url;
    
    console.log("url:",url);

    if(method="GET"){                   
        switch(url){
            case "/index":
            case "/":
                        send(res, "index.html");
                        break;
            
            case "/stopwatch":
                        send(res, "/stopwatch/stopwatch.html");                        
                        break;
            case "/stopwatch.js":
                        send(res, "/stopwatch/stopwatch.js");
                        break;
            
            case "/pomodoro":
                        send(res, "/pomodoro/pomodoro.html");
                        break;
            case "/pomodoro.js":
                        send(res, "pomodoro/pomodoro.js");
                        break;            
        }
    }

    else{
        //post reqs
    }
});

server.listen(3000, () => {
    console.log("RUNING AT :"+3000);
});