RE_NATAL_PLACEHOLDER(function (name) {
    var modules=require('./husk-requires');modules['./images/cljs.png']=require('./images/cljs.png');
    if (modules[name]){
        return modules[name];
    }
    else {
        console.error("Not found:", name);
    }
});
