window.addEvent('domready', function() {
  $('portmore').fade('hide');
  var morph = new Fx.Morph('main', {duration: 'long'});
  var bodyTween = new Fx.Tween($('all'), {duration: 'long'});
  $('home').addEvent('click', function(e) {
    e.stop();
    $('inner').setStyle('margin-left', '0');
    bodyTween.start('background-color', '#0c0140');
    $('main').morph('.home');
    $('inner').set('html', home);
    $('portmore').fade('out');
    $('nav_about').set('html', '&rsaquo;');
    $('nav_resume').set('html', '&rsaquo;');
    $('nav_portfolio').set('html', '&rsaquo;')
  });
  $('about').addEvent('click', function(e) {
    e.stop();
    $('inner').setStyle('margin-left', '0');
    bodyTween.start('background-color', '#B8000B');
    $('main').morph('.about');
    $('inner').set('html', about);
    $('portmore').fade('out');
    $('nav_about').set('html', '&raquo;');
    $('nav_resume').set('html', '&rsaquo;');
    $('nav_portfolio').set('html', '&rsaquo;');
  });
  $('resume').addEvent('click', function(e) {
    e.stop();
    $('inner').setStyle('margin-left', '0');
    bodyTween.start('background-color', '#f60');
    $('main').morph('.resume');
    $('inner').set('html', resume);
    $('portmore').fade('out');
    $('nav_about').set('html', '&rsaquo;');
    $('nav_resume').set('html', '&raquo;');
    $('nav_portfolio').set('html', '&rsaquo;')
  });
  $('portfolio').addEvent('click', function(e) {
    e.stop();
    page1();
    bodyTween.start('background-color', '#030');
    $('main').morph('.portfolio');
    $('inner').set('html', portfolio);
    $('portmore').fade('in');
    $('nav_about').set('html', '&rsaquo;');
    $('nav_resume').set('html', '&rsaquo;');
    $('nav_portfolio').set('html', '&raquo;')
  });

  $$('#more1, #more2, #more3, #more4').addEvents({
    'mouseover': function(){
      this.setStyle('font-weight','bold');
    },'mouseout': function(){
      this.setStyle('font-weight','normal');
    }
  });
  $('more1').addEvent('click', function(e) {
    page1();
  });
  $('more2').addEvent('click', function(e) {
    page2();
  });
  $('more3').addEvent('click', function(e) {
    page3();
  });
  $('more4').addEvent('click', function(e) {
    page4();
  });
});
function openmb(imgid, txt){
  var w = 700, h = 500;
  if (typeof(window.innerWidth) === 'number') {
    w = window.innerWidth;
    h = window.innerHeight;
  } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
    w = document.documentElement.clientWidth;
    h = document.documentElement.clientHeight;
  }
  if(w > 1118){ w = 1118; }
  MOOdalBox.open('zoom.php?imgid='+imgid, txt, (w - 100)+' '+(h - 150));
}
function page1(){
  $('inner').tween('margin-left', '0px');
  $('more1').tween('background-color', '#7a8');
  $('more2').tween('background-color', '#aaa');
  $('more3').tween('background-color', '#aaa');
  $('more4').tween('background-color', '#aaa');
}
function page2(){
  $('inner').tween('margin-left', '-370px');
  $('more1').tween('background-color', '#aaa');
  $('more2').tween('background-color', '#7a8');
  $('more3').tween('background-color', '#aaa');
  $('more4').tween('background-color', '#aaa');
}
function page3(){
  $('inner').tween('margin-left', '-740px');
  $('more1').tween('background-color', '#aaa');
  $('more2').tween('background-color', '#aaa');
  $('more3').tween('background-color', '#7a8');
  $('more4').tween('background-color', '#aaa');
}
function page4(){
  $('inner').tween('margin-left', '-1110px');
  $('more1').tween('background-color', '#aaa');
  $('more2').tween('background-color', '#aaa');
  $('more3').tween('background-color', '#aaa');
  $('more4').tween('background-color', '#7a8');
}
