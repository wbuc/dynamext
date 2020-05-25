<template>
     <tag-input :tags="tags" @update="(newTags) => $emit('update', newTags)">
          <div
               class="tag-input"
               slot-scope="{ tags, removeTag, removeButtonEvents, inputProps, inputEvents }"
          >
               <span v-for="tag in tags" :key="tag" class="tag-input-tag">
                    <v-chip
                         color="teal"
                         label
                         close
                         @click:close="removeButtonEvents(tag)"
                         class="mr-1 mb-1"
                    >{{tag}}</v-chip>
               </span>
               <input
                    class="tag-input-text"
                    placeholder="Add new..."
                    v-bind="inputProps"
                    v-on="inputEvents"
               />
          </div>
     </tag-input>
</template>

<script>
import TagInput from "@/components/renderless-tag-list";

export default {
     components: {
          TagInput
     },
     model: {
          prop: "tags",
          event: "update"
     },
     props: {
          tags: { required: true }
     },
     data() {
          return {};
     },
     methods: {}
};
</script>
<style scoped>
.tag-input-text {
     -webkit-box-flex: 1;
     -ms-flex: 1;
     flex: 1;
     outline: 0;
     padding-top: 0.25rem;
     padding-bottom: 0.25rem;
     margin-bottom: 0.25rem;
     padding-right: 0.5rem;
     min-width: 8rem;
}
</style>
