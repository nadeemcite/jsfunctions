/*
  To decode JWT token and get data as JSON object (Only to get data - Not useful to verify or authenticate)
*/
decodeJwtToken = function(t) {
	var splits=t.split(".");
	var s=splits[1];
	var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
	var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	for(i=0;i<64;i++){e[A.charAt(i)]=i;}
	for(x=0;x<L;x++){
		c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
		while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
	}
	
	//This was created on 29/4/2016
	return JSON.parse(r);
};
