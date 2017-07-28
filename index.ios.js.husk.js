(function (require){
    RE_NATAL_PLACEHOLDER(require);
})(function (name) {
    var modules={'react-native': require('react-native'), 'react': require('react')};modules['./images/cljs.png']=require('./images/cljs.png');
    if (modules[name]){
        return modules[name];
    }
    else {
        console.error("Not found:", name);
    }
});
