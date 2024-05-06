import { defineComponent } from 'vue';
export default defineComponent((_, { expose }) => {
  expose({
    getClipDataURL: 1,
  });
  return () => <div>8888</div>;
});
