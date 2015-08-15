caches.open("$$$toolbox-cache$$$https://civic-data.github.io/opengov/$$$").then(function(x) {
    console.log(x.keys());
    return x.keys();
}).then(function(z) {
    console.log(z);
})

caches.keys().then(function(key){
    caches.open(key).then(function(x) {
    //console.log(x.keys());
    return x;
})
}).then(function(z) {
    console.log(z);
})

caches.keys().then(function(keys){
    console.log('keys:',keys);
    for (String key: keys){
    caches.open(key).then(function(x) {
    console.log('keys',x.keys());
    return x.keys();
    })
    }
}).then(function(z) {
    console.log('z',z);
})


caches.open("$$$toolbox-cache$$$https://civic-data.github.io/opengov/$$$").then(function(x){console.log(x.keys()); return x.keys();}).then(function(z){console.log(z);})

caches.open("$$$toolbox-cache$$$https://civic-data.github.io/opengov/$$$").then(function(x) {
    console.log('keys:',x.keys());
    return x.keys();
}).then(function(z) {
    console.log('z',z);
})

caches.keys().then(function(response){
console.log('111:keys',typeof response);
console.log('111:keys',response);
response.forEach(function(element, index, array) {
      //cache.delete(element);
      console.log('element',element,index,array);
          });
    caches.open(keys[0]).then(function(x) {
    console.log('keys',x.keys());
    return x.keys();
    })
}).then(function(z) {
    console.log('z',z);
})

caches.keys().then(function(response) {
    console.log('111:keys', typeof response);
    console.log('111:keys', response);
    response.forEach(function(element, index, array) {
        //cache.delete(element);
        console.log('element', element, index, array);
        caches.open(element).then(function(x) {
            console.log('keys', x.keys());
            return x.keys();
    }).then(function(z) {
        console.log('z', element, z);
    })
    })
});

caches.keys().then(function(response) {
    console.log('111:keys', typeof response);
    console.log('111:keys', response);
    response.forEach(function(element, index, array) {
        //cache.delete(element);
        console.log('element', element, index, array);
        caches.open(element).then(function(x) {
            console.log('keys', x.keys());
            return x.keys();
    }).then(function(z) {
        console.log('z', element, z);
        z.forEach(function(element, index, array) {
            console.log('z1', element, index);
        })
    })
    })
});
