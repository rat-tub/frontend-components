export default function lazyLoad(node: Element, observer: IntersectionObserver | null) {
  observer && observer.observe(node);
  return {
    destroy() {
      observer && observer.unobserve(node);
    },
  };
}
