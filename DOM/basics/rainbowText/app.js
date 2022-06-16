const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll('span');
spans.forEach((span, index) => (span.style.color = colors[index]));
