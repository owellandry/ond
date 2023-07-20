// Función createElement para crear elementos virtuales
function createElement(type, props, ...children) {
    return { type, props, children };
  }
  
  // Función render para renderizar componentes en el DOM
  function render(vnode, container) {
    if (typeof vnode === 'string') {
      container.innerHTML = vnode;
    } else {
      const { type, props, children } = vnode;
      const element = document.createElement(type);
  
      for (let prop in props) {
        if (prop.startsWith('on') && prop.toLowerCase() in window) {
          element.addEventListener(prop.toLowerCase().substring(2), props[prop]);
        } else {
          element.setAttribute(prop, props[prop]);
        }
      }
  
      if (children) {
        children.forEach((child) => render(child, element));
      }
  
      container.appendChild(element);
    }
  }
  
  export { createElement, render };
  