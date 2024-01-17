import { defineCustomElement } from 'vue';
import TestComponent from '@/components/TestComponent.ce.vue';

const MyComponent = defineCustomElement(TestComponent);

export { MyComponent };

customElements.define('my-component', MyComponent);
