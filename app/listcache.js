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
        console.log('element', element, index, array.length, array);
        caches.open(element).then(function(x) {
            console.log('keys', x.keys());
            return x.keys();
    }).then(function(z) {
        console.log('z', element, z);
        z.forEach(function(element, index, array) {
            console.log('z1', element, element.url, index, array.length);
        })
    })
    })
});

caches.keys().then(function(response) {
    response.forEach(function(element, index, array) {
        caches.open(element).then(function(x) {
            return x.keys();
    }).then(function(items) {
        items.forEach(function(element, index, array) {
            //console.log('item', element, element.url, index, array.length);
            var div = document.createElement('div');
            div.innerHTML='<a href="'+element.url+'">'+element.url+'</a>';
            document.body.appendChild(div);
        })
    })
    })
});


function appendurl(){
caches.keys().then(function(response) {  // jshint ignore:line
    //response.forEach(function(element, index, array) {
    response.forEach(function(element) {
        caches.open(element).then(function(x) {  // jshint ignore:line
            return x.keys();
    }).then(function(items) {
        var map1={};
        var count1=0;
        //items.forEach(function(element, index, array) {
        items.forEach(function(element) {
            //console.log('item', element, element.url, index, array.length);

            var parser = document.createElement('a');
            parser.href = element.url;
            //var params = JSON.stringify(new URL(element.url).query);
            var found = new URL(element.url).queryterm;
            //var params = JSON.stringify(new URL(element.url).queryterm);

            //var div = document.createElement('div');
            //div.innerHTML='<b>'+index+' of ' + array.length+'</b><a href="'+element.url+'">'+element.url+'</a>';
            //div.innerHTML='<b>'+index+' of ' + array.length+'</b>' + parser.search;

            //div.innerHTML='<b>'+index+' of ' + array.length+'</b>' + found;
            //document.body.appendChild(div);
            
            if (typeof found !== 'undefined') {
                if (found in map1){
                    map1[found]++;
                } else {
                    map1[found]=1;
                    count1++;
                }
            }
        });

            var div = document.createElement('div');
            div.innerHTML='';
            //console.log(map1);
            if(count1 > 0){
            //div.innerHTML='<a onclick="deleteall();" href="#">delete-all</a>&nbsp;|&nbsp;';
            div.innerHTML='<paper-button raised="true" style="background-color: lightblue;" onclick="deleteall()";>Delete-All</paper-button>&nbsp;|&nbsp;';
            }
            for (var key in map1){
                var val=map1[key];
                //key=key.replace(/"/g,'');
                div.innerHTML+= '<a onclick="process1(\''+key+'\');" on-click="searchData" href="#'+key+'">'+decodeURIComponent(key)+'&nbsp;('+val+')</a>&mdash;';
            }
            //div.innerHTML= JSON.stringify(map1);
            //console.log(JSON.stringify(map1));
            console.log(div.innerHTML);
            var documentBody = document.querySelector('#Links');
            documentBody.innerHTML=div.innerHTML;
            //documentBody.appendChild(div);
            //documentBody.replaceChild(div);
    });
    });
});
}

function deleteall(){
caches.keys().then(function(response) {  // jshint ignore:line
    response.forEach(function(element) {
        var cache=caches.open(element); // jshint ignore:line
        cache.then(function(x) {  // jshint ignore:line
            return x.keys();
    }).then(function(items) {
        var map1={};
        var count1=0;
        items.forEach(function(element) {

            var found = new URL(element.url).queryterm;
            
            if (typeof found !== 'undefined') {
                cache.delete(element);
            }
        });

    });
    });
});
}
