import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders the supplied greeting', () => {
    const wrapper = mount(HelloWorld, { props: { message: 'Dependency smoke' } });
    expect(wrapper.text()).toContain('Dependency smoke');
  });
});
