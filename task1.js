var domain="https:///www.google.com/search?gs_ssp=eJzj4tTP1TewzEou=youtube";
var pattern=/^(https:(\/){2}([a-zA-Z\.-]+)|http:(\/){2}([a-zA-Z\.-]+))+(\/[a-zA-Z\W\d\_]+)+$/gi
var isMatch=pattern.test(domain)
console.log(isMatch);
