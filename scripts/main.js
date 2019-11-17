anime({
  targets: '.shapes .shape,.shape1,.shape2,.shape3',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(200, {grid: [10, 4], from: 'center'}),
  loop: true
});
