window.onscroll = function() {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('scroll-button').style.display = 'block';
  } else {
    document.getElementById('scroll-button').style.display = 'none';
  }
};

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 20);
  }
};
