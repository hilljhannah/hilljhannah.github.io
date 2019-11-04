var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1750,
  direction: 'alternate',
  loop: true
});
tl
.add({
  targets: '.shape',
  translateY: -350,
  scale: 4,
  rotate: '1turn'
}, 100)
.add({
  targets: '.shape1',
  translateY: -250,
  scale: 4,
  rotate: '1turn',
  opacity: .5
}, 200) // relative offset
.add({
  targets: '.shape2',
  translateY: -150,
  scale: 4,
  rotate: '1turn',
  opacity: .25
}, 300) // relative offset
.add({
  targets: '.shape3',
  translateY: -50,
  scale: 4,
  rotate: '1turn',
  opacity: .15
}, 400); // absolute offset


//const tl = anime.timeline({
//  loop: true,
//  autoplay: true,
//  easing: 'linear',
//  duration: 1000
//});
//timeline.add({
//  targets: 'div.bg_text',
//backgroundColor: '#CFCFCF',
//  opacity: 1
//});
