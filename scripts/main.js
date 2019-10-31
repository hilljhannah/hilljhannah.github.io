var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1750,
  loop: true
});
tl
.add({
  targets: '.shape',
  translateY: -250,
  scale: 4,
  rotate: '1turn'
}, 100)
.add({
  targets: '.shape1',
  translateX: 250,
  scale: 4,
  rotate: '1turn'
}, 200) // relative offset
.add({
  targets: '.shape2',
  translateY: 250,
  scale: 4,
  rotate: '1turn'
}, 300) // relative offset
.add({
  targets: '.shape3',
  translateX: -250,
  scale: 4,
  rotate: '1turn'
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
