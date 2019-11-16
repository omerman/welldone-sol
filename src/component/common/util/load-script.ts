export function loadScript(src: string, id: string, position: HTMLElement | null = document.querySelector('head')) {
  if (!position) {
    console.warn('position given is null')
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}