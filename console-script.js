Array.prototype.forEach.call(document.querySelectorAll('.r>a:first-child'), function(element) { 
var str = element.href; var main='domain.com'; str = str.replace('http://www.' + main,''); str = str.replace('https://www.' + main,''); str = str.replace('http://' + main,''); str = str.replace('https://' + main,''); console.log(str);
});
